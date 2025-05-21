const express = require('express');
const router = express.Router();
const {creatUser,getUser, updateUser, deleteUser} = require('../controllers/userControllers');

router.post('/', creatUser);
router.get('/',getUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports = router;