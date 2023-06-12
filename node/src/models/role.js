import mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema({
    nombre: {
        type:String,
        unique:true
    }
})

export default mongoose.model('Role', RoleSchema, 'roles');