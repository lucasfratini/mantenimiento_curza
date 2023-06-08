import mongoose from 'mongoose';
import { RoleSchema } from './role.js';

export const UserSchema = new mongoose.Schema({
    
        username:String,
        password:String,             
        rol:RoleSchema
        
    })

export default mongoose.model('User', UserSchema, 'users');