import { Router } from "express";
import { add_interesado,get_interesado } from "../controllers/interesados.js";

const router = new Router();

router.get("/", get_interesado)
router.post("/", add_interesado)


export default router;