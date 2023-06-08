import mongoose from 'mongoose';
import { UsuarioSchema } from './usuario.js';
import { EstadoSchema } from './estado.js';

export const PedidoSchema = new mongoose.Schema({
    
        usuario:UsuarioSchema,
        fecha_creacion:date,       
        detalle:String,
        estado:EstadoSchema,
    })

export default mongoose.model('Pedido', PedidoSchema, 'pedidos');
