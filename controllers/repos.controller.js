const express = require('express')
const model = require('../models/repos.model')

function getRepos (req, res) {
    res.status(200).json(model)
}

function addNewRepo (req, res) {
    const newRepo = req.body
    model.push(newRepo)
    res.status(201).json(newRepo)
}

module.exports = {
    getRepos, addNewRepo
}