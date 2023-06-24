import { Router } from "express"
import  {
    controllerHome, 
    getQuestions, 
    getQuestionById, 
    updateQuestion, 
    redirectResult,
    getResult
}  from "../controllers/controller.js";

const router  = Router();
router.get('/', controllerHome)
router.get('/questions', getQuestions)
router.get('/question/:id', getQuestionById)
router.get('/update-question/:id', updateQuestion)
router.get('/redirect-points/:totalPoints', redirectResult)
router.get('/result', getResult)

export default router;