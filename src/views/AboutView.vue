<template>
  <div>
    <el-icon><Clock color="#409EFC"/></el-icon>
    <h1>{{ storeN }}</h1>
    <form @submit.prevent="submit">
      <el-input
        v-model="nn"
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
        :disabled="!nn"
      >Primary
      </el-button>

    </form>
  </div>

</template>

<script>
import Alert from '../components/shared/Alert.vue'
import { ElNotification } from 'element-plus'

export default {
  name: 'Alert',
  components: { Alert },
  data: () => ({
    nn: '',
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
    },
  },
  methods: {
    submit() {
      this.$store.dispatch('setFirst', this.nn);
  
      ElNotification({
        title: 'Success',
        message: this.nn,
        type: 'success',
      })

      this.nn = '';

    }
  }

}
</script>

<style lang="scss">
  
</style>