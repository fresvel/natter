<template>
<h1>ENVIAR MENSAJE</h1>
<label for="saludo">Saludo</label>
<textarea id="saludo" v-model="saludo" cols="30" rows="10"> </textarea>
<label for="mensaje">Mensaje</label>
<textarea name="" id="mensaje" v-model="mensaje" cols="30" rows="10"></textarea>

<button @click="getInteresados">Contactos</button>
<button @click="sendMessage">ENVIAR</button>

<h1>{{ body.mensaje }}</h1>

</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import axios from 'axios';
const mensaje=ref("")
const saludo=ref("")

const body=reactive({
    contactos:[],
    mensaje:""
})

const sendMessage=async ()=>{
    try {
        const response = await axios.post('http://localhost:3050/natter/v1/whatsapp', {
            mensaje: body.mensaje,
            contactos: body.contactos
        });
        console.log('Respuesta del servidor:', response.data);
    } catch (error) {
        console.error('Error al enviar la petición:', error);
    }
}

const getInteresados= async ()=>{
    try {
        const response = await axios.get("http://localhost:3050/natter/v1/interesados");
        console.log(response.data);

        response.data.forEach(el =>{
            body.mensaje=computed(()=> saludo.value+el.estudiante.nombre+" "+el.estudiante.apellido+"\n"+mensaje.value)
        })



    } catch (error) {
        console.error('Error al enviar la petición:', error);
        
    }
}

</script>

<style scoped>

</style>