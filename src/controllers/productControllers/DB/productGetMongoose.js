import { productsRepository } from "../../../repository/productsRepository.js"

export const productGetMongoose = async (req, res)  =>{
      
     
  const opcionesPaginado = { limit: req.body.limit, page: req.body.page, lean: true }
  const criterioBusqueda = { category: req.body.category }
  const paginado = await productsRepository.paginate(criterioBusqueda, opcionesPaginado)
  const paginadoMasCampos = { ...paginado, prevLink: "path prev Link", nextLink: "path next Link" }


  
  req.io.on('connection', socket => {


    socket.emit('paginado', paginadoMasCampos)

  })


  res.status(202).json(paginadoMasCampos);

    
     
   
     }