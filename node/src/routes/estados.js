import { Router } from 'express';

import Estado from '../models/estado.js';
const router = Router();




router.get('/', async (req, res) => {
    try {
            const estados = await Estado.find();
  
      res.json(estados);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener los estados' });
    }
  });

  router.post('/', async (req, res) => {
    try {
      const { nombre } = req.body;
      
  
      // Crear una nueva instancia del modelo Estado
      const nuevoEstado = new Estado({
            nombre
      })
  
      // Guardar el nuevo estado en la base de datos
      const estadoGuardado = await nuevoEstado.save();
  
      res.json(estadoGuardado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: error });
    }
  });

router.delete('/:id',async(req, res) => {
    const {id} = req.params;
    console.log(id);
    if(id) {
        const estado = await Estado.findByIdAndDelete(id);
        if(!estado){
          res.status(404);
          return res.send({
              status: 'error',
              error: "El estado no existe"
          });
        }
        res.status(200);
        return res.send(estado);
    } else {
        res.status(400);
        return res.send({
            status: 'error',
            error: "Falta el id del estado"
        });
    }
})

export default router;