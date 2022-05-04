import mongoose from "mongoose";

const Shema=mongoose.Schema

const Reserva=new Shema({
    fechaIngreso:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:Date,
        required:true
    },
    nombreCliente:{
        type:String,
        required:true
    },
    cedulaCliente:{
        type:String,
        required:true 
    },
    costo:{
        type:Number,
        required:true 
    }
})
export const modeloReserva=mongoose.model('reserva',Reserva)