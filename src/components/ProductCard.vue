<script setup>
import { useProductStore } from "@/stores/product";

const props = defineProps({
  product: Object,
});

const productStore = useProductStore();
</script>

<template>
  <article class="product-card">
    <RouterLink class="product-name" :to="`/products/${props.product.id}`">
      {{ props.product.name }}
    </RouterLink>
    <img :src="props.product.img" alt="product image" width="100" />
    <h4>{{ props.product.price }}€</h4>
    <button @click="productStore.deleteProduct(props.product.id)">
      Eliminar
    </button>
  </article>
</template>

<style>
.product-card {
  width: 150px;
  height: 250px;
  background-color: lightgray;
  padding: 5px 15px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .product-name {
    text-decoration: none;
    color: black;
    font-size: 28px;
  }
}
</style>
