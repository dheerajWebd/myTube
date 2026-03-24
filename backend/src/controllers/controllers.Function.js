import { ErrorFormater } from "../utils/ErrorFormate.js";

export const genaretTokensForAuth = async user => {
  try {
    const genaretaccsesToken = user.accsesToken();
    const genaretRefreshToken = user.RefreshToken();

    user.refreshToken = genaretRefreshToken;
    user.isVerified = true;

      await user.save({ validateBeforeSave: false });

    return {
      genaretaccsesToken,
      genaretRefreshToken,
      Verified: user.isVerified,
    };
  } catch (error) {
    console.log(error);
    throw new ErrorFormater(
      "somthing went wrong while genareting tokens",
      [""],
      500
    );
  }
};
