import questions from '../models/questions.js'
import process from 'process';
import path from 'path';


const controllerHome = (req, res) => {
   // res.sendFile( path.join(process.cwd() + "/src/web/pages/home.html"))
   res.render('home')
};

const getQuestions = (req, res) => {
    console.log(res)
    res.json(questions)
}

const getQuestionById = (req, res) => {
    const {id} = req.params 
    const question = questions[id]
   
   /* if(id <= questions.length){
        res.status(200).json(questions[id])
    }else{
        res.status(404).send("error: question not found")*/
   // }
    res.render('question', {question})
}

const updateQuestion = (req, res) => {
    const {id} = req.params 
    //mudar para ficar dinamico
    res.redirect(301,'/question/0')
}

export {controllerHome , getQuestions, getQuestionById, updateQuestion}