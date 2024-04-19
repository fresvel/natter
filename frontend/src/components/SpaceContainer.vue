<template>
<div class="container">
    <SpaceCard/>
</div>
</template>

<script setup>
import SpaceCard from './SpaceCard.vue';
</script>

<style scoped>
.container {
    background-color: #1010AA99;
    display: flex;
    width: 100vw;
    height: 80vh;
    justify-content:space-around;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}
</style>