import mongoose from "mongoose";

export async function conectar(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito Conectandonos a la base de datos")

    }catch(error){
        console.log("error en la conexion con la base de datos"+error) //concateno el error para que salga cual es el error

    }
}