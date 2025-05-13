<script setup>
const props = defineProps({
  title: String,
});

const emit = defineEmits(["sendMsg"]);

const message = "Hola desde el hijo";

function notify() {
  emit("sendMsg", message);
}
</script>

<template>
  <section class="child-component">
    <slot name="header"></slot>

    <h3>Este es el componente hijo</h3>
    <h4>{{ props.title }}</h4>

    <slot></slot>

    <slot name="footer"></slot>

    <button @click="notify">Enviar mensaje</button>
  </section>
</template>

<style>
.child-component {
  border: 1px dotted blue;
  padding: 5px;
  margin: 5px;
}
</style>