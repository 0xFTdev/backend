import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const PORT = 3000
const app = express()


// app.use(cors())



app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})