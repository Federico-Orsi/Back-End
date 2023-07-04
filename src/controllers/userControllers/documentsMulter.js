import { usersRepository } from "../../repository/usersRepository.js";

usersRepository

export async function documentsMulter(req, res, next) {
    
 
 const user = await usersRepository.findById(req.params.uid);

 const documents = user.documents

 req.files.forEach(elem => {
        documents.push({name: elem.filename, reference: elem.path})
 });

 

 if (documents.length > 0) {
  user.status = "Los documentos cargados están en revisión";
  
 }

 user.save()

 console.log(user);


  console.log(req.files);

  res.json(req.files)
   

}