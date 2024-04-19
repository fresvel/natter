import express from 'express';
import "dotenv/config"
import cors from "cors"

import estudiantes from "./routes/estudiantes.js";
import interesados from "./routes/interesados.js";
import whatsapp from "./routes/whatsapp.js";

import "./database/mogoose.js"
const app = express();
const PORT= process.env.PORT || 3000

const whitelist =[process.env.ORIGIN1,process.env.ORIGIN2]

app.use(cors({
    origin:(origin, callback)=> {
        console.log("Origin: " + origin);
        if (!origin || whitelist.includes(origin)){
            return callback(null, origin);
        }
        return callback("Error de cors: "+origin+" not authorized");
    }
}
    
))

app.use(express.json());
app.use("/natter/v1/estudiantes", estudiantes);
app.use(express.static("public"));

app.use("/natter/v1/interesados",interesados);

app.use("/natter/v1/whatsapp", whatsapp);

app.listen(PORT, () =>{
    console.log("Server initialized on port " + PORT+ "Access via http://localhost:"+PORT+"/natter/v1/estudiantes/test");
})