import { toPng } from "html-to-image";
import { createRef } from "react";

const SUPPORTED_FORMATS = [
  {
    format: "PNG",
    download: (refToDiv) => {
      toPng(refToDiv)
        .then((dataUrl) => {
          const aLink = document.createElement("a");
          aLink.download = "my-file-name.png";
          aLink.href = dataUrl;
          aLink.click();
        })
        .catch((e) => console.log("opps", e));
    },
  },
];

const useScreenshotableDiv = () => {
  const divToUse = createRef();

  const takeScreenshot = (supportedFormat) => {
    const screenshot = SUPPORTED_FORMATS.filter(
      ({ format }) => format === supportedFormat
    );

    if (screenshot.length !== 1) {
      console.error("Unsupported format specified in useScreshotableDiv");
      return;
    }

    screenshot[0].download(divToUse.current);
  };

  return [
    (props) => <div ref={divToUse}>{props.children}</div>,
    takeScreenshot,
  ];
};

export default useScreenshotableDiv;
