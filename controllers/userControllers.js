const Users = require('../models/userModels');

const creatUser = async (req, res) => {
    try {
        const newUser = await Users.create(req.body);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(201).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try{
        const deleteUser = await Users.findByIdAndDelete(req.params.id);
        res.json(deleteUser);
    }
    catch(errro){
        res.status(400).json({message: error.message});
    }
}

module.exports = { creatUser, getUser, updateUser, deleteUser };