const User = require('../models/User')

//creacte a user
const createUser = async (req, res) => {
    const { username, password, name, email, phone, roles, active } = req.body
    if(!username || !password || !name)
        return res.status(400).send("username, password ans d name are required")
    const user = await User.create({ username, password, name, email, phone, roles, active })
    if(!user) 
        return res.status(404).send("could not create a new user")
    res.json(user)
}

//read
//get all users
const getAllUsers = async (req, res) =>{
    const users = await User.find().lean();
    res.json(users)
}

//get user by id
const getUserById = async (req,res) =>{
    const {id} = req.params
    const user = await User.findById(id).lean()
    if(!user) 
        return res.status(404).send("no user found")
    res.json(user)
}

//update a user
const updateUser = async (req, res) =>{
    const { id, username, password, name, email, phone, roles, active } = req.body
    if(!id || !username || !password || !name)
        return res.status(400).send("some required field/s are missing")
    //find the wanted user
    const user = await User.findById(id).exec()
    //updating
    user.username = username
    user.password = password
    user.name = name
    user.email = email
    user.phone = phone
    user.roles = roles
    user.active = active

    const newUser = await user.save()
    res.json(newUser)   
}

//delete a user
const deleteUser = async (req,res) =>{
    const {id} = req.body
    if(!id)
        return res.status(400).send("id is required")
    const user = await User.findById(id).exec()
    const deleted = await user.deleteOne()
    res.send(`user with id ${id} was deleted`)
}

module.exports = {createUser, getAllUsers, getUserById, updateUser, deleteUser}
