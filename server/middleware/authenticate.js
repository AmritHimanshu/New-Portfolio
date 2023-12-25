const Project = require('../model/projectSchema');

const authenticate = async (req, res, next) => {
    try {
        const rootProject = await Project.find();
        if (!rootProject) throw new Error('User not found');
        req.rootProject = rootProject;
        req.userID = rootProject._id;
        next();
    } catch (error) {
        res.status(401).send("Unauthorized: No token provided");
        // console.log(error);
    }
}

module.exports = authenticate;