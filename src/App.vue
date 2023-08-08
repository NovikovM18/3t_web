<template>
  <div id="app">
    <nav>
      <router-link to="/">home</router-link> |
      <router-link to="/about">about</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  #app {
    nav {
      padding: 36px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

  }
</style>
