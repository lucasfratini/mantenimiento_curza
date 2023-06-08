import mongoose from 'mongoose';
import { UsuarioSchema } from './usuario.js';
import { EstadoSchema } from './estado.js';

export const TareaSchema = new mongoose.Schema({
    
        usuario:UsuarioSchema,
        fecha_creacion:date,
        fecha_finalizacion:date,
        detalle:String,
        estado:EstadoSchema,
        comentarios:String,
    })

export default mongoose.model('Tarea', TareaSchema, 'tareas');