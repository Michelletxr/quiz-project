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
//definindo rotas
app.use(router)
/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/src/web/pages/home.html"))
  })

  app.get('/question', (req, res) => {
    res.sendFile(path.join(__dirname + "/src/web/pages/questions.html"))
  })

  app.get('/result', (req, res) => {
    res.sendFile(path.join(__dirname + "/src/web/pages/result.html"))
  })
*/

  app.listen(port, () => {
    console.log(`Init server ${port}`)
  })