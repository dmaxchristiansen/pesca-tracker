const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema(
    {
        name: {type: String, minlength: [3, "Title must be a minimum of 3 characters!"]},
        rating: {type: String},
        comment: {type: String, default: "", minlength: [3, "Review must be a minimum of 3 characters!"]},
    },
    { timestamps: true }
)

const ProductSchema = new mongoose.Schema(
    {
        species: {type: String},
        image: {type: String},
        state: {type: String},
        bodyOfWater: {type: String},
        length: {type: String},
        catchDate: {type: Date},
        ratings: [RatingSchema]
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
module.exports = mongoose.model("Rating", RatingSchema);