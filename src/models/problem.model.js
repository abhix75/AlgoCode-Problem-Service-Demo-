const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title cannot be Empty"],
  },
  description: {
    type: String,
    required: [true, "Description cannot be Empty"],
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: [true, "Difficulty Cannot be Empty"],
  },
  testCases: [
    {
      input: {
        type: String,
        required: true,
      },
      output: {
        type: String,
        required: true,
      },
    },
  ],

  editorial: {
    type: String,
    required: true,
  },
});


const Problem = mongoose.model('Problem',problemSchema);

module.exports = Problem;
