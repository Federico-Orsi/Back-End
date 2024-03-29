import dotenv from "dotenv"

dotenv.config()

console.log(process.env)


export const PORT = process.env.PORT
export const uri = process.env.MONGO_LOCAL
export const MongoAtlas = process.env.MONGO_ATLAS_WEB
export const SessionSecretWord = process.env.SECRET_WORD_SESSION
export const NODE_ENV = process.env.NODE_ENV || 'Desarrollo'
export const SECRET_TOKEN = process.env.SECRET_TOKEN
