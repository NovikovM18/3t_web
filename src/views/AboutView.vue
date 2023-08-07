<template>
  <div>
    <el-icon><Clock /></el-icon>
    <h1>{{ name }}</h1>
    <h1>{{ storeN }}</h1>
    <form @submit.prevent="submit">
      <input type="text" v-model="nn" placeholder="set N to store">
      <button type="submit">set</button>
    </form>
  </div>

</template>

<script>
export default {
  name: 'About',
  data: () => ({
    name: 'woohoo',
    nn: ''
  }),
  // data() {
  //   return {
  //     name: 'woohoo',
  //     nn: ''
  //   }
  // },
  mounted() {},
  computed: {
    storeN() {
      return this.$store.state.first;
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('setFirst', this.nn);
      this.nn = '';
    }
  }

}
</script>
<style lang="scss">
  
</style>