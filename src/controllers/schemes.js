const { db } = require("../models/db");
const initModels = require("../models/init-models")

const GetAllRatings = async () => {
  try {
    const ratings = initModels(db).tbl_ratings;
    const user = await ratings.findAll();
    return user;
  } catch (err) {
    return { err: 'error occured' }
  }
}




module.exports = { GetAllRatings }