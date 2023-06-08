import mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema({
    nombre: String,
})

export default mongoose.model('Role', RoleSchema, 'roles');