import { Router } from 'express';
import Roles from '../models/role.js'
import User from '../models/user.js';
const router = Router();


router.post('/', async (req, res) => {
    try {
      const { username, password, rol } = req.body;   
      const existingRole = await Roles.findOne({ nombre: rol });  
      if (!existingRole) {
        return res.status(400).json({ error: 'El rol proporcionado no existe' });
      } 
  
      const newUser = new User({
        username,
        password,
        rol: existingRole
      });  
     
      const savedUser = await newUser.save();
        res.json(savedUser);
      } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el usuario' });
      }
  });


  router.get('/', async (req, res) => {
    try {
      const users = await User.find();
  
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  });


  router.get('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
  
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el usuario' });
    }
  });


  router.delete('/users/:id', async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  });
  
  
  

export default router;