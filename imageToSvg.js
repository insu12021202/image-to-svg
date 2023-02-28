const fs = require("fs");
const pixelArtToSvg = require("pixel-art-2-svg");
const fileSystem = require("fs");

const dirName = "image";
let arranges = [];

//image 폴더 안의 파일 읽기
let files = fs.readdirSync(dirName);
console.log(files);

//png 형식 검사 후 파일 이름만 arranges에 push
files.forEach((file) => {
  let [filename, extension] = file.split(".");
  if (String(extension) === "png") {
    arranges.push(String(filename));
  }
});

arranges.forEach((files) => {
  pixelArtToSvg(dirName + `/${files}.png`).then((svgString) => {
    fs.writeFileSync("svg" + `/${files}.svg`, svgString, () =>
      console.log(dirName + `/${files}.svg --done!`)
    );
  });
});
