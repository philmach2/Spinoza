const mongoose = require("mongoose");

const JournalEntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  entryText: {
    type: String,
    required: true,
    trim: true,
  },
  entryDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  prompts: [
    {
      type: String,
      required: false,
    },
  ],
  streak: {
    type: Number,
    required: false,
    default: 0,
  },
});

const JournalEntry = mongoose.model("JournalEntry", JournalEntrySchema);

module.exports = JournalEntry;
