import React from "react";
import ContentLoader from "react-content-loader";
import { useMediaQuery } from "react-responsive";

const RatingSkeleton = () => {
  const screenXS = useMediaQuery({
    minWidth: "0px",
    maxWidth: "320px",
  });

  const screenSM = useMediaQuery({
    minWidth: "321px",
    maxWidth: "480px",
  });

  const screenSMD = useMediaQuery({
    minWidth: "481px",
    maxWidth: "700px",
  });

  const screenMD = useMediaQuery({
    minWidth: "701px",
    maxWidth: "768px",
  });

  const screenLG = useMediaQuery({
    minWidth: "769px",
    maxWidth: "1024px",
  });

  const screenXL = useMediaQuery({
    minWidth: "1025px",
    maxWidth: "1200px",
  });

  const screenXXL = useMediaQuery({
    minWidth: "1201px",
    maxWidth: "1400px",
  });

  const screenXXXL = useMediaQuery({
    minWidth: "1401px",
  });

  const screenXS_l = useMediaQuery({
    minHeight: "0px",
    maxHeight: "400px",
    maxWidth: "600px",
  });

  const screenSM_l1 = useMediaQuery({
    minHeight: "0px",
    maxHeight: "400px",
    maxWidth: "750px",
  });

  const screenSM_l2 = useMediaQuery({
    minHeight: "0px",
    maxHeight: "400px",
    maxWidth: "900px",
  });

  const screenSM_l3 = useMediaQuery({
    minHeight: "0px",
    maxHeight: "600px",
    maxWidth: "750px",
  });

  const screenSM_l4 = useMediaQuery({
    minHeight: "0px",
    maxHeight: "600px",
    maxWidth: "900px",
  });
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ContentLoader
        speed={2}
        width={
          screenXS
            ? "282"
            : screenXS_l
            ? "522"
            : screenSM
            ? "312"
            : screenSM_l1
            ? "592"
            : screenSMD
            ? "542"
            : screenMD
            ? "692"
            : screenLG
            ? "892"
            : screenXXL
            ? "1192"
            : "1392"
        }
        height={650}
        viewBox={`0 0 ${
          screenXS
            ? "282"
            : screenXS_l
            ? "522"
            : screenSM
            ? "312"
            : screenSM_l1
            ? "592"
            : screenSMD
            ? "542"
            : screenMD
            ? "692"
            : screenLG
            ? "892"
            : screenXXL
            ? "1192"
            : "1390"
        } 650`}
        backgroundColor="#100100"
        foregroundColor="#513427"
      >
        <rect
          x="5"
          y="5"
          rx="3"
          ry="3"
          width={
            screenXS
              ? "273"
              : screenXS_l
              ? "510"
              : screenSM
              ? "303"
              : screenSM_l1
              ? "579"
              : screenSMD
              ? "530"
              : screenMD
              ? "680"
              : screenLG
              ? "880"
              : screenXXL
              ? "1179"
              : "1379"
          }
          height={screenXS ? "60" : screenSM ? "70" : "80"}
        />
        <rect
          x="5"
          y={screenXS ? "70" : screenSM ? "80" : "90"}
          rx="3"
          ry="3"
          width={
            screenXS
              ? "273"
              : screenXS_l
              ? "510"
              : screenSM
              ? "303"
              : screenSM_l1
              ? "579"
              : screenSMD
              ? "530"
              : screenMD
              ? "680"
              : screenLG
              ? "880"
              : screenXXL
              ? "1179"
              : "1379"
          }
          height={screenXS ? "60" : screenSM ? "70" : "80"}
        />
        <rect
          x="5"
          y={screenXS ? "135" : screenSM ? "155" : "175"}
          rx="3"
          ry="3"
          width={
            screenXS
              ? "273"
              : screenXS_l
              ? "510"
              : screenSM
              ? "303"
              : screenSM_l1
              ? "579"
              : screenSMD
              ? "530"
              : screenMD
              ? "680"
              : screenLG
              ? "880"
              : screenXXL
              ? "1179"
              : "1379"
          }
          height={screenXS ? "60" : screenSM ? "70" : "80"}
        />
        <rect
          x="5"
          y={screenXS ? "200" : screenSM ? "230" : "260"}
          rx="3"
          ry="3"
          width={
            screenXS
              ? "273"
              : screenXS_l
              ? "510"
              : screenSM
              ? "303"
              : screenSM_l1
              ? "579"
              : screenSMD
              ? "530"
              : screenMD
              ? "680"
              : screenLG
              ? "880"
              : screenXXL
              ? "1179"
              : "1379"
          }
          height={screenXS ? "60" : screenSM ? "70" : "80"}
        />
        <rect
          x="5"
          y={screenXS ? "265" : screenSM ? "305" : "345"}
          rx="3"
          ry="3"
          width={
            screenXS
              ? "273"
              : screenXS_l
              ? "510"
              : screenSM
              ? "303"
              : screenSM_l1
              ? "579"
              : screenSMD
              ? "530"
              : screenMD
              ? "680"
              : screenLG
              ? "880"
              : screenXXL
              ? "1179"
              : "1379"
          }
          height={screenXS ? "60" : screenSM ? "70" : "80"}
        />
        <rect
          x="5"
          y={screenXS ? "330" : screenSM ? "380" : "430"}
          rx="3"
          ry="3"
          width={
            screenXS
              ? "273"
              : screenXS_l
              ? "510"
              : screenSM
              ? "303"
              : screenSM_l1
              ? "579"
              : screenSMD
              ? "530"
              : screenMD
              ? "680"
              : screenLG
              ? "880"
              : screenXXL
              ? "1179"
              : "1379"
          }
          height={screenXS ? "60" : screenSM ? "70" : "80"}
        />
        <rect
          x="5"
          y={screenXS ? "395" : screenSM ? "455" : "515"}
          rx="3"
          ry="3"
          width={
            screenXS
              ? "273"
              : screenXS_l
              ? "510"
              : screenSM
              ? "303"
              : screenSM_l1
              ? "579"
              : screenSMD
              ? "530"
              : screenMD
              ? "680"
              : screenLG
              ? "880"
              : screenXXL
              ? "1179"
              : "1379"
          }
          height={screenXS ? "60" : screenSM ? "70" : "80"}
        />
        <rect
          x="5"
          y={screenXS ? "460" : screenSM ? "530" : "600"}
          rx="3"
          ry="3"
          width={
            screenXS
              ? "273"
              : screenXS_l
              ? "510"
              : screenSM
              ? "303"
              : screenSM_l1
              ? "579"
              : screenSMD
              ? "530"
              : screenMD
              ? "680"
              : screenLG
              ? "880"
              : screenXXL
              ? "1179"
              : "1379"
          }
          height={screenXS ? "60" : screenSM ? "70" : "80"}
        />
        {(screenXS || screenSM) && (
          <>
            <rect
              x="5"
              y={screenXS ? "525" : "605"}
              rx="3"
              ry="3"
              width={
                screenXS
                  ? "273"
                  : screenSM
                  ? "303"
                  : screenSMD
                  ? "530"
                  : screenMD
                  ? "680"
                  : "1379"
              }
              height={screenXS ? "60" : screenSM ? "70" : "80"}
            />
          </>
        )}
        {screenXS && (
          <>
            <rect x="5" y="590" rx="3" ry="3" width={273} height={60} />
          </>
        )}
      </ContentLoader>
    </div>
  );
};

export default RatingSkeleton;
