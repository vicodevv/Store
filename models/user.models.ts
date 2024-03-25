import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true, // For faster queries

  },
  password: {
    type: String,
    required: true,
  },
}, {timestamps: true,});

module.exports = mongoose.model('User', UserSchema)