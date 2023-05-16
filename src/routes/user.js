const express = require('express');
const userController = require('../controller/user.controller');

const router=express.Router();

//crear usuario
router.post('/user', (req,res)=>{
    userController.createUser(req.body)
    .then(user=>{
        res.status(201).json(user)
    })
    .catch(err =>{
        res.status(500).send("Error ocurrio al tratar de crear el usuario.")
    })
});

//obtener todos los usuarios
router.get('/users', (req,res)=>{
    userController.getAllUsers()
    .then(users => res.json(users))
    .catch(err => {
        res.status(500).send("error al  leer los usuarios de la base de datos")

    })
});

//obtener un usuario
router.get('/user/:id', (req,res)=>{
    let id = req.params.id
    userController.getUser(id)
    .then(user=>{
        if(!user){
            res.status(404).send(`User con id [${id}] no existe.`)
        }else{
            res.json(user)
        }
    })
    .catch(err=>{
        res.status(500).send(`Error ocurrio obteniendo user con id [${id}]`)
    })
});

//actualizar un usuario
router.put('/user/:id', (req,res)=>{
    let id = req.params.id
    let requestUsuario = req.body
    userController.updateUser(id, requestUsuario)
    .then(user=>{
        res.json(user)
    })
    .catch(err =>{
        res.status(500).send(`Error ocurrio actualizando usuario con id [${id}]`)
    })
});

//eliminar un usuario
router.delete('/user/:id', (req,res)=>{
    let id = req.params.id
    userController.deleteUser(id)
    .then(user=>{
        res.json(user)
    })
    .catch(err =>{
        res.status(500).send(`Error ocurrio eliminando usuario con id [${id}]`)
    })
});

module.exports = router;