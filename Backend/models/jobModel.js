const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  dateApplied: {
    type: Date,
    default: Date.now,
  },
  contact: {
    type: String,
  },
  salary: {
    type: String,
  },
  comments: {
    type: String,
  },
  dateInterview: {
    type: Date,
  },
  timeInterview: {
    type: String
  },
  yesInterview: {
    type: Boolean,
    default: false,
  },
  typeInterview: {
    type: String,
  },
  priority: {
    type: Number,
    required: true,
    min: 1,
    max: 3,
  },
  archived: {
    type: Boolean,
    default: false,
  },
  wishlist: {
    type: Boolean,
    default: false,
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'}
}, { timestamps: true });

const Job = mongoose.model("jobs", jobSchema);

module.exports = Job;
