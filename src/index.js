import express from "express"
import cors from "cors"
import { MongoClient, ObjectId } from "mongodb"
import dotenv from "dotenv"

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json)


app.listen(5000, () => console.log("Server is running in port: 5000"))