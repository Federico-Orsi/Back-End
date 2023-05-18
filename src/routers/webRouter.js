import { Router } from "express";
import { ManagerHandler } from "../borrador/clases1raEntrega.js";
import { productsRepository } from "../repository/productsRepository.js";



const webRouter = Router();

const arrayProd = ManagerHandler.getProducts();

webRouter.get('/', (req, res) => {


   res.render('home', { titulo: "handlebars", title: "Hola Mundo!!", productName: arrayProd[1]?.title, arrayProd });

});

webRouter.get('/prueba', async (req, res) => {

   const opcionesPaginado = { limit: req.query.limit, page: req.query.page }
   const criterioBusqueda = { category: req.query.category }
   const paginado = await productsRepository.paginate(criterioBusqueda, opcionesPaginado)
   const paginadoMasCampos = { ...paginado, prevLink: "path prev Link", nextLink: "path next Link" }
   const Docs = paginadoMasCampos.docs

   // const Docs = paginadoMasCampos[docs] 
   console.log(paginadoMasCampos)
   console.log(Docs)

   res.render('home', { titulo: "Prueba", title: "Hello World", productName: paginadoMasCampos.docs[1]?.title, Docs });

});


webRouter.get('/mongoose', async (req, res) => {

   const opcionesPaginado = { limit: req.query.limit, page: req.query.page }
   const criterioBusqueda = { category: req.query.category }
   const paginado = await productsRepository.paginate(criterioBusqueda, opcionesPaginado)
   const paginadoMasCampos = { ...paginado, prevLink: "path prev Link", nextLink: "path next Link" }
   const Docs = paginadoMasCampos.docs

   
   console.log(paginadoMasCampos)
   console.log(Docs)

   res.render('mongoose', {titulo: "Mongoose",title:"Mongoose Products", productId: paginadoMasCampos.docs[1]?._id,
              Docs, SessionName: req.user?.Nombre, SessionLastName: req.user?.Apellido, SessionEmail: req.user?.username, SessionRol: req.user?.rol});

});


webRouter.get('/registro', async (req, res) => {

   
   res.render('register', { titulo: "Registro"});

});

webRouter.get('/login', async (req, res) => {

   
   res.render('login', { titulo: "Login"});

});








export default webRouter;
