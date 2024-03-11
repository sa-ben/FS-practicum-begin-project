const Users = require("../models/Users")

const getAllUsers = async (req, res) => {
    const users = await Users.find().lean()
    res.json(users)
}

const getUsersById = async (req, res) => {
    const { id } = req.params
    const users = await Users.findById(id).lean()
    if (!users) return res.status(404).json("No users found")
    res.json(users)
}

const createUsers = async (req, res) => {
    const { name,username,email,address,phone } = req.body
    if (!name || !phone) return res.status(400).json("Name and phone is required fields")
    const users = await Users.create({name,username,email,address,phone})
    if (!users) return res.status(404).json("error")

    res.json(users)
}

const updateUsers = async (req, res) => {
    const { id,name,username,email,address,phone } = req.body
    if (!id) {
        return res.status(404).send("ID is required")
    }
    const users = await Users.findById(id).exec()
    users.name = name
    users.username = username
    users.email = email
    users.address = address
    users.phone = phone
    const newUsers = await users.save()
    res.json(`update users ${id} success`)
}
const deleteUsers = async (req, res) => {
    const { id } = req.body
    if (!id) {
        return res.status(404).send("id is required")
    }
    const users = await Users.findById(id).exec()
    const deleted = await users.deleteOne()
    res.json(`deleted users`)
}
module.exports = { getAllUsers, getUsersById, createUsers, updateUsers, deleteUsers }
