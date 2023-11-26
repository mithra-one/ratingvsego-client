import React from "react";
import ContentLoader from "react-content-loader";
import { useMediaQuery } from "react-responsive";

const ExpertListSkeleton = () => {
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

  return (
    <div
      style={{
        width: `${screenSMD ? "480px" : screenLG ? "700px" : "100%"}`,
        height: "100%",
        margin: "0 auto",
        paddingTop: `${
          screenXS
            ? "125px"
            : screenSMD
            ? "120px"
            : screenMD
            ? "130px"
            : screenLG
            ? "136px"
            : "135px"
        }`,
      }}
    >
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
            ? "175"
            : screenSM
            ? "190"
            : screenSMD
            ? "220"
            : screenMD
            ? "255"
            : screenLG
            ? "310"
            : screenXL
            ? "310"
            : screenXXL
            ? "310"
            : "310"
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
        }  ${
          screenXS
            ? "175"
            : screenSM
            ? "190"
            : screenSMD
            ? "220"
            : screenMD
            ? "255"
            : screenLG
            ? "310"
            : screenXL
            ? "310"
            : screenXXL
            ? "310"
            : "310"
        }`}
        backgroundColor="#100100"
        foregroundColor="#513427"
      >
        {/* top1: round */}
        <rect
          x={
            screenXS
              ? "7"
              : screenSMD || screenMD
              ? "5"
              : screenLG
              ? "33"
              : screenXXL
              ? "7"
              : screenXXXL
              ? "43"
              : "0"
          }
          y="0"
          rx="50"
          ry="50"
          width={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
        />
        {/* top1: square */}
        <rect
          x={
            screenXS
              ? "7"
              : screenSMD || screenMD
              ? "5"
              : screenLG
              ? "33"
              : screenXXL
              ? "7"
              : screenXXXL
              ? "43"
              : "0"
          }
          y={
            screenXS
              ? "55"
              : screenSM
              ? "55"
              : screenSMD
              ? "65"
              : screenMD
              ? "75"
              : "85"
          }
          rx="3"
          ry="3"
          width={
            screenXS
              ? "65"
              : screenSM
              ? "65"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "28"
              : screenSM
              ? "32"
              : screenSMD
              ? "36"
              : screenMD
              ? "40"
              : "52"
          }
        />

        {/* top2: round */}
        <rect
          x={
            screenXS
              ? "99"
              : screenSM
              ? "87"
              : screenSMD
              ? "105"
              : screenMD
              ? "125"
              : screenLG
              ? "166"
              : screenXL
              ? "128"
              : screenXXL
              ? "142"
              : "178"
          }
          y="0"
          rx="50"
          ry="50"
          width={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
        />
        {/* top2: square */}
        <rect
          x={
            screenXS
              ? "99"
              : screenSM
              ? "87"
              : screenSMD
              ? "105"
              : screenMD
              ? "125"
              : screenLG
              ? "166"
              : screenXL
              ? "128"
              : screenXXL
              ? "142"
              : "178"
          }
          y={
            screenXS
              ? "55"
              : screenSM
              ? "55"
              : screenSMD
              ? "65"
              : screenMD
              ? "75"
              : "85"
          }
          rx="3"
          ry="3"
          width={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "28"
              : screenSM
              ? "32"
              : screenSMD
              ? "36"
              : screenMD
              ? "40"
              : "52"
          }
        />

        {/* top3: round */}
        <rect
          x={
            screenXS
              ? "191"
              : screenSM
              ? "172"
              : screenSMD
              ? "205"
              : screenMD
              ? "245"
              : screenLG
              ? "299"
              : screenXL
              ? "256"
              : screenXXL
              ? "277"
              : "313"
          }
          y="0"
          rx="50"
          ry="50"
          width={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
        />
        {/* top3: square */}
        <rect
          x={
            screenXS
              ? "191"
              : screenSM
              ? "172"
              : screenSMD
              ? "205"
              : screenMD
              ? "245"
              : screenLG
              ? "299"
              : screenXL
              ? "256"
              : screenXXL
              ? "277"
              : "313"
          }
          y={
            screenXS
              ? "55"
              : screenSM
              ? "55"
              : screenSMD
              ? "65"
              : screenMD
              ? "75"
              : "85"
          }
          rx="3"
          ry="3"
          width={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "28"
              : screenSM
              ? "32"
              : screenSMD
              ? "36"
              : screenMD
              ? "40"
              : "52"
          }
        />

        {/* top4: round */}
        <rect
          x={
            screenXS
              ? "283"
              : screenSM
              ? "257"
              : screenSMD
              ? "305"
              : screenMD
              ? "365"
              : screenLG
              ? "432"
              : screenXL
              ? "384"
              : screenXXL
              ? "412"
              : "448"
          }
          y="0"
          rx="50"
          ry="50"
          width={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
        />
        {/* top4: square */}
        <rect
          x={
            screenXS
              ? "283"
              : screenSM
              ? "257"
              : screenSMD
              ? "305"
              : screenMD
              ? "365"
              : screenLG
              ? "432"
              : screenXL
              ? "384"
              : screenXXL
              ? "412"
              : "448"
          }
          y={
            screenXS
              ? "55"
              : screenSM
              ? "55"
              : screenSMD
              ? "65"
              : screenMD
              ? "75"
              : "85"
          }
          rx="3"
          ry="3"
          width={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "28"
              : screenSM
              ? "32"
              : screenSMD
              ? "36"
              : screenMD
              ? "40"
              : "52"
          }
        />
        {(!screenXS || !screenSM) && (
          <>
            {/* top5: round */}
            <rect
              x={
                screenSMD
                  ? "405"
                  : screenMD
                  ? "485"
                  : screenLG
                  ? "565"
                  : screenXL
                  ? "512"
                  : screenXXL
                  ? "547"
                  : "583"
              }
              y="0"
              rx="50"
              ry="50"
              width={screenSMD ? "75" : screenMD ? "90" : "100"}
              height={screenSMD ? "75" : screenMD ? "90" : "100"}
            />
            {/* top5: square */}
            <rect
              x={
                screenSMD
                  ? "405"
                  : screenMD
                  ? "485"
                  : screenLG
                  ? "565"
                  : screenXL
                  ? "512"
                  : screenXXL
                  ? "547"
                  : "583"
              }
              y={screenSMD ? "65" : screenMD ? "75" : "85"}
              rx="3"
              ry="3"
              width={screenSMD ? "75" : screenMD ? "90" : "100"}
              height={screenSMD ? "36" : screenMD ? "40" : "52"}
            />

            {/* top6: round */}
            <rect
              x={
                screenMD
                  ? "605"
                  : screenLG
                  ? "700"
                  : screenXL
                  ? "640"
                  : screenXXL
                  ? "682"
                  : "718"
              }
              y="0"
              rx="50"
              ry="50"
              width={screenMD ? "90" : "100"}
              height={screenMD ? "90" : "100"}
            />
            {/* top6: square */}
            <rect
              x={
                screenMD
                  ? "605"
                  : screenLG
                  ? "700"
                  : screenXL
                  ? "640"
                  : screenXXL
                  ? "682"
                  : "718"
              }
              y={screenMD ? "75" : "85"}
              rx="3"
              ry="3"
              width={screenMD ? "90" : "100"}
              height={screenMD ? "40" : "52"}
            />
          </>
        )}
        {!screenXS && !screenSM && !screenSMD && !screenMD && (
          <>
            {/* top7: round */}
            <rect
              x={
                screenSMD
                  ? "539"
                  : screenLG
                  ? "798"
                  : screenXL
                  ? "768"
                  : screenXXL
                  ? "817"
                  : "853"
              }
              y="0"
              rx="50"
              ry="50"
              width={screenSMD ? "75" : "100"}
              height={screenSMD ? "75" : "100"}
            />
            {/* top7: square */}
            <rect
              x={
                screenSMD
                  ? "539"
                  : screenLG
                  ? "798"
                  : screenXL
                  ? "768"
                  : screenXXL
                  ? "817"
                  : "853"
              }
              y={screenSMD ? "65" : "85"}
              rx="3"
              ry="3"
              width={screenSMD ? "75" : "100"}
              height={screenSMD ? "36" : "52"}
            />
            {/* top8: round */}
            <rect
              x={screenXL ? "896" : screenXXL ? "952" : "988"}
              y="0"
              rx="50"
              ry="50"
              width="100"
              height="100"
            />
            {/* top8: square */}
            <rect
              x={screenXL ? "896" : screenXXL ? "952" : "988"}
              y="85"
              rx="3"
              ry="3"
              width="100"
              height="52"
            />
            {/* top9: round */}
            <rect
              x={screenXXL ? "1087" : "1123"}
              y="0"
              rx="50"
              ry="50"
              width="100"
              height="100"
            />
            {/* top9: square */}
            <rect
              x={screenXXL ? "1087" : "1123"}
              y="85"
              rx="3"
              ry="3"
              width="100"
              height="52"
            />
            {/* top10: round */}
            <rect x="1258" y="0" rx="50" ry="50" width="100" height="100" />
            {/* top10: square */}
            <rect x="1258" y="85" rx="3" ry="3" width="100" height="52" />
          </>
        )}

        {/* bottom1: round */}
        <rect
          x={
            screenXS
              ? "53"
              : screenSM
              ? "41"
              : screenSMD
              ? "53"
              : screenMD
              ? "65"
              : screenLG
              ? "100"
              : screenXL
              ? "64"
              : screenXXL
              ? "74"
              : "109"
          }
          y={
            screenXS
              ? "88"
              : screenSM
              ? "98"
              : screenSMD
              ? "118"
              : screenMD
              ? "138"
              : "172"
          }
          rx="50"
          ry="50"
          width={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
        />
        {/* bottom1: square */}
        <rect
          x={
            screenXS
              ? "53"
              : screenSM
              ? "41"
              : screenSMD
              ? "53"
              : screenMD
              ? "65"
              : screenLG
              ? "100"
              : screenXL
              ? "64"
              : screenXXL
              ? "74"
              : "109"
          }
          y={
            screenXS
              ? "142"
              : screenSM
              ? "152"
              : screenSMD
              ? "182"
              : screenMD
              ? "212"
              : "257"
          }
          rx="3"
          ry="3"
          width={
            screenXS
              ? "65"
              : screenSM
              ? "65"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "28"
              : screenSM
              ? "32"
              : screenSMD
              ? "36"
              : screenMD
              ? "40"
              : "52"
          }
        />

        {/* bottom2: round */}
        <rect
          x={
            screenXS
              ? "145"
              : screenSM
              ? "128"
              : screenSMD
              ? "153"
              : screenMD
              ? "185"
              : screenLG
              ? "233"
              : screenXL
              ? "192"
              : screenXXL
              ? "209"
              : "244"
          }
          y={
            screenXS
              ? "88"
              : screenSM
              ? "98"
              : screenSMD
              ? "118"
              : screenMD
              ? "138"
              : "172"
          }
          rx="50"
          ry="50"
          width={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
        />
        {/* bottom2: square */}
        <rect
          x={
            screenXS
              ? "145"
              : screenSM
              ? "128"
              : screenSMD
              ? "153"
              : screenMD
              ? "185"
              : screenLG
              ? "233"
              : screenXL
              ? "192"
              : screenXXL
              ? "209"
              : "244"
          }
          y={
            screenXS
              ? "142"
              : screenSM
              ? "152"
              : screenSMD
              ? "182"
              : screenMD
              ? "212"
              : "257"
          }
          rx="3"
          ry="3"
          width={
            screenXS
              ? "65"
              : screenSM
              ? "65"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "28"
              : screenSM
              ? "32"
              : screenSMD
              ? "36"
              : screenMD
              ? "40"
              : "52"
          }
        />

        {/* bottom3:round */}
        <rect
          x={
            screenXS
              ? "888"
              : screenSM
              ? "214"
              : screenSMD
              ? "253"
              : screenMD
              ? "305"
              : screenLG
              ? "366"
              : screenXL
              ? "320"
              : screenXXL
              ? "344"
              : "380"
          }
          y={
            screenXS
              ? "88"
              : screenSM
              ? "98"
              : screenSMD
              ? "118"
              : screenMD
              ? "138"
              : "172"
          }
          rx="50"
          ry="50"
          width={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "63"
              : screenSM
              ? "63"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
        />
        {/* bottom3: square */}
        <rect
          x={
            screenXS
              ? "888"
              : screenSM
              ? "214"
              : screenSMD
              ? "253"
              : screenMD
              ? "305"
              : screenLG
              ? "366"
              : screenXL
              ? "320"
              : screenXXL
              ? "344"
              : "380"
          }
          y={
            screenXS
              ? "142"
              : screenSM
              ? "152"
              : screenSMD
              ? "182"
              : screenMD
              ? "212"
              : "257"
          }
          rx="3"
          ry="3"
          width={
            screenXS
              ? "65"
              : screenSM
              ? "65"
              : screenSMD
              ? "75"
              : screenMD
              ? "90"
              : "100"
          }
          height={
            screenXS
              ? "28"
              : screenSM
              ? "32"
              : screenSMD
              ? "36"
              : screenMD
              ? "40"
              : "52"
          }
        />

        {/* SMD MD*/}
        {(!screenXS || !screenSM) && (
          <>
            {/* bottom4: round */}
            <rect
              x={
                screenSMD
                  ? "353"
                  : screenMD
                  ? "422"
                  : screenLG
                  ? "499"
                  : screenXL
                  ? "448"
                  : screenXXL
                  ? "479"
                  : "514"
              }
              y={screenSMD ? "118" : screenMD ? "138" : "172"}
              rx="50"
              ry="50"
              width={screenSMD ? "75" : screenMD ? "90" : "100"}
              height={screenSMD ? "75" : screenMD ? "90" : "100"}
            />
            {/* bottom4: square */}
            <rect
              x={
                screenSMD
                  ? "353"
                  : screenMD
                  ? "422"
                  : screenLG
                  ? "499"
                  : screenXL
                  ? "448"
                  : screenXXL
                  ? "479"
                  : "514"
              }
              y={screenSMD ? "182" : screenMD ? "212" : "257"}
              rx="3"
              ry="3"
              width={screenSMD ? "75" : screenMD ? "90" : "100"}
              height={screenSMD ? "36" : screenMD ? "40" : "52"}
            />
            {/* bottom5: round */}
            <rect
              x={
                screenSMD
                  ? "489"
                  : screenMD
                  ? "544"
                  : screenLG
                  ? "8888"
                  : screenXL
                  ? "576"
                  : screenXXL
                  ? "614"
                  : "649"
              }
              y={screenSMD ? "118" : screenMD ? "138" : "172"}
              rx="50"
              ry="50"
              width={screenSMD ? "75" : screenMD ? "90" : "100"}
              height={screenSMD ? "75" : screenMD ? "90" : "100"}
            />
            {/* bottom5: square */}
            <rect
              x={
                screenSMD
                  ? "489"
                  : screenMD
                  ? "544"
                  : screenLG
                  ? "8888"
                  : screenXL
                  ? "576"
                  : screenXXL
                  ? "614"
                  : "649"
              }
              y={screenSMD ? "182" : screenMD ? "212" : "257"}
              rx="3"
              ry="3"
              width={screenSMD ? "75" : screenMD ? "90" : "100"}
              height={screenSMD ? "36" : screenMD ? "40" : "52"}
            />
          </>
        )}

        {!screenXS && !screenSM && !screenSMD && !screenMD && (
          <>
            {/* bottom6: round */}
            <rect
              x={
                screenLG ? "731" : screenXL ? "704" : screenXXL ? "749" : "784"
              }
              y="172"
              rx="50"
              ry="50"
              width="100"
              height="100"
            />
            {/* bottom6: square */}
            <rect
              x={
                screenLG ? "731" : screenXL ? "704" : screenXXL ? "749" : "784"
              }
              y="257"
              rx="3"
              ry="3"
              width="100"
              height="52"
            />
          </>
        )}

        {!screenXS && !screenSM && !screenSMD && !screenMD && !screenLG && (
          <>
            {/* bottom7: round */}
            <rect
              x={screenXL ? "832" : screenXXL ? "884" : "919"}
              y="172"
              rx="50"
              ry="50"
              width="100"
              height="100"
            />
            {/* bottom7: square */}
            <rect
              x={screenXL ? "832" : screenXXL ? "884" : "919"}
              y="257"
              rx="3"
              ry="3"
              width="100"
              height="52"
            />
            {/* bottom8: round */}
            <rect
              x={screenXXL ? "1019" : "1054"}
              y="172"
              rx="50"
              ry="50"
              width="100"
              height="100"
            />
            {/* bottom8: square */}
            <rect
              x={screenXXL ? "1019" : "1054"}
              y="257"
              rx="3"
              ry="3"
              width="100"
              height="52"
            />
          </>
        )}

        {!screenXS &&
          !screenSM &&
          !screenSMD &&
          !screenMD &&
          !screenLG &&
          !screenXL &&
          !screenXXL && (
            <>
              {/* bottom9: round */}
              <rect x="1189" y="172" rx="50" ry="50" width="100" height="100" />
              {/* bottom9: square */}
              <rect x="1189" y="257" rx="3" ry="3" width="100" height="52" />
            </>
          )}
      </ContentLoader>
    </div>
  );
};

export default ExpertListSkeleton;
