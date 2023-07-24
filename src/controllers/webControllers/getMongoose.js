import { productsRepository } from "../../repository/productsRepository.js"

export const getMongoose = async (req, res) => {


        const opcionesPaginado = { limit: req.query.limit, page: req.query.page}
        const criterioBusqueda = { category: req.query.category }
        const paginado = await productsRepository.paginate(criterioBusqueda, opcionesPaginado)
        const paginadoMasCampos = { ...paginado, prevLink: "path prev Link", nextLink: "path next Link" }
        const Docs = paginadoMasCampos.docs
     
        
        console.log(paginadoMasCampos)
        console.log(Docs)
        console.log(req.user?.rol)
     
        res.render('mongoose', {titulo: "Mongoose",title:"Mongoose Products", productId: paginadoMasCampos.docs[1]?._id,
                   Docs, SessionName: req.user?.Nombre, SessionLastName: req.user?.Apellido, SessionEmail: req.user?.username, SessionRol: req.user?.rol});
     
    


}