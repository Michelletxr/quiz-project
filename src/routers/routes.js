import { Router } from "express"
import  {controllerHome, getQuestions, getQuestionById}  from "../controllers/controller.js";

const router  = Router();
router.get('/', controllerHome)
router.get('/questions', getQuestions)
router.get('/question/:id', getQuestionById)

export default router;