import { productsRepository } from "../../repository/productsRepository.js"

export const getPrueba = async (req, res) => {

   

        const opcionesPaginado = { limit: req.query.limit, page: req.query.page }
        const criterioBusqueda = { category: req.query.category }
        const paginado = await productsRepository.paginate(criterioBusqueda, opcionesPaginado)
        const paginadoMasCampos = { ...paginado, prevLink: "path prev Link", nextLink: "path next Link" }
        const Docs = paginadoMasCampos.docs
     
        // const Docs = paginadoMasCampos[docs] 
        console.log(paginadoMasCampos)
        console.log(Docs)
     
        res.render('home', { titulo: "Prueba", title: "Hello World", productName: paginadoMasCampos.docs[1]?.title, Docs });
     
    
 
 }