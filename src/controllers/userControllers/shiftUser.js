import { usersRepository } from "../../repository/usersRepository.js";



export async function shiftUser(req, res, next) {

    try {

        const user = await usersRepository.findById(req.params.uid)

        const documents = user.documents

        const identificacionFile = documents.find(elem => elem.name.includes("Identificacion.jpg"));
        const domicilioFile = documents.find(elem => elem.name.includes("Comprobante de Domicilio.jpg"));
        const estadoDeCuentaFile = documents.find(elem => elem.name.includes("Comprobante de estado de cuenta.jpg"));


        const docsRequeridosParaPasarAPremium = [identificacionFile, domicilioFile, estadoDeCuentaFile];

        const docsOK = docsRequeridosParaPasarAPremium.every(element => documents.includes(element));



        if (user.rol == "User" && docsOK) {
            user.rol = "Premium"
            user.status = "Documentación obligatoria aprobada"
            user?.save()
            res.json(`Listo!! Su nuevo rol es: ${user.rol}`);
        } else if (user.rol == "User" && !docsOK) {
            res.json(`Upss!! La Documentación requerida para pasar a Premium esta Incompleta!!`);
            throw new Error("Documentación incompleta")
            
        } else if((user.rol == "Premium" || user.rol == "Admin") && docsOK){
            user.status = "Documentación obligatoria aprobada"
            user?.save()
            res.json(`Su rol siguen siendo: ${user.rol}`);
        } else if((user.rol == "Premium" || user.rol == "Admin") && !docsOK){
            
            res.json(`Su rol siguen siendo: ${user.rol}. Documentación obligatoria Incompleta.`);
        }
    } catch (error) {
        console.log(error);
    }


    

}

