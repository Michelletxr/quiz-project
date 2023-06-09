import questions from '../models/questions.js'
import process from 'process';
import path from 'path';


const controllerHome = (req, res) => {
    res.sendFile( path.join(process.cwd() + "/src/web/pages/home.html"))
};

const getQuestions = (req, res) => {
    res.json(questions)
}

const getQuestionById = (req, res) => {
    const {id} = req.params 
   
    if(id <= questions.length){
        res.status(200).json(questions[id])
    }else{
        res.status(404).send("error: question not found")
    }

}

export {controllerHome , getQuestions, getQuestionById}