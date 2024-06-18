import express from 'express';
import { getAllProductos, addProducto } from '../controllers/productosController.js';

const router = express.Router();

router.get('/productos', async (req, res) => {
  try {
    const productos = await getAllProductos();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/productos', async (req, res) => {
  const { nombre, precio, stock } = req.body;
  try {
    const producto = await addProducto(nombre, precio, stock);
    res.status(201).json(producto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;















// import {Router} from 'express';
// import UserController from '../controllers/UserController';
// import { 
//      isAuthenticated, 
//      isNotAuthenticated, 
//      authenticateLogin, 
//      authenticateRegister 
// } from '../config/auth';

// const router = Router();

// // Rotas Get
// router.get('/', UserController.getIndex);
// router.get('/about', UserController.getAbout);
// router.get('/contact', UserController.getContact);

// router.get('/login', isNotAuthenticated, UserController.getLogin);
// router.get('/register', isNotAuthenticated, UserController.getRegister);
// router.get('/logout', UserController.getLogout);

// // Rota autenticada
// router.get('/auth', isAuthenticated, UserController.getAuth);

// // Rotas Post
// router.post('/register', authenticateRegister);
// router.post('/login', authenticateLogin);

// router.get('/error', (req,res) => {
//      throw new Error('Erro Interno');
// })

// export default router;