const { Schema, model } = require("mongoose");

const statSchema = new Schema({
  totalVisits: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Stat = model("stat", statSchema);

module.exports = Stat;
