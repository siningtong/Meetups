const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  userName: { type: String, required: [true, "Username cannot be blank"] },
  password: { type: String, required: [true, "Password cannot be blank"] },
  email: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// UserSchema.plugin(passportLocalMongoose);

export const User = mongoose.model("User", UserSchema);

// module.export = mongoose.model("User", UserSchema);
