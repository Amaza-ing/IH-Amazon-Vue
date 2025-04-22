<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);

function login() {
  isLoggedIn.value = true;
}
</script>

<template>
  <div>
    <p v-if="isLoggedIn">Bienvenido, usuario.</p>
    <p v-else>No has iniciado sesión.</p>

    <button @click="login">Inciar sesión</button>
  </div>
</template>

<style></style>