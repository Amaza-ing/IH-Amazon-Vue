<script setup>
  const names = ["Ana", "Luis", "Carlos", "David"];
</script>

<template>
  <ul>
    <li v-for="(name, index) in names" :key="index">{{ name }}</li>
  </ul>
</template>

<style></style>