import * as productosModel from '../models/index.js';

export const getAllProductos = async () => {
  return await productosModel.getAllProductos();
};

export const addProducto = async (nombre, precio, stock) => {
  return await productosModel.addProducto(nombre, precio, stock);
};














// import {User} from "../models";


// // Rotas GET
// const getLogin =  (req , res) => {
//      res.render('page/login', {session: false});
// }

// const getRegister = (req, res) => {
//      res.render('page/register', {session: false});
// }

// const getIndex = (req, res) => {
//      res.render('page');
// }

// const getAbout = (req, res) => {
//      res.render('page/about');
// }

// const getContact = (req, res) => {
//      res.render('page/contact');
// }

// const getAuth = (req, res) => {
//      res.render('page/auth');
// }

// const getLogout = (req, res) => {
//      req.logout();
//      res.redirect('/'); // ADD rota depois do logout
// }

// export default { 
//      getLogin, 
//      getRegister, 
//      getIndex, 
//      getAbout, 
//      getContact, 
//      getAuth, 
//      getLogout,
// };