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
  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
    
      // Buscar el estado por su ID
      const estado = await Estado.findByIdAndUpdate(
        id,
        { nombre },
        { new: true }
      );
    
      if (!estado) {
        res.status(404);
        return res.json({ mensaje: 'El estado no existe' });
      }
    
      res.json(estado);
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

router.get('/:id', async (req, res) => {
  try {
    const estado = await Estado.findById(req.params.id);

    if (!estado) {
      return res.status(404).json({ error: 'Estado no encontrado' });
    }

    res.json(estado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el estado' });
  }
});

export default router;