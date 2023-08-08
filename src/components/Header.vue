<template>
  <div id="header">
    <router-link to="/">
      <img class="logo" alt="logo" src="../assets/images/3t_logo.png">
    </router-link>

    <nav class="nav">
      <router-link to="/">home</router-link>
      |
      <router-link to="/about">about</router-link>
    </nav>

    <div class="actions">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({

  }),
  
}
</script>

<style lang="scss">
  #header {
    position: sticky;
    top: 0;
    padding: 1rem 1rem;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur(12px);

    .logo {
      width: 196px;
    }

    .nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .actions {
      width: 196px;
    }

  }
  
</style>