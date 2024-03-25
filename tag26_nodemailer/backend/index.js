import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import morgan from 'morgan'
import 'dotenv/config'


import { entryRouter } from './entries/entry.controller.js'
import { userRouter } from './users/user.controller.js'


const PORT = 3000
const app = express()


app.use(cors())
app.use(morgan('tiny'))
app.use(express.json());


app.use("/entries", entryRouter)
app.use("/users", userRouter)


await mongoose.connect(process.env.MONGODB_URL)



app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})