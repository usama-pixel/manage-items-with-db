const { ConflictError } = require('../errors/conflict-error')
const { NotFoundError } = require('../errors/not-found-error')
const Item = require('../models/items')

function getItems() {
    return Item.findAll()
}
async function getItem(id) {
    const item = await Item.findByPk(id)
    if (!item) {
        throw new NotFoundError('Item not found')
    }
    return item
}

async function createItem(item) {
    const itemExists = await Item.findByPk(item.id)
    if (itemExists) throw new ConflictError('Item with provided id already exists')
    const newItem = await Item.create(item)
    return newItem
}

async function deleteItem(id) {
    const item = await Item.findByPk(id)
    if (!item) {
        throw new NotFoundError('Item not found')
    }
    await item.destroy()
    return item
}

async function updateItem(item) {
    const data = await Item.findByPk(item.id)
    if (!data) {
        throw new NotFoundError('Item not found')
    }
    await data.update(item)
    return data
}
module.exports = { getItems, createItem, getItem, deleteItem, updateItem }