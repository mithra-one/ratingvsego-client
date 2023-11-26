import React from "react";
import ContentLoader from "react-content-loader";
import { useMediaQuery } from "react-responsive";

const RatingItemSkeleton = () => {
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

  const screenSM_l = useMediaQuery({
    minHeight: "0px",
    maxHeight: "400px",
    maxWidth: "750px",
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
            : screenSM_l
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
        height={80}
        viewBox={`0 0 ${
          screenXS
            ? "282"
            : screenXS_l
            ? "522"
            : screenSM
            ? "312"
            : screenSM_l
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
        } 80`}
        backgroundColor="#100100"
        foregroundColor="#513427"
      >
        <rect
          x="5"
          y="4"
          rx="3"
          ry="3"
          width={
            screenXS
              ? "273"
              : screenXS_l
              ? "510"
              : screenSM
              ? "303"
              : screenSM_l
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
          height={screenXS ? "56" : screenSM ? "66" : "76"}
        />
      </ContentLoader>
    </div>
  );
};

export default RatingItemSkeleton;
