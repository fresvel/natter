import mongoose from 'mongoose';

const interesado =new mongoose.Schema(
    {
        origen:  { //personal
            type: String,
            required: true,
            },
        estudiante:{
            nombre:{
                type: String,
                required: true,
            },
            apellido:{
                type: String,
                required: true,
            },
            estado:{
                type: String,
                required: true,
            },
            programa:{
                type: String,
                required: true,
            },
            celular:{
                type: String,
                required: true,
            },
            convencional:{
                type: String,
                required: true,
            },
            correo:  { //personal
                type: String,
                trim: true,
                unique: true,
                lowercase: true,
            },
        },
        familiar:{
            nombre:{
                type: String,
            },
            apellido:{
                type: String,
            },
            celular:{
                type: String,
            },
            correo: { //personal
                type: String,
                trim: true,
                lowercase: true,
            },
        },
    }
)
export const Interesado = mongoose.model("Interesado", interesado);

//module.exports={Estudiante, Entrevista}