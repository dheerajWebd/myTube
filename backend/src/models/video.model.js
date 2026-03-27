import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-Aggregate-paginate-v2";
const ScheduleSchema = mongoose.Schema({
  isSchduled: {
    type: Boolean,
    default: false,
  },
  publishAt: {
    type: Date,
    // required: [true, "seduled date is required"],
    default: Date.now,
  },
});

const Shadul = mongoose.model("Shadul", ScheduleSchema);

const VideoSchema = mongoose.Schema(
  {
    video: {
      publicId: {
        type: String,
        trim: true,
      required: [true, "video is required"],

      },
      url: {
        type: String,
        trim: true,
      required: [true, "video is required"],

      },

    },

    thumbnail: {
      publicId: {
        type: String,
        trim: true,
      required: [true, "thumbnail is required"],

      },
      url: {
        type: String,
        trim: true,
      required: [true, "thumbnail is required"],

      },
    },
    tittle: {
      type: String,
      required: [true, "video is required"],
      trim: true,
      maxlength: [100, "tittle is too long max 100 word"],
      minlength: [10, "tittle is too short min 10 word"],
    },
    decription: {
      type: String,
      required: [true, "video is required"],
      trim: true,
      maxlength: [3000, "decription is too long"],
    },
    tag: [
      {
        type: String,
        trim: true,
        maxlength: [3000, "decription is too long"],
        index: true,
      },
    ],
    hashtag: [
      {
        type: String,
        trim: true,
        maxlength: [3000, "decription is too long"],
        index: true,
      },
    ],

    views: {
      type: Number,
      default: 0,
    },

    likes: {
      type: Number,
      default: 0,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    isPublish: {
      type: Boolean,
      default: true,
    },
    isMember: {
      type: Boolean,
      default: false,
    },
    Shaduling: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shadul",
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
      required: true,

    },
    isChildren: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

VideoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", VideoSchema);
