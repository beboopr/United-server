import express from "express";
import cors from "cors";
import { userLogin, addNewUser, updateUser} from "./src/user.js";

const app = express()
app.use(cors())
app.use(express.json())

// Add routes
app.patch('/users/:uid', updateUser)
app.post('/login', userLogin)
app.post('/users', addNewUser)

// Re-derecting traffic to express app to the cloud function
export const api = functions.https.onRequest(app)






const functions = require("firebase-functions");