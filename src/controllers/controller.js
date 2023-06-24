import questions from '../models/questions.js'
import calculateResult from '../models/result.js'

const controllerHome = (req, res) => {
   res.render('home')
};

const getQuestions = (req, res) => {
    res.json(questions)
};

const getQuestionById = (req, res) => {
    const {id} = req.params 
    const question = questions[id]
    res.render('question', {question})
};

const updateQuestion = (req, res) => {
    const {id} = req.params 
    if(parseInt(id)<questions.length){
        res.redirect(301,`/question/${id}`) 
    }
};

const redirectResult = (req, res) => {
    const {totalPoints} = req.params
    process.env.CURRENT_POINTS = totalPoints
    res.redirect(`/result`)
}

const getResult = (req, res) =>{
    const points = process.env.CURRENT_POINTS
    let result = calculateResult(parseInt(points));
    res.render('result', {result})
};

export {controllerHome , getQuestions, getQuestionById, updateQuestion, redirectResult, getResult}