const express = require('express')
const router = express.Router()
const {
    getProjects,
    getProjectById,
    getProjectsByTag,
    postProject,
    putProject,
    deleteProject} = require('../controllers/project-controller')

// the route /api/projects/ is already specified in app.js

router.route('/').get(getProjects).post(postProject)
router.route('/:id').get(getProjectById).put(putProject).delete(deleteProject)
router.get('/tags/:tag', getProjectsByTag)

module.exports = router

