console.log("pet.model.js");

const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Pet name is required!"],
        minlength: [3, "Name must be 3 characters or longer"]
    },
    type: {
        type: String,
        required: [true, "Pet type is required!"],
        minlength: [3, "Type must be 3 characters or longer"]
    },
    description: {
        type: String,
        required: [true, "Pet description is required!"],
        minlength: [3, "Description must be 3 characters or longer"]
    },
    skill_one: {
        type: String
    },
    skill_two: {
        type: String
    },
    skill_three: {
        type: String
    }

}, {timestamps: true});

module.exports = mongoose.model("Pet", PetSchema);