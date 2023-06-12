import { Router } from 'express';
import User from '../models/user.js';
import Estado from '../models/estado.js'
import Pedido from '../models/pedido.js';
const router = Router();

router.post('/', async (req, res) => {
    try {
      const { user_id, detalle, estado } = req.body;      
      const user = await User.findById(user_id);  
          if (!user) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
          }

      const verificarEstado = await Estado.findOne({nombre:estado}).exec();         
          if (!verificarEstado) {
            return res.status(400).json({ error: 'El estado proporcionado no existe' });
          }  

      const nuevoPedido = new Pedido({
        user_id: user,            
        detalle,
        estado: verificarEstado
      });     
      const pedidoGuardado = await nuevoPedido.save();  
      res.json(pedidoGuardado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el pedido' });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const pedidos = await Pedido.find();  
      res.json(pedidos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los pedidos' });
    }
  });
  

  router.get('/:id', async (req, res) => {
    try {
      const pedido = await Pedido.findById(req.params.id);
  
      if (!pedido) {
        return res.status(404).json({ error: 'Pedido no encontrado' });
      }
  
      res.json(pedido);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el pedido' });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const pedidoEliminado = await Pedido.findByIdAndDelete(req.params.id);
  
      if (!pedidoEliminado) {
        return res.status(404).json({ error: 'Pedido no encontrado' });
      }
  
      res.json({ mensaje: 'Pedido eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el pedido' });
    }
  });

  export default router;