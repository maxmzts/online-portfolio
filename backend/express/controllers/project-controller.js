const asyncHandler = require('express-async-handler')

// @desc    Get projects
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler( async (req,res) => {
    res.status(200).send({message: 'Get projects'});
})

// @desc    Get projects by tag
// @route   GET /api/projects/tags/:tag
// @access  Private
const getProjectsByTag = asyncHandler( async (req,res) => {
    res.status(200).send({message: `Get projects tagged as ${req.params.tag}`});
})

// @desc    Get a project
// @route   GET /api/projects/:id
// @access  Private
const getProjectById = asyncHandler( async (req,res) => {
    res.status(200).send({message: `Get project with id ${req.params.id}`});
})

// @desc    Edit/Put a project
// @route   GET /api/projects/:id
// @access  Private
const postProject = asyncHandler( async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text field')
    }
    res.status(200).send({message: 'Create projects'});
})

// @desc    Delete a project
// @route   GET /api/projects/:id
// @access  Private
const putProject = asyncHandler( async (req,res) => {
    res.status(200).send({message: `Update project ${req.params.id}`});
})

// @desc    Get projects
// @route   GET /api/projects
// @access  Private
const deleteProject = asyncHandler( async (req,res) => {
    res.status(200).send({message: `Delete project ${req.params.id}`});
})

module.exports = {
    getProjects,
    getProjectById,
    getProjectsByTag,
    postProject,
    putProject,
    deleteProject
}