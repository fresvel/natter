<template>
<div class="Identidad">

    <div v-for="(field, index) in form_student.identidad" :key="index">
        <label :for="field.id">{{ field.label}}</label>
        <input :type="field.type" :id="field.id" v-model="body.identidad[field.id]">
    </div>
</div>

<h1>{{ body.identidad.name }}</h1>

<input type="file" name="" id="csv">

</template>

<script setup>
import { reactive } from 'vue';


const form_student={
    identidad:[
                {id:"name", label:"Nombres", type:"text"},
                {id:"lastname", label:"Apellidos", type:"text"},
                {id:"cedula",label:"Cédula", type:"text"},
                {id:"celular", label:"Celular", type:"text"},
                {id:"email", label:"Correo Institucional", type:"email"},
                {id:"correo", label:"Correo Personal", type:"email"},
                {id:"password", label:"Contraseña", type:"password"},
            ]
}

const body=reactive ({
            identidad:{
                name:"INICIO",
                lastname:"",
                cedula:"", 
                celular:"",
                email:  "",
                correo:  "",
                password: ""
            }
        })


</script>

<style scoped>
</style>