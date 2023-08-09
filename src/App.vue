<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: { Header }
  }
</script>

<style lang="scss">
  #app {
    background-color: #f3f3f3;
  }
</style>
