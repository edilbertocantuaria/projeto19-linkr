import { Router } from "express";
import publishRouter from "./publish.routes.js";
import hashtag from "./hashtag.routes.js";

const router = Router();
router.use(publishRouter);
router.use(hashtag)

export default router;