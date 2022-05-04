//Importo el paquete EXPRESS
//const express = require('express') forma vieja de importar
import express from 'express'

//Importar las rutas del api
import {rutas} from '../routes/rutas.js'

//Importar la conexion con la base de datos
import{ conectar } from '../database/conexion.js'

export class Servidor {
    constructor(){
        //atributo que se llama app donde almaceno la funcionalidad de express
        this.app = express()
        //coencto con la base de datos
        this.conectarconBd()
        //antes de usar los servicios habilito laa recepcion de datos
        this.llamarAuxiliares()
        this.atenderServicios()
    }
    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor encendido en ${process.env.PORT}`)
        })
    }

    atenderServicios(){
        //es generico, aca estan configuradas todas las rutas, es donde se busca la ruta si existe en donde estan programadas.
        this.app.use('/',rutas)
    }

    conectarconBd(){
        conectar()
    }

    llamarAuxiliares(){
        // activo la recepcion de datos por el body de la peticion (palabra reservada)
        this.app.use(express.json())
    }

}