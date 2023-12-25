const express = require('express');
const router = express.Router();
const Project = require('../model/projectSchema');

// const authenticate = require('../middleware/authenticate');
// router.get('/getProject', authenticate, (req, res) => {
//     console.log(req.rootProject);
//     res.status(200).send(req.rootProject);
// });

router.get('/getProject', async (req, res) => {
    try {
        const projects = await Project.find();
        if (!projects) throw new Error('Projects not found');
        // console.log(projects);
        res.status(200).send(projects);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;