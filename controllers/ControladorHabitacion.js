//importamos el servicio (un controlador puede usar mas de un servicio)
import {ServicioHabitacion} from '../services/ServicioHabitacion'

//El controlador tiene la logica del negocio
export class ControladorHabitacion{

    constructor(){}

    async insertar(request,response){
        let servicio=new ServicioHabitacion()
        //recibir los datos de la peticion
        let datosPeticion=request.body //Recibo datos del body

        try{
            await servicio.registrar(datosPeticion)//espero a que el servicio guarde los datos
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

    async buscarTodos(request,response){

        //instancio la clase servico para poderla utilizar
        let servicio=new ServicioHabitacion()
        try{ 
            
            response.status(200).json({
                mensaje:"Exito buscando la informacion",
                datos:await servicio.buscarTodos(),
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Fallamos buscando la informacion",
                datos:[],
                estado:false
            })
        }
    }

    async buscarId(request,response){
        let servicio=new ServicioHabitacion()
        let id=request.params.id //id que llega por la URL
        try{
            response.status(200).json({
                mensaje:"Exito buscando habitacion por Id",
                datos:await servicio.buscarId(id),
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Fallamos buscando habitacion por Id",
                datos:[],
                estado:false
            })
        } 
    }

    async editar(request,response){
        let servicio=new ServicioHabitacion()
        let id=request.params.id //id que llega por la URL
        let datosPeticion=request.body //Recibo datos del body

        try{
            await servicio.editar(id,datosPeticion)

            response.status(200).json({
                mensaje:"Exito editando habitacion por Id",
                datos:"Datos del id "+id,
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Fallo editando habitacion por Id",
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