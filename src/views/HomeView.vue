<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';

</script>

<template>
  <h2>Bienvenido a la Home!</h2>

  <div>
    <h3>Explora nuestros productos</h3>
    <RouterLink class="link-btn" to="/products">Ir a Productos</RouterLink>
  </div>
</template>

<style>
.link-btn {
  text-decoration: none;
  background-color: lightblue;
  padding: 5px;
  border: 1px solid blue;
}

.link-btn:hover {
  background-color: rgb(87, 150, 171);
}

.link-btn:active {
  background-color: blue;
  color: white;
}
</style>