const Restaurant = require ('../models/restaurant')

function createRestaurant(restaurant){
    return new Restaurant({
        ...restaurant
    }).save()
}

function getAllRestaurant(){
    return Restaurant.find()
}

function getRestaurant(id){
    return Restaurant.findById(id)
}

function deleteRestaurant(id){
    return Restaurant.findByIdAndRemove(id)
}

function updateRestaurant(id, restaurant){
    return Restaurant.findOneAndUpdate({_id:id},{
        ...restaurant
    },{
        new:true // nos devuelve el objeto ya modificado
    })
}

function SearchRestaurant(search){
    return Restaurant.find().or([{'name': search},{'location': search}])
}

module.exports = {
    createRestaurant,
    getAllRestaurant,
    getRestaurant,
    deleteRestaurant,
    updateRestaurant,
    SearchRestaurant
}