//Importando el paquete dotenv
//require('dotenv').config()
import 'dotenv/config'

//Importo la clase servidor
import {Servidor} from './Server/Servidor.js'

//creo un objeto de la clase servidor
//los objetos son variables
let servidor=new Servidor()

//ya tengo el servidor ahora llamo al metodo encender servidor
servidor.encenderServidor()



