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
        const nuevoRole = new Role({
            nombre
        })        
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
router.get('/:id', async (req, res) => {
    try {
        const role = await Role.findById(req.params.id);  
        if (!role) {
        return res.status(404).json({ error: 'Rol  no encontrado' });
        }  
        res.json(role);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el Rol' });
    }
})


router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;      
        const role = await Role.findByIdAndUpdate(
        id,
        { nombre },
        { new: true }
        );
    
        if (!role) {
        res.status(404);
        return res.json({ mensaje: 'El rol no existe' });
        }
    
        res.json(role);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: error });
    }
});

export default router;