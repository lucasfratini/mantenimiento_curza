import mongoose from "mongoose";

const DB_URI='mongodb://mongo:27017/mantenimiento';


export function conectDb(){
    return new Promise((resolve,reject)=>{
        mongoose.connect(DB_URI).then((res,err)=>{
        if (err) return reject(err);
        console.log("Conexion exitosa con la BD");
        resolve();
    });
})
}
export function closeDb(){
    return mongoose.disconnect();
}