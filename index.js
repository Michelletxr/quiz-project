import server from "./src/server.js"

const port = 3000

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})