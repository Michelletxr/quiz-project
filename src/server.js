import express from 'express';

const server = express()
server.use(express.json())


//definir rotas
server.get("/", (req, res) => {
    res.status(200).send("quiz caranguejau!!!")
})



export default server