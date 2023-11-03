const User = require('../models/users');


async function handleGetAllUsers (req, res) {
    const allUsers = await User.find({});
    return res.json(allUsers);
}

async function handleAddNewUser(req, res) {
    const body = req.body;
    if (!body.name || 
        !body.email || 
        !body.password
        )
        {
            return res.status(400).json({message: 'Please fill all the fields'});
        }
    
        const result = await User.create({
            name: body.name, 
            email: body.email, 
            password: body.password
        })
    
        return res.json({message: 'Success' , id: result._id});
    
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({message: 'User not found'})
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id,{name: req.body.name,
              password: req.body.password, email: req.body.email})
    res.json({status: 'success'})
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'});
}

module.exports ={handleGetAllUsers,
            handleAddNewUser,
            handleGetUserById,
            handleUpdateUserById,
            handleDeleteUserById}