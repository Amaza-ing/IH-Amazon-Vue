<script setup>
import ChildComponent from './ChildComponent.vue';

const title2 = "Título del hijo 2";

function displayMsg(msg) {
  alert(msg);
}
</script>

<template>
  <section class="parent-component">
    <h2>Este es el componente padre</h2>

    <ChildComponent title="Título del hijo 1" @send-msg="displayMsg">
      <p>Contenido HTML desde el padre inyectado en el slot</p>
      <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, vero.</h5>
      <button>hola</button>

      <template #header>
        <h2>Título del componente</h2>
      </template>

      <template #footer>
        <h2>Footer del componente</h2>
      </template>
    </ChildComponent>
    <ChildComponent :title="title2" @send-msg="displayMsg" />
  </section>
</template>

<style>
.parent-component {
  border: 2px dashed black;
  padding: 5px;
  margin: 10px;
}
</style>