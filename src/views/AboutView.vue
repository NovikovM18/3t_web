<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ storeN }}</h1>
    <form @submit.prevent="submit">
      <input type="text" v-model="nn">
      <button type="submit">set name</button>

    </form>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'About',
  data() {
    return {
      name: 'woohoo',
      nn: ''
    }
  },
  mounted() {},
  computed: {
    storeN() {
      return this.$store.state.sn;
    }
  },
  methods: {
    submit() {
      console.log(store.state)
      this.$store.dispatch('setN', this.nn);
      this.nn = '';
      console.log(store.state)

    }
  }

}
</script>
<style lang="scss">
  
</style>