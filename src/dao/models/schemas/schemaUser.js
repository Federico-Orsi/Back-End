import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

export const userSchema = new mongoose.Schema({
    Nombre: {type: String, required: true}, 
    Apellido: {type: String, required:true},
    username: {type: String, required: true},
    Edad: {type: Number},
    password: {type: String, required: true},
    rol: {type: String, required: true},
    documents: {type: Array, required: true},
    last_connection: {type: Date},
    status: {type: String}
    
}).plugin(mongoosePaginate)


export const usersModel = mongoose.model("users", userSchema)


