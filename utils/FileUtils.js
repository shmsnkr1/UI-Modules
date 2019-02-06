/* eslint-disable */
export const readTextFile = (filePath) => {
  var allText = '';
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", filePath, false);
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
         allText = rawFile.responseText;
        return allText;
      }
    }
  };
  rawFile.send(null);
  return allText;
};
