const express = require('express');
const reservationController = require('../controller/reservation.controller');

const router=express.Router();

//crear reservacion
router.post('/reservation', (req,res)=>{
    reservationController.createReservation(req.body)
    .then(reservation=>{
        res.status(201).json(reservation)
    })
    .catch(err =>{
        res.status(500).send("Error ocurrio al tratar de crear el reserva.")
    })
});

//obtener todos los reservaciones
router.get('/reservations', (req,res)=>{
    reservationController.getAllReservation()
    .then(reservations => res.json(reservations))
    .catch(err => {
        res.status(500).send("error al  leer los reservaciones de la base de datos")

    })
});

module.exports = router;