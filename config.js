import dotenv from "dotenv"

dotenv.config()

console.log(process.env)


export const PORT = process.env.PORT
export const uri = process.env.MONGO_LOCAL
export const MongoAtlas = process.env.MONGO_ATLAS_WEB
export const SessionSecretWord = process.env.SECRET_WORD_SESSION

