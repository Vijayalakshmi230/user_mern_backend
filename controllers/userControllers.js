const Users = require('../models/userModels');

// post users
const creatUser = async (req, res) => {
    try {
        const newUser = await Users.create(req.body);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// get all users
const getUser = async (req, res) => {
    try {
        const getUsers = await Users.find();
        res.status(201).json(getUsers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// get user by Id
const getUserById = async (req, res) => {
    try{
        const getUserById = await Users.findById(req.params.id);
        if (!getUserById) return res.status(404).json({ message: 'User not found' });
        res.json(getUserById);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
}

// update users
const updateUser = async (req, res) => {
    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json(updatedUser);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// delete user
const deleteUser = async (req, res) => {
    try{
        const deleteUser = await Users.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json(deleteUser);
    }
    catch(errro){
        res.status(400).json({message: error.message});
    }
}

module.exports = { creatUser, getUser, updateUser, deleteUser, getUserById };