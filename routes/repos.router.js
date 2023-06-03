const express = require('express')

const reposController = require('../controllers/repos.controller')

const reposRouter = express.Router()

reposRouter.get('/', reposController.getRepos)
reposRouter.post('/', reposController.addNewRepo)

module.exports = reposRouter


