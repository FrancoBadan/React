import Express from "express";

const app = Express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("estas en el index");
});

app.listen(port,()=>{
    console.log(`ok en el servidor ${port}`)
})
