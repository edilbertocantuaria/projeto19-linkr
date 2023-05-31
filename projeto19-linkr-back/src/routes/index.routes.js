import { Router } from "express";
import publishRouter from "./publish.routes.js";

const router = Router();
router.use(publishRouter);

export default router;