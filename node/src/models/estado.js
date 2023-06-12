import mongoose from 'mongoose';

export const EstadoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique:true
        
    },
});

export default mongoose.model('Estado', EstadoSchema, 'estados');