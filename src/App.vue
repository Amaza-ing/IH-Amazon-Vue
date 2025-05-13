<script setup>
import ConditonalRendering from './components/ConditonalRendering.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import ListRendering from './components/ListRendering.vue';
import ParentComponent from './components/ParentComponent.vue';
import ProductList from './components/ProductList.vue';
import VariablesComponent from './components/VariablesComponent.vue';
</script>

<template>
  <HeaderComponent />

  <h2>Hola a todos!</h2>

  <VariablesComponent />
  <ConditonalRendering />
  <ListRendering />
  <ProductList />
  <ParentComponent />
</template>

<style>
</style>