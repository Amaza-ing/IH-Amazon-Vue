<script setup>
</script>

<template>
  <header class="header">
    <h1 class="header-title">Bienvenidos</h1>
    <nav>
      <ul class="nav-list">
        <li><a class="link" href="#">Home</a></li>
        <li><a class="link" href="#">Blog</a></li>
        <li><a class="link" href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header {
  background-color: darkblue;
  color: white;
  padding: 20px;

  .header-title {
    text-align: center;
    margin: 0;
    margin-bottom: 40px;
  }

  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;

    .link {
      color: white;
      text-decoration: none;
    }
  }
}
</style>