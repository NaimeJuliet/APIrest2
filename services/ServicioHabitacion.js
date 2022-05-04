//Importo el modelo Habitacion
import {modeloHabitacion} from '../models/habitacionModelo.js'

export class ServicioHabitacion{
    constructor(){}

    async buscarTodo(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones
    }
    
    async buscarPorId(id){
        let habitacion=await modeloHabitacion.findById(id)
        return habitacion
    }

    async registrar(habitacion){
        let habitacionNueva= new modeloHabitacion(habitacion)
        return await habitacionNueva.save()
    }
    async editar(id,habitacion){
        
        return await modeloHabitacion.findByIdAndUpdate(id,habitacion)
    }

    async eliminar(id){
        return await modeloHabitacion.findByIdAndDelete(id)
    }
}