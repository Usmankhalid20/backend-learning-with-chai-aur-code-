import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    Subscriber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",           
    },
    channels: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
       
    }
});

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
   