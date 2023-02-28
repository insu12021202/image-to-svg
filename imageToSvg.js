const fs = require("fs");
const pixelArtToSvg = require("pixel-art-2-svg");

const dirName = "image";
let arranges = [];

//image 폴더 안의 파일 읽기
let files = fs.readdirSync(dirName);
console.log(files);

//png, jpg 형식 검사 후 파일 이름만 arranges에 push
files.forEach((file) => {
  let [filename, extension] = file.split(".");
  if (String(extension) === "png" || String(extension) === "jpg") {
    arranges.push(String(filename));
  }
});

//arranges의 파일을 svg로 변환하여 svg 폴더에 넣기
arranges.forEach((files) => {
  pixelArtToSvg(dirName + `/${files}.png`).then((svgString) => {
    fs.writeFileSync("svg" + `/${files}.svg`, svgString, () =>
      console.log(dirName + `/${files}.svg --done!`)
    );
  });
});
