import React from "react";
import ContentLoader from "react-content-loader";
import { useMediaQuery } from "react-responsive";

const EpisodesSkeleton = () => {
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

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ContentLoader
        speed={2}
        width={
          screenXS
            ? "260"
            : screenSM
            ? "320"
            : screenSMD
            ? "480"
            : screenMD
            ? "700"
            : screenLG
            ? "700"
            : screenXL
            ? "1000"
            : screenXXL
            ? "1200"
            : "1400"
        }
        height={
          screenXS
            ? "660"
            : screenSM
            ? "725"
            : screenSMD
            ? "160"
            : screenMD
            ? "171"
            : screenLG
            ? "220"
            : screenXL
            ? "240"
            : screenXXL
            ? "285"
            : "293"
        }
        viewBox={`0 0 ${
          screenXS
            ? "260"
            : screenSM
            ? "320"
            : screenSMD
            ? "480"
            : screenMD
            ? "700"
            : screenLG
            ? "700"
            : screenXL
            ? "1000"
            : screenXXL
            ? "1200"
            : "1400"
        } ${
          screenXS
            ? "660"
            : screenSM
            ? "725"
            : screenSMD
            ? "160"
            : screenMD
            ? "171"
            : screenLG
            ? "220"
            : screenXL
            ? "240"
            : screenXXL
            ? "285"
            : "293"
        }`}
        backgroundColor="#100100"
        foregroundColor="#513427"
      >
        {/* video 1 */}
        <rect
          x="0"
          y="0"
          rx="3"
          ry="3"
          width={
            screenXS
              ? "260"
              : screenSM
              ? "320"
              : screenSMD
              ? "140"
              : screenMD || screenLG
              ? "210"
              : screenXL
              ? "293"
              : screenXXL
              ? "360"
              : "427"
          }
          height={
            screenXS
              ? "164"
              : screenSM
              ? "180"
              : screenSMD
              ? "92"
              : screenMD || screenLG
              ? "119"
              : screenXL
              ? "166"
              : screenXXL
              ? "203"
              : "240"
          }
        />
        {/* title 1 */}
        <rect
          x="0"
          y={
            screenXS
              ? "174"
              : screenSM
              ? "190"
              : screenSMD
              ? "102"
              : screenMD || screenLG
              ? "129"
              : screenXL
              ? "176"
              : screenXXL
              ? "213"
              : "250"
          }
          rx="3"
          ry="3"
          width={
            screenXS
              ? "260"
              : screenSM
              ? "320"
              : screenSMD
              ? "140"
              : screenMD || screenLG
              ? "210"
              : screenXL
              ? "293"
              : screenXXL
              ? "360"
              : "427"
          }
          height={
            screenXS || screenMD || screenLG
              ? "30"
              : screenSM
              ? "35"
              : screenSMD
              ? "20"
              : "40"
          }
        />
        {/* video 2*/}
        <rect
          x={
            screenXS
              ? "0"
              : screenSM
              ? "0"
              : screenSMD
              ? "170"
              : screenMD || screenLG
              ? "245"
              : screenXL
              ? "353"
              : screenXXL
              ? "420"
              : "487"
          }
          y={screenXS ? "220" : screenSM ? "240" : "0"}
          rx="3"
          ry="3"
          width={
            screenXS
              ? "260"
              : screenSM
              ? "320"
              : screenSMD
              ? "140"
              : screenMD || screenLG
              ? "210"
              : screenXL
              ? "293"
              : screenXXL
              ? "360"
              : "427"
          }
          height={
            screenXS
              ? "164"
              : screenSM
              ? "180"
              : screenSMD
              ? "92"
              : screenMD || screenLG
              ? "119"
              : screenXL
              ? "166"
              : screenXXL
              ? "203"
              : "240"
          }
        />
        {/* title 2 */}
        <rect
          x={
            screenXS
              ? "0"
              : screenSM
              ? "0"
              : screenSMD
              ? "170"
              : screenMD || screenLG
              ? "245"
              : screenXL
              ? "353"
              : screenXXL
              ? "420"
              : "487"
          }
          y={
            screenXS
              ? "394"
              : screenSM
              ? "430"
              : screenSMD
              ? "102"
              : screenMD || screenLG
              ? "129"
              : screenXL
              ? "176"
              : screenXXL
              ? "213"
              : "250"
          }
          rx="3"
          ry="3"
          width={
            screenXS
              ? "260"
              : screenSM
              ? "320"
              : screenSMD
              ? "140"
              : screenMD || screenLG
              ? "210"
              : screenXL
              ? "293"
              : screenXXL
              ? "360"
              : "427"
          }
          height={
            screenXS || screenMD || screenLG
              ? "30"
              : screenSM
              ? "35"
              : screenSMD
              ? "20"
              : "40"
          }
        />
        {/* video 3 */}
        <rect
          x={
            screenXS
              ? "0"
              : screenSM
              ? "0"
              : screenSMD
              ? "340"
              : screenMD || screenLG
              ? "490"
              : screenXL
              ? "706"
              : screenXXL
              ? "840"
              : "974"
          }
          y={screenXS ? "440" : screenSM ? "480" : "0"}
          rx="3"
          ry="3"
          width={
            screenXS
              ? "260"
              : screenSM
              ? "320"
              : screenSMD
              ? "140"
              : screenMD || screenLG
              ? "210"
              : screenXL
              ? "293"
              : screenXXL
              ? "360"
              : "427"
          }
          height={
            screenXS
              ? "164"
              : screenSM
              ? "180"
              : screenSMD
              ? "92"
              : screenMD || screenLG
              ? "119"
              : screenXL
              ? "166"
              : screenXXL
              ? "203"
              : "240"
          }
        />
        {/* title 3 */}
        <rect
          x={
            screenXS
              ? "0"
              : screenSM
              ? "0"
              : screenSMD
              ? "340"
              : screenMD || screenLG
              ? "490"
              : screenXL
              ? "706"
              : screenXXL
              ? "840"
              : "974"
          }
          y={
            screenXS
              ? "614"
              : screenSM
              ? "670"
              : screenSMD
              ? "102"
              : screenMD || screenLG
              ? "129"
              : screenXL
              ? "176"
              : screenXXL
              ? "213"
              : "250"
          }
          rx="3"
          ry="3"
          width={
            screenXS
              ? "260"
              : screenSM
              ? "320"
              : screenSMD
              ? "140"
              : screenMD
              ? "210"
              : screenLG
              ? "276"
              : screenXL
              ? "293"
              : screenXXL
              ? "360"
              : "427"
          }
          height={
            screenXS || screenMD || screenLG
              ? "30"
              : screenSM
              ? "35"
              : screenSMD
              ? "20"
              : "40"
          }
        />
      </ContentLoader>
    </div>
  );
};

export default EpisodesSkeleton;
