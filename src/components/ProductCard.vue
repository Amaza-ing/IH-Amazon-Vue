<script setup>
const props = defineProps({
  product: Object,
});
</script>

<template>
  <article class="product-card">
    <h3>{{ props.product.name }}</h3>
    <img :src="props.product.img" alt="product image" width="100">
    <h4>{{ props.product.price }}€</h4>
  </article>
</template>

<style>
  .product-card {
    width: 150px;
    height: 230px;
    background-color: lightgray;
    padding: 5px 15px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
</style>