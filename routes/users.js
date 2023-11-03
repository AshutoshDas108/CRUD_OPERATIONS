const express = require('express');

const router = express.Router();

const {handleGetAllUsers,
       handleAddNewUser,
       handleGetUserById,
       handleUpdateUserById,
       handleDeleteUserById} = require('../controllers/users');



//showing selected users -- using a common route name 

router.route('/').get(handleGetAllUsers).post(handleAddNewUser);

router.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);

module.exports = router;
