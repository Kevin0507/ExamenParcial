const express = require('express');
const reservationController = require('../controller/reservation.controller');

const router=express.Router();

//crear restaurante
router.post('/reservation', (req,res)=>{
    reservationController.createReservation(req.body)
    .then(reservation=>{
        res.status(201).json(reservation)
    })
    .catch(err =>{
        res.status(500).send("Error ocurrio al tratar de crear el reserva.")
    })
});

//obtener todos los restaurantes
router.get('/reservations', (req,res)=>{
    reservationController.getAllReservation()
    .then(reservations => res.json(reservations))
    .catch(err => {
        res.status(500).send("error al  leer los reservaciones de la base de datos")

    })
});

//obtener un restaurant
router.get('/restaurant/:id', (req,res)=>{
    let id = req.params.id
    restaurantController.getRestaurant(id)
    .then(restaurant=>{
        if(!restaurant){
            res.status(404).send(`Restaurante con id [${id}] no existe.`)
        }else{
            res.json(restaurant)
        }
    })
    .catch(err=>{
        res.status(500).send(`Error ocurrio obteniendo restaurante con id [${id}]`)
    })
});

//actualizar un restaurant
router.put('/restaurant/:id', (req,res)=>{
    let id = req.params.id
    let requestRestaurant = req.body
    restaurantController.updateRestaurant(id, requestRestaurant)
    .then(restaurant=>{
        res.json(restaurant)
    })
    .catch(err =>{
        res.status(500).send(`Error ocurrio actualizando restaurante con id [${id}]`)
    })
});

//eliminar un restaurant
router.delete('/restaurant/:id', (req,res)=>{
    let id = req.params.id
    restaurantController.deleteRestaurant(id)
    .then(restaurant=>{
        res.json(restaurant)
    })
    .catch(err =>{
        res.status(500).send(`Error ocurrio eliminando restaurante con id [${id}]`)
    })
});

//obtener todos los restaurantes
router.get('/restaurants/:search', (req,res)=>{
    let search = req.params.search
    restaurantController.SearchRestaurant(search)
    .then(restaurants => res.json(restaurants))
    .catch(err => {
        res.status(500).send("error al buscar los restaurantes de la base de datos")

    })
});

module.exports = router;