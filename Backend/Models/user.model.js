import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
  },
  role: {
    type: String,
    enum: ["Sarpanch", "Gramsavak", "Citizen"],
    default: "Citizen",
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  occupation: {
    type: String,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
