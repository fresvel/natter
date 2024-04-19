import {Estudiante} from "../models/estudiantes.js"
import fs from "fs"
import csv from "csv-parser"

export const add_alumno= async (req, res)=>{
    try {
        const body={
            identidad:{
                nombres:"Homero Javier",
                apellidos:"Velasteguí Izurieta",
                cedula:"180432653-6", //VALIDAR
                celular:"+593998333152",//VALIDAR
                email:  "dd@gmail.com",//VALIDAR pucese.edu.ec si existe
                correo:  "ee@gmail.com",//VALIDAR
                password: "180432653-6"
            }
        }
        const student = new Estudiante(body)
        const newstudent= await student.save()




        res.json({Result:newstudent})
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error});
    }
};

export const get_alumno= async (req, res)=>{
    try {
        const registros=[]
        fs.createReadStream("/home/fresvel/Documentos/Pucese/natter/backend/controllers/Inscritos.csv")
            .pipe(csv({ separator: ';' }))
            .on("data",(data)=>registros.push(data))
            .on("end",()=>{
                console.log(registros)
            });
        console.log(req.file);
        res.json({success:"success"});
    } catch (error) {
        res.json({error})
    }
};

export const upd_alumno= async ()=>{};

export const del_alumno= async ()=>{};

export const add_entrevista= async ()=>{};

export const upd_entrevista= async ()=>{};

export const get_entrevista= async ()=>{};

export const del_entrevista= async ()=>{};

