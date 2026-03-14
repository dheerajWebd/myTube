import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { HASH_ROUND } from "../constent";
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "must be required ussername"],
      trim: true,
      lowercase: true,
      unique: [true, "this user name take by any other user"],
      index: true,
    },
    fullName: {
      type: String,
      required: [true, "must be required fullName"],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "must be required email"],
      trim: true,
      unique: [true, "this email is also ragister"],
    },
    password: {
      type: String,
      required: [true, "must be required email"],
      trim: true,
      minlength: [6, "password is too sort"],
    },
    avater: {
      type: String,
      trim: true,
    },
    coverImg: {
      type: String,
      trim: true,
    },
    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    role: {
      type: String,
      enum: ["user", "adimn"],
      default: "user",
    },
    refreshToken: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// here is the encrypt or decrypt methods
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, HASH_ROUND);
  next();
}); // always don't craeate the arrow function

userSchema.methods.isCompare = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//  here is the reffres token's methods
userSchema.methods.accsesToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      userName: this.userName,
      email: this.email,
      fullName: this.fullName,
    },
    process.env.ACCSES_TOKEN,
    {
      expiresIn: process.env.EXP_ACC,
    }
  );
};
userSchema.methods.RefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFF_TOKEN,
    {
      expiresIn: process.env.EXP_REF,
    }
  );
};
export const User = mongoose.model("User", userSchema);
