//Importar Mongoose
import mongoose from "mongoose";

//creamos una constante para crear el MODELO DE DATOS
const Shema=mongoose.Schema

//Construyo mi modelo o esquema Habitacion
const Habitacion=new Shema({
    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    }
})

export const modeloHabitacion=mongoose.model('habitacion',Habitacion)