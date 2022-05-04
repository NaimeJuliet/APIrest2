import express from 'express'

//Importo el ControladoHabitacion
import { ControladorHabitacion } from '../controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReserva.js'


export let rutas=express.Router()

//Creo un objeto de la clase ControladorHabitacion (instancio la clase para poder usarla)
let controladorHabitacion=new ControladorHabitacion()
let controladorReserva=new ControladorReserva()

//Defino las rutas que voy a utilizar

//Rutas para los servicios de habitaciones
//1.Servicio agregar habitacion
rutas.post('/api/v1/habitaciones/',controladorHabitacion.insertar)

//2.Servicio para buscar todas las habitaciones
rutas.get('/api/v1/habitaciones/',controladorHabitacion.buscarTodos)

//3.Servicio para buscar por ID
rutas.get('/api/v1/habitaciones/:id/', controladorHabitacion.buscarId)

//4.Servicio para cambiar habitaciones ID
rutas.put('/api/v1/habitaciones/:id/',controladorHabitacion.editar)

//5. Servicio para Eliminar Habitaciones ID
rutas.delete('/api/v1/habitaciones/:id/',controladorHabitacion.eliminar)

//Rutas para los servicios de reserva

//6. Servicio para Ingresar reserva
rutas.post('/api/v1/reserva/',controladorReserva.ingresar)

//7. Servicio buscar reserva por ID
rutas.get('/api/v1/reserva/:id/',controladorReserva.buscarId)

//8. Servicio para editar reserva por ID
rutas.put('/api/v1/reserva/:id/',controladorReserva.editar)

//9. Servicio para elimiar reserva por ID
rutas.delete('/api/v1/reserva/:id/', controladorReserva.eliminar)


