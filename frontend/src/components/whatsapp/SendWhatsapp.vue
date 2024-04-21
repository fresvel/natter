<template>

<div class="container">

    <div class="row">
        <div class="col-4">
            <h5>Contactos</h5>
            <button @click="getInteresados" class="btn bg-primary btn-lg">Contactos</button>
        </div>
        <div class="col-8 bg-primary-subtle">
            <h5>Campo del Mensaje</h5>
            <div class="mb-3">
                <label for="saludo" class="form-label">Saludo</label>
                <textarea id="saludo" class="form-control" v-model="body.saludo" cols="30" rows="5"> </textarea>
            </div>
            <div class="mb-3">
                <label for="mensaje" class="form-label">Mensaje</label>
                <textarea class="form-control" id="mensaje" v-model="body.mensaje" cols="30" rows="10"></textarea>
                <button @click="sendMessage" class="btn bg-success-subtle btn-lg mt-3">ENVIAR</button>
            </div>
        </div>    
    </div>
    <div class="d-flex justify-content-around">
        <div>
            <p>Hola 1</p>
        </div>
        <div>
            <p>Hola 2</p>
        </div>
        <div>
            <p>Hola 3</p>
        </div>
    </div>

</div>


</template>

<script setup>
import {reactive} from 'vue';
import axios from 'axios';

const body=reactive({
    contactos:[],
    mensaje:"",
    saludo:""
})

const sendMessage=async ()=>{
    try {
        const response = await axios.post('http://localhost:3050/natter/v1/whatsapp', {
            mensaje: body.mensaje,
            contactos: body.contactos,
            saludo: body.saludo
        });
        console.log('Respuesta del servidor:', response.data);
    } catch (error) {
        console.error('Error al enviar la petición:', error);
    }
}

const getInteresados= async ()=>{
    try {
        const response = await axios.get("http://localhost:3050/natter/v1/interesados");
        response.data.forEach(el =>{

            body.contactos.push({name:el.estudiante.nombre+" "+el.estudiante.apellido,number:el.estudiante.celular})
        })
        console.log(body);


    } catch (error) {
        console.error('Error al enviar la petición:', error);
        
    }
}

</script>

<style scoped>

</style>