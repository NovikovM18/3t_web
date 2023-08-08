<template>
  <div id="about">
    <el-icon><Clock color="#409EFC"/></el-icon>
    <h1>{{ storeN }}</h1>
    <form @submit.prevent="submit">
      <el-input
        v-model="n"
        maxlength="30"
        placeholder="Please input nn"
        show-word-limit
        type="text"
      />

      <el-button 
        plain  
        type="primary" 
        @click="submit"
        icon="Star"
        :disabled="!n"
      >
        Primary
      </el-button>

    </form>
  </div>
</template>

<script>
import { ElNotification } from 'element-plus'

export default {
  name: 'About',
  components: { },
  data: () => ({
    n: '',
  }),
  // data() {
  //   return {
  //     name: 'woohoo',
  //     nn: ''
  //   }
  // },
  mounted() {
    
  },
  computed: {
    storeN() {
      return this.$store.state.first;
    },
  },
  methods: {
    submit() {
      this.$store.dispatch('setFirst', this.n);
  
      ElNotification({
        title: 'Success',
        message: this.n,
        type: 'success',
      })

      this.n = '';

    }
  }

}
</script>

<style lang="scss">
  #about {
    height: 200vh;
  }
</style>