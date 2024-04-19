<template>
<h1>ENVIAR MENSAJE</h1>
<label for="saludo">Saludo</label>
<input type="text" id="saludo" v-model="saludo">
<label for="mensaje">Mensaje</label>
<input type="text" id="mensaje" v-model="mensaje">

<button>Contactos</button>
<button>ENVIAR</button>

<h1>{{ body.mensaje }}</h1>

</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const mensaje=ref("")
const saludo=ref("")

const body=reactive({
    contactos:["0983200911"],
    mensaje:computed(()=> saludo.value+"\n"+mensaje.value)
})


</script>

<style scoped>

</style>