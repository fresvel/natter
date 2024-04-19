import { Router } from "express";
import { send_whatsapp } from "../controllers/whatsapp.js";
const router = new Router();

router.get('/',(req, res)=>{
    res.json({result:"success"});
});

router.post('/',send_whatsapp);

export default router