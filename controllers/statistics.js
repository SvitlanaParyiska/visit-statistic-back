const Stat = require("../models/statistic");
const { ctrlWrapper, HttpError } = require("../helpers");

const getUpdateStatistic = async (req, res) => {
  const results = await Stat.find({ name: "Denis" });
  if (!results) {
    throw HttpError(404, "Not found");
  }
  const newTotal = Number(results[0].totalVisits) + 1;
  console.log(newTotal);
  await Stat.findByIdAndUpdate(results[0]._id, { totalVisits: newTotal });

  res.json(results[0].totalVisits);
};

module.exports = {
  getUpdateStatistic: ctrlWrapper(getUpdateStatistic),
};
