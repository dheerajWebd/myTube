import { User } from "../models/user.model.js";
import asyncHandler from "../utils/ansicHandler.js";
import uplodOnCloudinary from "../utils/cloudinary.js";
import { ErrorFormater } from "../utils/ErrorFormate.js";
import successResponse from "../utils/successResponse.js";

export const register = asyncHandler(async (req, res, next) => {
  const { role, password, email, fullName, userName } = req.body;

  if (
    [password, email, fullName, userName].some(
      filld => !filld || filld?.trim() === false
    )
  )
    throw new ErrorFormater(
      "required all fields",
      ["user is exsist you can try another email or user name "],
      409
    );

  const exsistedUser = await User.findOne({
    $or: [{ email }, { userName }],
  });
  if (exsistedUser)
    throw new ErrorFormater(
      "user is exsist you can try another email or username ",
      ["user is exsist you can try another email or username "],
      400
    );
  const { avatar, coverImg } = req.files;

  if (!avatar)
    throw new ErrorFormater(
      "avata image is not found plz reuplode",
      ["user is exsist you can try another email or username "],
    402
    );

  const avatarPath = avatar[0]?.path;
  let coverImgpath;
  if (coverImg) {
    coverImgpath = coverImg[0]?.path;
  }

  if (!avatarPath)
    throw new ErrorFormater(
      "avata image path is not found plz reuplode",
      ["user is exsist you can try another email or username "],
      402
    );

  const resAvatarUplode = await uplodOnCloudinary(
    avatarPath,
    "/avatar/",
    "uaer_avatar"
  );

  const resCoverImgpath = await uplodOnCloudinary(
    coverImgpath || "",
    "/coverImg/",
    "uaer_cover"
  );

  if (!resAvatarUplode)
    throw new ErrorFormater(
      "avata image is not uploded somthings went wrong plz reuplode",
      ["user is exsist you can try another email or username"],
      500
    );

  const userCreated = await User.create({
    role: role || "user",
    coverImg: {
      publicId: resCoverImgpath?.public_id || "",
      url: resCoverImgpath?.url || "",
    },
    avatar: {
      publicId: resAvatarUplode?.public_id || "",
      url: resAvatarUplode?.url || "",
    },
    password,
    email,
    fullName,
    userName,
  })

  res
    .status(201)
    .json(new successResponse(201, {
      coverImg: userCreated.coverImg || "",
      avatar: userCreated.avatar || "",
      email: userCreated.email || "",
      fullName: userCreated.fullName || "",
      userName: userCreated.userName || "",

    }, "user created successfully ")).send("");
});
