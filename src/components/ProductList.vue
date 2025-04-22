<script setup>
const products = [
  {
    id: 1,
    name: "ordenador",
    price: 1000,
  },
  {
    id: 2,
    name: "teclado",
    price: 50,
  },
  {
    id: 3,
    name: "ratón",
    price: 20,
  },
];
</script>

<template>
  <ul class="product-list">
    <li v-for="product in products" :key="product.id" class="product-item">
      <h3>{{ product.name }}</h3>
      <h4>{{ product.price }}€</h4>
    </li>
  </ul>
</template>

<style>
.product-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;

  .product-item {
    width: 150px;
    background-color: lightgray;
    padding: 0 15px;
    margin: 10px;
  }
}
</style>
