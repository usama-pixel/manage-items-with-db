const { validationResult } = require('express-validator')
const itemsService = require('../services/items')
const { BadRequestError } = require('../errors/bad-request-error')
const { RequestValidationError } = require('../errors/request-validation-error')
async function getItems(req, res, next) {
    try {
        const data = await itemsService.getItems()
        return res.json(data)
    } catch(err) {
        next(err)
    }
}

async function getItem(req, res, next) {
    try {
        const result = validationResult(req)
        if(!result.isEmpty()) {
            throw new RequestValidationError(result.array())
        }
        const item = await itemsService.getItem(+req.params.id)
        return res.json(item)
    } catch(err) {
        next(err)
    }
}

async function createItem(req, res, next) {
    try {
        const result = validationResult(req)
        if(!result.isEmpty()) {
            throw new RequestValidationError(result.array())
        }
        const item = await itemsService.createItem(req.body)
        return res.status(201).json(item)
    } catch(err) {
        next(err)
    }
}

async function deleteItem(req, res, next) {
    try {
        const result = validationResult(req)
        if(!result.isEmpty()) {
            throw new RequestValidationError(result.array())
        }
        const item = await itemsService.deleteItem(+req.params.id)
        return res.json(item)
    } catch(err) {
        next(err)
    }
}
async function updateItem(req, res, next) {
    try {
        const result = validationResult(req)
        if(!result.isEmpty()) {
            throw new RequestValidationError(result.array())
        }
        const item = await itemsService.updateItem(req.body)
        return res.json(item)
    } catch(err) {
        next(err)
    }
}

module.exports = { getItems, createItem, getItem, deleteItem, updateItem }