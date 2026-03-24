import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uplodOnCloudinary = async (localFileUrl,foldername,public_ids) => {
  console.log(localFileUrl)
  if (!localFileUrl) return null;

  try {
    const responce = await cloudinary.uploader.upload(localFileUrl, {
      public_id: public_ids,
      folder:foldername ,
      resource_type: "auto",
    });

    const optimizeUrl = cloudinary.url(public_ids, {
      fetch_format: "auto",
      quality: "auto",
    });
    fs.unlink(localFileUrl, err => {
      console.log(err);
    });
    return responce;
  } catch (error) {
    console.log(error);
    fs.unlink(localFileUrl , err => {
      console.log(err);
    });
    return null;
  }
};

export default uplodOnCloudinary;
