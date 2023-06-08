import { Router } from 'express';
import Role from '../models/role.js';
const router = Router();


router.get('/', async (req, res) => {
    try {
        const roles = await Role.find();  
        res.json(roles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los roles' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { nombre } = req.body;     

      // Crear una nueva instancia del modelo Estado
        const nuevoRole = new Role({
            nombre
        })  
      // Guardar el nuevo estado en la base de datos
        const roleGuardado = await nuevoRole.save();  
        res.json(roleGuardado);
        } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al guardar el role' });
    }
});

router.delete('/:id',async(req, res) => {
    const {id} = req.params;
    console.log(id);
    if(id) {
        const role = await Role.findByIdAndDelete(id);
        if(!role){
          res.status(404);
          return res.send({
              status: 'error',
              error: "El Rol no existe"
          });
        }
        res.status(200);
        return res.send(role);
    } else {
        res.status(400);
        return res.send({
            status: 'error',
            error: "Falta el id del rol"
        });
    }
})

export default router;