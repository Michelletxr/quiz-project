import { Router } from "express"
import  {controllerHome, getQuestions, getQuestionById, updateQuestion}  from "../controllers/controller.js";

const router  = Router();
router.get('/', controllerHome)
router.get('/questions', getQuestions)
router.get('/question/:id', getQuestionById)
router.get('/update-question/:id', updateQuestion)

export default router;