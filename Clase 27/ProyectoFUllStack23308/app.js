import Express from "express";
import db from "./database/db.js";
import cors from "cors"
import PostRouter from "./routes/PostRoutes.js"
const app = Express();

const port = 8000;

app.use(cors())
app.use(Express.json())



app.use("/posts",PostRouter)

try {
    await db.authenticate()
    console.log("Conectado a la BD")
} catch (error) {
    console.log(`error de coneccion ${error}`)
    
}

app.listen(port,()=>{
    console.log(`ok en el servidor ${port}`)
})
