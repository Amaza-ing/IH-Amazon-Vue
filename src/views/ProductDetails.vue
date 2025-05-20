<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.id;
</script>

<template>
  <h2>Product with id: {{ productId }}</h2>
</template>

<style></style>