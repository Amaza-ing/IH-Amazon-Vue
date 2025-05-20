<script setup>
import { useProductStore } from '@/stores/product';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.id;

const productStore = useProductStore();

const currentProduct = ref();

onMounted(() => {
  console.log("El componente ProductDetails se ha cargado");
  currentProduct.value = productStore.findProduct(productId);
})
</script>

<template>
  <h2>Product with id: {{ productId }}</h2>

  <div v-if="currentProduct">
    <h3>{{ currentProduct.name }}</h3>
    <img :src="currentProduct.img" alt="product image" width="100" />
    <h4>{{ currentProduct.price }}€</h4>
  </div>
  <div v-else>
    <h3>El producto no existe</h3>
  </div>
</template>

<style></style>