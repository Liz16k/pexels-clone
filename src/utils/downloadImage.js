import { saveAs } from "file-saver";

export const downloadImage = (url, alt) => {
  const filename = alt.split(" ").join("_");
  saveAs(url, filename);
};
