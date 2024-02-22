const { Schema, model } = require("mongoose");

const statisticSchema = new Schema({
  totalVisits: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Statistic = model("stat", statisticSchema);

module.exports = Statistic;
