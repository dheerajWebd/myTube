import multer from "multer";
import { ErrorFormater } from "../utils/ErrorFormate.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // console.log("solved", file);
    const uniqueSuffix =
      Date.now() + "-" + file.originalname + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
// const fileFilter = (req, file, cb) => {
//   // console.log(file.mimetype, file);

//   const filtered = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
//   if (filtered.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(
//       new ErrorFormater(
//         "only image or file are allowed",
//         "only image or file are allowed",
//         403
//       ),
//       false
//     );
//   }
// };
export const upload = multer({
  storage,
  // fileFilter,
  limits: {
    fieldSize: 10 * 1024 * 10224,
    fieldNameSize: 50,
  },
});
