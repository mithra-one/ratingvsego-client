import React from "react";
import ContentLoader from "react-content-loader";
import { useMediaQuery } from "react-responsive";

const ExpertAvatarSkeleton = () => {
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

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ContentLoader
        speed={2}
        width={
          screenXS || screenSM
            ? "65"
            : screenSMD
            ? "75"
            : screenMD
            ? "90"
            : "100"
        }
        height={
          screenXS || screenSM
            ? "65"
            : screenSMD
            ? "75"
            : screenMD
            ? "90"
            : "100"
        }
        viewBox={`0 0 ${
          screenXS || screenSM
            ? "65"
            : screenSMD
            ? "75"
            : screenMD
            ? "90"
            : "100"
        } ${
          screenXS || screenSM
            ? "65"
            : screenSMD
            ? "75"
            : screenMD
            ? "90"
            : "100"
        }`}
        backgroundColor="#100100"
        foregroundColor="#513427"
      >
        <rect
          x="0"
          y="0"
          rx="50"
          ry="50"
          width={
            screenXS || screenSM
              ? "65"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS || screenSM
              ? "65"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
        />
      </ContentLoader>
    </div>
  );
};

export default ExpertAvatarSkeleton;
