const User = require ('../models/user')

function createUser(user){
    return new User({
        ...user
    }).save()
}

function getAllUsers(){
    return User.find()
}

function getUser(id){
    return User.findById(id)
}

function deleteUser(id){
    return User.findByIdAndRemove(id)
}

function updateUser(id, user){
    return User.findOneAndUpdate({_id:id},{
        ...user
    },{
        new:true // nos devuelve el objeto ya modificado
    })
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser
}