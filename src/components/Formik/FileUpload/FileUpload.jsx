import React, { useState, useRef } from "react";
import Modal from "../../Modal/Modal";
import getCroppedImg from "../../../utils/cropImg";
import AddImageIcon from "../../../assets/icons/addImage.svg?react";
import DeleteIcon from "../../../assets/icons/delete.svg?react";
import ResetIcon from "../../../assets/icons/reset.svg?react";
import UploadIcon from "../../../assets/icons/upload.svg?react";
import Cropper from "react-easy-crop";
import { useDispatch, useSelector } from "react-redux";
import { FetchStart, FetchSuccess, FetchFailure } from "../../../redux/actions";
import s from "./FileUpload.module.scss";

const FileUpload = ({
  isShowing,
  toggleModal,
  formikProps,
  finalImage,
  setFinalImage,
  name,
  id,
  placeholder,
  minHeight,
  aspect,
}) => {
  const { isFetching, error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState("");
  const [fileUploadError, setFileUploadError] = useState(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        selectedImage,
        croppedAreaPixels,
        rotation
      );
      console.log("donee", { croppedImage });
      setFinalImage(croppedImage);
    } catch (e) {
      console.error(e);
      return;
    }
  };

  const clearCroppedImage = () => {
    setFinalImage(null);
  };

  const serverUpload = async () => {
    const imageData = new FormData();
    if (finalImage) {
      dispatch(FetchStart());
      try {
        const response = await fetch(finalImage);
        const blob = await response.blob();
        const fileName =
          name + Date.now() + Math.floor(Math.random() * 420) + ".webp";
        imageData.append("media", fileName);
        imageData.append(name, blob);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: imageData,
        });
        const data = await res.json();

        if (data.success === false) {
          console.log(data.message);
          setFileUploadError(data.message);
          dispatch(FetchFailure(data.message));
          return;
        }
        console.log(data);
        dispatch(FetchSuccess());
        formikProps.setFieldValue(name, fileName);
        toggleModal();
      } catch (err) {
        console.log(err);
        setFileUploadError(err);
        dispatch(FetchFailure(err));
      }
    }
  };

  const fileInputRef = useRef();

  const loadFile = (file) => {
    setFinalImage(null);
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
      fileInputRef.current.value = "";
    };
    reader.readAsDataURL(file);
    toggleModal();
  };

  const removeDragData = (event) => {
    if (event.dataTransfer.items) {
      event.dataTransfer.items.clear();
      return;
    }
    event.dataTransfer.clearData();
  };

  const handleChange = (event) => {
    event.persist();

    if (event.target.files.length > 0) {
      loadFile(event.target.files[0]);
    }
  };

  const handleOnDrop = (event) => {
    event.persist();
    event.preventDefault();

    if (event.dataTransfer.items) {
      for (let item of event.dataTransfer.items) {
        if (item.kind === "file") {
          loadFile(item.getAsFile());
        }
      }
    } else if (event.dataTransfer.files.length > 0) {
      loadFile(event.dataTransfer.files[0]);
    }

    removeDragData(event);
  };

  const handleOnDragOver = (event) => {
    event.persist();
    event.preventDefault();
  };

  const handleDeleteValue = () => {
    setSelectedImage(null);
    formikProps.setFieldValue(name, null);
    setFinalImage(null);
  };

  return (
    <>
      {selectedImage && isShowing && (
        <Modal isShowing={isShowing} hide={toggleModal} closeOnClickOut={false}>
          <div className={s.modalContent}>
            <div className={s.cropContainer}>
              {finalImage ? (
                <img src={finalImage} alt="" className={s.finalImage} />
              ) : (
                <Cropper
                  image={selectedImage}
                  crop={crop}
                  rotation={rotation}
                  zoom={zoom}
                  aspect={aspect}
                  onCropChange={setCrop}
                  onRotationChange={setRotation}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              )}
            </div>
            <div className={s.controls}>
              {fileUploadError && (
                <>
                  <div className={s.uploadError}>{fileUploadError}</div>
                  <div className={s.uploadError}>{error}</div>
                </>
              )}
              {!finalImage ? (
                <div className={s.cropImage}>
                  <div className={s.sliderContainer}>
                    <span className={s.title}>Увеличение</span>
                    <input
                      type="range"
                      value={zoom}
                      min={1}
                      max={3}
                      step={0.1}
                      onChange={(e) => setZoom(e.currentTarget.value)}
                      onInput={(e) => setZoom(e.currentTarget.value)}
                      className={s.zoomRange}
                      disabled={finalImage}
                    />
                    <span className={s.value}>{zoom}x</span>
                  </div>
                  <div className={s.sliderContainer}>
                    <span className={s.title}>Поворот</span>
                    <input
                      type="range"
                      value={rotation}
                      min={0}
                      max={360}
                      step={1}
                      onChange={(e) => setRotation(e.currentTarget.value)}
                      onInput={(e) => setRotation(e.currentTarget.value)}
                      className={s.rotateRange}
                      disabled={finalImage}
                    />
                    <span className={s.value}>{rotation}°</span>
                  </div>
                  <button
                    type="button"
                    onClick={showCroppedImage}
                    className={s.cropButton}
                    disabled={finalImage}
                  >
                    <span>Обрезать</span>
                  </button>
                </div>
              ) : (
                <div className={s.resetUpload}>
                  <button
                    type="button"
                    className={s.clearImage}
                    onClick={clearCroppedImage}
                    disabled={isFetching}
                  >
                    <ResetIcon /> <span>Сбросить</span>
                  </button>
                  <button
                    type="button"
                    className={s.uploadImage}
                    onClick={serverUpload}
                    disabled={isFetching}
                  >
                    {isFetching ? (
                      <span>Загрузка...</span>
                    ) : (
                      <>
                        <UploadIcon /> <span>Загрузить</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
      <div className={s.inputField}>
        <label htmlFor={id}>{placeholder}</label>
        <div
          style={{ minHeight: minHeight }}
          className={s.uploadArea}
          draggable="true"
          onDrop={handleOnDrop}
          onDragOver={handleOnDragOver}
        >
          {finalImage && (
            <DeleteIcon onClick={handleDeleteValue} className={s.deleteIcon} />
          )}
          <label
            className={s.label}
            htmlFor="fileInput"
            style={{
              background: `url(${finalImage})`,
            }}
          >
            {!finalImage && (
              <>
                <AddImageIcon className={s.uploadIcon} />
                <span>
                  Перетащите файл сюда или <br /> нажмите для загрузки
                </span>
              </>
            )}
          </label>
        </div>
        <input
          ref={fileInputRef}
          className={s.fileInput}
          accept="image/*"
          type="file"
          id="fileInput"
          onChange={handleChange}
        />

        {formikProps.errors[name] && formikProps.touched[name] ? (
          <div className={s.formikError}>{formikProps.errors[name]}</div>
        ) : null}
      </div>
    </>
  );
};
export default FileUpload;
