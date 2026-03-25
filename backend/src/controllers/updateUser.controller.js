import { User } from "../models/user.model.js";
import asyncHandler from "../utils/ansicHandler.js";
import uplodOnCloudinary from "../utils/cloudinary.js";
import { ErrorFormater } from "../utils/ErrorFormate.js";
import successResponse from "../utils/successResponse.js";

export const updatepassword = asyncHandler(async (req, res, next) => {
  const { currentPassword, newPassword } = req.body;

  const user = await User.findById(req.user_id).select("+password");

  const isCompare = await user.isCompare(currentPassword);
  if (!isCompare)
    throw new ErrorFormater("current password is wrong ", "", 404);

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });
  res
    .status(200)
    .json(new successResponse(200, "password update successfully", {}));
});

export const updateProfile = asyncHandler(async (req, res, next) => {
  const { fullName } = req.body;
  const { coverImg, avatar } = req.files;
  const user = await User.findById(req.user_id);
  const updateData = {};
  let uplodeCoverImg, uplodeAvatar;

  if (coverImg) {
    uplodeCoverImg = coverImg[0].path;
    let coverimageUrl = await uplodOnCloudinary(
      uplodeCoverImg || "",
      "/coverImg/",
      "uaer_cover"
    );
    updateData.coverImg = {
      publicId: coverimageUrl?.publicId || user.coverImg.publicId,
      url: coverimageUrl?.url || user.coverImg.url,
    };
  } else {
    throw new ErrorFormater(
      "cover image is required for profile cover image updations ",
      "",
      404
    );
  }

  if (avatar) {
    uplodeAvatar = avatar[0].path;
    let avatarUrl = await uplodOnCloudinary(
      uplodeAvatar || "",
      "/avatar/",
      "uaer_avatar"
    );
    updateData.avatar = {
      publicId: avatarUrl?.publicId || user.avatar.publicId,
      url: avatarUrl?.url || user.avatar.url,
    };
  } else {
    throw new ErrorFormater(
      "avatar image is required for profile avatar image updations ",
      "",
      404
    );
  }

  if (fullName) {
    updateData.fullName = fullName;
  } else {
    throw new ErrorFormater(
      "full name is required for profile updations ",
      "",
      404
    );
  }

  const updatedUser = await user.set(updateData).save();
  res
    .status(200)
    .json(new successResponse(200, updatedUser, "profile update successfully"));
});
