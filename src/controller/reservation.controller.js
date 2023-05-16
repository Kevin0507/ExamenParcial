const Reservation = require ('../models/reservation')

function createReservation(reservation){
    return new Reservation({
        ...reservation
    }).save()
}

function getAllReservation(){
    return Reservation.find()
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
    createReservation,
    getAllReservation,
    getRestaurant,
    deleteRestaurant,
    updateRestaurant,
    SearchRestaurant
}