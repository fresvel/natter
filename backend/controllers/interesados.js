import {Interesado} from "../models/interesados.js"
import fs from "fs"
import csv from "csv-parser"

export const add_interesado= async (req, res)=>{
    try {
        const registros=[]
        const result=[]
        fs.createReadStream("/home/fresvel/Documentos/Pucese/natter/backend/controllers/Inscritos.csv")
            .pipe(csv({ separator: ';' }))
            .on("data",(data)=>registros.push(data))
            .on("end",()=>{
                registros.forEach(async (el)=>{
                    try {
                        const new_reg={
                            origen:"Admiciones",
                            estudiante:{},
                            familiar:{}
                        }
                        console.log(el)
                        new_reg.estudiante=el
                        const interesado =new Interesado(new_reg);
                        const new_interesado =await interesado.save();
                        result.push(new_interesado)   
                    } catch (error) {
                        console.log(error)
                    }
                })
            });
        console.log(req.file);
        res.json({success:result});
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export const get_interesado= async (req, res)=>{
    try {
        const interesados=await Interesado.find();
        return res.json(interesados)
    } catch (error) {
        return res.status(500).json({error:"Error interno de servidor"})
    }
};

export const upd_alumno= async ()=>{};

export const del_alumno= async ()=>{};

export const add_entrevista= async ()=>{};

export const upd_entrevista= async ()=>{};

export const get_entrevista= async ()=>{};

export const del_entrevista= async ()=>{};

