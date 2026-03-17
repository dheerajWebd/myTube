import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uplodOnCloudinary = async localFileUrl => {
  if (!localFileUrl) return null;
  try {
    const responce = await cloudinary.uploader.upload(localFileUrl, {
      public_id: "user_images",
      resource_type: "auto",
    });

    const optimizeUrl = cloudinary.url("user_images", {
      fetch_format: "auto",
      quality: "auto",
    });
    fs.unlink(localFileUrl, err => {
      // console.log(err);
    });
    return responce;
  } catch (error) {
    console.log(error);
    fs.unlink(localFileUrl);
    return null;
  }
};

export default uplodOnCloudinary;
