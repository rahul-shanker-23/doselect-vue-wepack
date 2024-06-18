<template>
    <div id="app">
      <h1>{{ msg }}</h1>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue';
    const msg = ref("Hello, Vue with Webpack!");
</script>
  
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>