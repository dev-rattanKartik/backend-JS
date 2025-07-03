import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    // user who is subscribed
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    // user who is subscribing
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model(Subscription, subscriptionSchema);
