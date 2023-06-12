import mongoose from 'mongoose';
import { UsuarioSchema } from './usuario.js';
import { EstadoSchema } from './estado.js';

export const TareaSchema = new mongoose.Schema({
    
        user_id:UsuarioSchema,
        fecha_creacion:{
            type:date,
            default:Date.now
        },
        fecha_finalizacion:date,
        detalle:String,
        estado:EstadoSchema,
        comentarios:String,
    })

export default mongoose.model('Tarea', TareaSchema, 'tareas');