import {ServicioReserva} from '../services/ServicioReserva.js'
export class ControladorReserva{

    constructor(){}
    async ingresar(request,response){
        let servicio=new ServicioReserva()      
        let datosPeticion=request.body 

        try{
            await servicio.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito en el ingreso de datos",
                datosIngresados:[],
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"fallamos en el ingreso de datos",
                datosIngresados:[],
                estado:false
            })
        }               
    }   

    async buscarId(request,response){
        let servicio=new ServicioReserva()
        let id=request.params.id
        try{
            response.status(200).json({
                mensaje:"Exito buscando la reserva por Id",
                datos:await servicio.buscarId(id),
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Fallamos buscando la reserva por Id",
                datos:[],
                estado:false
            })
        } 
    }

    async editar(request,response){
        let servicio=new ServicioReserva()
        let id=request.params.id
        let datosPeticion=request.body 

        try{
            await servicio.editar(id,datosPeticion)

            response.status(200).json({
                mensaje:"Exito editando la reserva por Id",
                datos:"Datos del id "+id,
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Fallo editando la reserva por Id",
                datos:[],
                estado: false
            })
        }
    }

    async eliminar(request,response){
        let servicio=new ServicioHabitacion()
        let id=request.params.id //id que llega por la URL

        try{
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje:"Exito eliminando habitacion por Id",
                datos:"Datos del id "+id,
                estado:true
            })

        }catch(error){
            response.status(400).json({
            mensaje:"Fallamos eliminando habitacion por Id",
            datos:"Datos del id "+id,
            estado:false
            })
        }
    }
}