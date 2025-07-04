import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudinary url
      requried: true,
    },
    thumnail: {
      type: String, //cloudinary url
      requried: true,
    },
    owner: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    title: {
      type: String,
      requried: true,
    },
    description: {
      type: true,
      requried: true,
    },
    duration: {
      type: Number, //cloudinary url
      requried: true,
    },
    views: {
      type: Number,
    },
    isPublished: {
      type: Boolean,
      requried: true,
    },
  },
  { timestamps: true },
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
