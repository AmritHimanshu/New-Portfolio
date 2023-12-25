const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    }
})

const Project = mongoose.model('PROJECT', projectSchema);

module.exports = Project;