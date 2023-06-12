import mongoose from 'mongoose';
import { UserSchema } from './user.js';
import { EstadoSchema } from './estado.js';

export const PedidoSchema = new mongoose.Schema({
    
        user_id:UserSchema,        
        detalle:String,
        estado:EstadoSchema,
        fecha:{
            type:Date,
            default:Date.now
        }
    })

export default mongoose.model('Pedido', PedidoSchema, 'pedidos');
