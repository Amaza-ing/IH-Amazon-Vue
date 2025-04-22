<script setup>
import { ref } from 'vue';

// let counter = 0;
const counter = ref(0);
const message = ref("Haz clic en el botón");
const inputPlaceholder = ref("Escribe aquí");
const username = ref("");

setInterval(() => {
  // counter++;
  // console.log(counter);

  counter.value = counter.value + 1;
}, 1000);

function changeMessage() {
  message.value = "Has hecho clic en el botón";
}

function deleteUsername() {
  username.value = "";
}
</script>

<template>
<h2>Counter: {{ counter }}</h2>

<p>{{ message }}</p>
<button @click="changeMessage">Haz clic</button>

<br>
<input type="text" :placeholder="inputPlaceholder">

<br>
<h3>{{ username }}</h3>
<input type="text" v-model="username">
<button @click="deleteUsername">Borrar</button>
</template>

<style></style>