import { Router } from "express";
import { add_interesado } from "../controllers/interesados.js";

const router = new Router();

router.get("/", add_interesado)

export default router;