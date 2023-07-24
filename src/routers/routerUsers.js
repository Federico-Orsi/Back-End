import { Router } from "express";
import multer from 'multer';
import { deleteOneUser } from "../controllers/userControllers/deleteOneUser.js";
import { documentsMulter } from "../controllers/userControllers/documentsMulter.js";
import { enviarMail } from "../controllers/userControllers/enviarMail.js";
import { shiftUser } from "../controllers/userControllers/shiftUser.js";
import { timerDelete } from "../controllers/userControllers/timerDelete.js";
import { updateOneUser } from "../controllers/userControllers/updateOneUser.js";
import { updatePassword } from "../controllers/userControllers/updatePassword.js";
import { userController } from "../controllers/userControllers/userController.js";
import { userGetRaiz } from "../controllers/userControllers/userGetRaiz.js";

const routerUsers = Router();


const storage = multer.diskStorage({
  //  destination: 'documents/',  Aqui sería si quisieramos usar Destination como una propiedad. En ese caso te crea la carpeta de destino automáticamente sin necesidad de usar FS!!
  destination: (req, file, cb) => {
    // aquí destination lo estoy usando como función. En este caso para que funcione OK, las carpetas de destino ya deben estar creadas previamente!! Si uno quisiera No crearlas antes y que se creen automaticamente deberiamos usar FS segun lo que pide Multer (habria q revisarlo)
    const fieldName = file.fieldname   
    
    let folderProducts =  './products';
    let folderProfile =  './profiles';
    let folderDocuments =  './documents';

    
   
    if (fieldName == "producto"){
      cb(null, folderProducts)
    } else if (fieldName == "perfil") {
      cb(null, folderProfile)
    } else {
      cb(null, folderDocuments)
    }
    
    
  },
  
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

function fieldNameFilter(req, file, cb) {
  const allowedFieldNames = ['perfil', 'producto', "documento"]; // Nombres de campo permitidos
  if (allowedFieldNames.includes(file?.fieldname)) {
    cb(null, true); // Permitir la carga del archivo
  } else {
    cb(new Error('Nombre de campo no permitido')); // Rechazar la carga del archivo
  }
}

const upload = multer({ storage: storage, fileFilter: fieldNameFilter})


routerUsers.get('/', userGetRaiz);

routerUsers.post('/', userController);
  
routerUsers.put('/premium/:uid', shiftUser);

routerUsers.put('/actualizar_password', updatePassword);

routerUsers.put('/actualizarUnUsuario', updateOneUser);


routerUsers.post('/enviar-mail', enviarMail); 

routerUsers.post('/:uid/documents', upload.any(), documentsMulter); 

routerUsers.delete('/', timerDelete);

routerUsers.post('/deleteOneUser', deleteOneUser);


  
  
  export default routerUsers