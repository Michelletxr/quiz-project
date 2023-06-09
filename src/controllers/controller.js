import questions from "./models/questions.js"

const controllerHome = (req, res) => {
    res.sendFile("/home/michelle/Área de trabalho/web-1/web1-project/src/web/pages/home.html")
    //res.render("../views/home.ejs")
};


const getQuestions = (req, res) => {
    res.json(questions)
}

module.exports = {controllerHome , getQuestions}