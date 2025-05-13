<script setup>
import ProductCard from './ProductCard.vue';

const products = [
  {
    id: 1,
    name: "ordenador",
    price: 1000,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/1200px-Desktop_computer_clipart_-_Yellow_theme.svg.png",
  },
  {
    id: 2,
    name: "teclado",
    price: 50,
    img: "https://m.media-amazon.com/images/I/614GO7cAxaL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "ratón",
    price: 20,
    img: "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UF894,1000_QL80_DpWeblab_.jpg",
  },
];
</script>

<template>
  <ul class="product-list">
    <li v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
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
}
</style>
