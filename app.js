import express from "express"
import path from 'path';
import {fileURLToPath} from 'url';
import router from './src/routers/routes.js'

const app = express()
const port = 3000

//definindo arquivos estáticos
app.use(express.static("public"))

//indica que está usando uma view engine
app.set('view engine', 'ejs')
app.set('views', "/home/michelle/Área de trabalho/web-1/web1-project/src/views" )
//definindo rotas
app.use(router)

  app.listen(port, () => {
    console.log(`Init server ${port}`)
  })
