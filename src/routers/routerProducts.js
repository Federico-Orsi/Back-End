import { Router } from "express";
import { ManagerHandler } from "../dao/managers/clases1raEntrega.js";
import { productsCollection } from "../dao/managers/managerMongoose.js";
import { Producto } from "../dao/models/plantillaProducto.js";
import { io } from "../main.js";


const routerProducts = Router();


routerProducts.get('/', (req, res) => {

  const cantidad = req.query.limit
  const arrayProd = ManagerHandler.getProducts();
  const limitFilter = arrayProd.slice(0, cantidad)

  if (cantidad) {
    res.send(limitFilter);
  } else { res.send(ManagerHandler.getProducts()) }
});


//   routerProducts.get('/:pid', (req, res) =>{

//     const arrayProd = ManagerHandler.getProducts();
//     const found = arrayProd.find(prod => prod.id == req.params.pid)

//     if (found){
//        res.send(found) 

//     } else { 
//     res.send({"Error":'Product Not Found'})

//    }  


//  });


routerProducts.get('/mongoose', async (req, res) => {

  
  const opcionesPaginado = { limit: req.body.limit, page: req.body.page, lean: true }
  const criterioBusqueda = { category: req.body.category }
  const paginado = await productsCollection.paginate(criterioBusqueda, opcionesPaginado)
  const paginadoMasCampos = { ...paginado, prevLink: "path prev Link", nextLink: "path next Link" }

  io.on('connection', socket => {


    socket.emit('paginado', paginadoMasCampos)

  })


  res.status(202).json(paginadoMasCampos);

});




routerProducts.post('/mongoose', async (req, res) => {


  try {
    const nuevoProducto = new Producto(req.body)

    const nuevoProdMongo = await productsCollection.guardar(nuevoProducto)

    const prodMongoID = await productsCollection.findById(nuevoProdMongo._id)

    
    res.status(202).json(prodMongoID)
  } catch (error) { console.log(error) }
});




routerProducts.put('/mongoose', async (req, res) => {


  const prodEncontrado = await productsCollection.findById(req.body.id)

  prodEncontrado.description = req.body.description;
  prodEncontrado.status = req.body.status;
  prodEncontrado.category = req.body.category;

  prodEncontrado?.save()


  res.json(prodEncontrado);


});



routerProducts.delete('/:pid', (req, res) => {

  const arrayProd = ManagerHandler.getProducts();
  const found = arrayProd.find(prod => prod.id == req.params.pid)


  if (found) {

    const foundIndex = arrayProd.indexOf(found)
    arrayProd.splice(foundIndex, 1);

    res.send(`El producto ${found.title}, ha sido eliminado correctamente.`);
  } else { res.json({ "Error": 'El producto que intenta eliminar no se encuentra en el Array' }) }






});






export default routerProducts