import path from "path";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin([path.resolve("public/img")], {
  destination: path.resolve("public/img/webp"),
  plugins: [imageminWebp({ quality: 50 })],
});
console.log("Images optimized");
