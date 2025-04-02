const express = require('express')
const router = express.Router()
const {
    getProjects,
    getProjectsLatest,
    getProjectById,
    getProjectsByTag,
    postProject,
    putProject,
    deleteProject} = require('../controllers/project-controller')

const {protect} = require('../middleware/auth-middleware')

// the route /api/projects/ is already specified in app.js

router.route('/').get(getProjects).post(protect, postProject)
router.route('/latest').get(getProjectsLatest)
router.route('/:id').get(getProjectById).put(protect, putProject).delete(protect, deleteProject)
router.get('/tags/:tag', getProjectsByTag)

module.exports = router

