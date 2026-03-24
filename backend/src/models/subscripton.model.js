import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      reuired: true,
    },
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
      required: true,
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
