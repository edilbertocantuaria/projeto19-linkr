import { Router } from "express";
import publishRouter from "./publish.routes.js";
import signRouter from "./auth.routes.js"

const router = Router();
router.use(publishRouter);
router.use(signRouter);

export default router;