import express from "express"
import path from 'path';
import {fileURLToPath} from 'url';
import { dirname } from 'path';
import router from './src/routers/routes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = 3000

//definindo arquivos estáticos
app.use(express.static("public"))

//indica que está usando uma view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views') )
//definindo rotas
app.use(router)

  app.listen(port, () => {
    console.log(`Init server ${port}`)
  })
