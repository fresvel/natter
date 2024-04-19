import {Router} from "express";
import { body } from "express-validator";
import { add_alumno, get_alumno } from "../controllers/estudiantes.js";
import { get_interesado } from "../controllers/interesados.js";
import multer from "multer"
const upload = multer({ dest: 'uploads/' });


const router=Router();


router.get("/",get_interesado)

router.post("/", upload.single('file'), (req, res) => {
   // req.file contiene la información del archivo subido
   console.log(req);
   res.send('Archivo recibido con éxito');
 });

export default router