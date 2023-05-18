import { ManagerHandler } from "../../borrador/clases1raEntrega.js";

const arrayProd = ManagerHandler.getProducts();

export const getRaiz = (req, res) => {


    res.render('home', { titulo: "handlebars", title: "Hola Mundo!!", productName: arrayProd[1]?.title, arrayProd });
 
 }