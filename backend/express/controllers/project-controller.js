const asyncHandler = require('express-async-handler')

const Project = require('../models/project-model')

// @desc    Get projects
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler( async (req,res) => {
    const projects = await Project.find()
    res.status(200).json(projects)
})

// @desc    Get last 6 projects
// @route   GET /api/projects/latest
// @access  Public
const getProjectsLatest = asyncHandler( async (req,res) => {
    const projects = await Project.find()
        .sort({ createdAt: -1 })    // sorts by creation date
        .limit(6);                  // gets maximum 6 projects
    res.status(200).json(projects)
})

// @desc    Get projects by tag
// @route   GET /api/projects/tags/:tag
// @access  Public
const getProjectsByTag = asyncHandler( async (req,res) => {
    res.status(200).send({message: `Get projects tagged as ${req.params.tag}`});
})

// @desc    Get a project
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = asyncHandler( async (req,res) => {
    const project = await Project.findById(req.params.id)
    if(!project) {
        res.status(400)
        throw new Error('Project not found')
    }

    res.status(200).send(updatedProject);
})

// @desc    Create a project
// @route   POST /api/projects/:id
// @access  Private
const postProject = asyncHandler( async (req,res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Please add title field')
    }

    const project = await Project.create({
        title: req.body.title,
        user: req.user.id,
    })

    res.status(200).send(project);
})

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private
const putProject = asyncHandler( async (req,res) => {
    const project = await Project.findById(req.params.id)
    if(!project) {
        res.status(400)
        throw new Error('Project not found')
    } 
    else if (!req.body.title){
        res.status(400)
        throw new Error('Please add title field')
    }

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).send(updatedProject);
})

// @desc    Delete projects
// @route   DELETE /api/projects
// @access  Private
const deleteProject = asyncHandler( async (req,res) => {
    const project = await Project.findById(req.params.id)
    if(!project) {
        res.status(400)
        throw new Error('Project not found')
    }
    await project.deleteOne()
    res.status(200).json({message: `Project deleted`, id: req.params.id});
})

module.exports = {
    getProjects,
    getProjectsLatest,
    getProjectById,
    getProjectsByTag,
    postProject,
    putProject,
    deleteProject
}