import mongoose from 'mongoose';

const estudiante =new mongoose.Schema(
    {
        identidad:{
            nombres:{
                type: String,
                required: true,
            },
            apellidos:{
                type: String,
                required: true,
            },
            cedula:{
                type: String,
                required: true,
                unique:true,
                index: {unique: true}
            },
            celular:{
                type: String,
                required: true,
            },
            email:  {//institucional
                type: String,
                required: true,
                trim: true,
                unique: true,
                lowercase: true,
            },
            correo:  { //personal
                type: String,
                required: true,
                trim: true,
                unique: true,
                lowercase: true,
            },
            password: {
                type: String,
                required: true,
            },
        },
        secundaria:{
            colegiofinal:{
                type: String,
            },
            modalidad:{
                type: String,
            },
            otroscolegios:{
                type: String,
            },
            suspenciones:{
                cursos:{
                    type: [Number],
                },
                motivos:{
                    type: [String],
                },
            },
        },
        universidad:{
            escuela:{
                type: String,
            },
            carrera:{
                type: String,
            },
            tutor:{
                type: String,
            },
            nivel:{
                type: Number,
            },
            paralelo:{
                type: String,
            },
            updated:{
                type: Date,
                default: Date.now
            },
        }
    }
)
/*
const entrevista=new mongoose.Schema(
    {
        general:{
            estudiante: {
                type: String,
                ref: 'Estudiante', // Referencia al modelo Estudiante
                required: true
            },
            tutor:{
                type: String,
                required:true
            },
            fecha:{
                type: Date,
                default: Date.now,
            },
            escuela:{
                type: String,
                required:true
            },
            carrera:{
                type: String,
                required:true
            },
            nivel:{
                type: Number,
                required:true
            },
            paralelo:{
                type: String,
                required:true
            },

        },
        laboral:{
            empresa:{
                type: String,
                required: true,
            },
            actividad:{
                type: String,
                required: true,
            },
            cargo:{
                type: String,
                required: true,
            },
            horario:{
                type: String,
                required: true,
            },
            lugar:{
                type: String,
                required: true,
            },
        },
        destrezas:{
            verbal:{
                type: String,
                enum: ['Muy bueno', 'Bueno', 'Regular', 'Malo'],
                required: true,
            },
            lectora:{
                type: String,
                enum: ['Muy bueno', 'Bueno', 'Regular', 'Malo'],
                required: true,
            },
            escrita:{
                type: String,
                enum: ['Muy bueno', 'Bueno', 'Regular', 'Malo'],
                required: true,
            },
            coral:{//Comprensión oral
                type: String,
                enum: ['Muy bueno', 'Bueno', 'Regular', 'Malo'],
                required: true,
            },
            exoral:{
                type: String,
                enum: ['Muy bueno', 'Bueno', 'Regular', 'Malo'],
                required: true,
            },
            logico:{
                type: String,
                enum: ['Muy bueno', 'Bueno', 'Regular', 'Malo'],
                required: true,
            },
        },
        salud:{
            enfermedad:{
                type: [String],
                required: true,
            },
            tratamiento:{
                type: [String],
                required: true,
            },
            internados:{
                type: [String],
                required: true,
            },
            cirugias:{
                type: [String],
                required: true,
            },
            cronicas:{
                type: [String],
                required: true,
            },
            observaciones:{
                type: String,
                required: true,
            },
            
        },
        habitos:{
            lectura:{
                type: Number,
                required: true,
            },
            estudio:{
                type: Number,
                required: true,
            },
            horario:{
                type: String,
                required: true,
            },
            lugar:{
                type: String,
                required: true,
            },
        },
        hobbies:{
            deportes:{
                type: [String],
            },
            culturales:{
                type: [String],
            },
            horario:{
                type: [String],
            },
            
        }
    }
)

*/

//const Estudiante=mongoose.model('Estudiante',estudiante)
//const Entrevista=mongoose.model('Entrevista',entrevista)

export const Estudiante = mongoose.model("Estudiante", estudiante);

//module.exports={Estudiante, Entrevista}