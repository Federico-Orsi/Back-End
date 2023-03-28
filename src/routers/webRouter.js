import { Router } from "express";
import { ManagerHandler } from "../dao/managers/clases1raEntrega.js";
import { productsCollection } from "../dao/managers/managerMongoose.js";



const webRouter = Router();

const arrayProd = ManagerHandler.getProducts();

webRouter.get('/', (req, res) => {


   res.render('home', { titulo: "handlebars", title: "Hola Mundo!!", productName: arrayProd[1]?.title, arrayProd });

});

webRouter.get('/prueba', async (req, res) => {

   const opcionesPaginado = { limit: req.query.limit, page: req.query.page }
   const criterioBusqueda = { category: req.query.category }
   const paginado = await productsCollection.paginate(criterioBusqueda, opcionesPaginado)
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
   const paginado = await productsCollection.paginate(criterioBusqueda, opcionesPaginado)
   const paginadoMasCampos = { ...paginado, prevLink: "path prev Link", nextLink: "path next Link" }
   const Docs = paginadoMasCampos.docs

   
   console.log(paginadoMasCampos)
   console.log(Docs)

   res.render('mongoose', {titulo: "Mongoose",title:"Mongoose Products", productId: paginadoMasCampos.docs[1]?._id,
              Docs });

});




export default webRouter;
