import { Router } from "express"
import  controllerHome  from "../controllers/controller.js";

const router  = Router();
router.get('/', controllerHome)

export default router;