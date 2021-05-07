const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MeetupSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // geometry: {
  //   type: {
  //     type: String,
  //     enum: ["Point"],
  //     required: true
  //   },
  //   coordinates: {
  //     type: [Number],
  //     required: true
  //   }
  // },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export const Meetup = mongoose.model("Meetup", MeetupSchema);
