import express from "express";
import { conectDb } from "./db.js";
import cors from "cors";
import estadosRouter from "./routes/estados.js";
import rolesRouter from "./routes/roles.js";
import usersRouter from "./routes/users.js";
//import tareasRouter from "./routes/tareas.js";-
//import pedidosRouter from "./routes/pedidos.js";

const PORT=8000;
const app=express();

app.use(express.json());
app.use(cors());


app.use('/estados', estadosRouter);
app.use('/roles', rolesRouter);
app.use('/users', usersRouter);
//app.use('/tareas', tareasRouter);
//app.use('/pedidos', pedidosRouter);
conectDb().then(()=>{
    app.listen(
    PORT,
    ()=>console.log("App corriendo en http://localhost:"+PORT));
});
