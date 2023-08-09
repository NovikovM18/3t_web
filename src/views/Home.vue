<template>
  <div id="home" class="container">
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
import { supabase } from '@/supabse'

export default {
  name: 'Home',
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
    this.getCountries();
    
  },
  computed: {
    storeN() {
      return this.$store.state.data.first;
    },
  },
  methods: {
    async getCountries() {
      const { data, error } = await supabase.from('countries').select()
      console.log(data);
      if (error) {
        ElNotification({
          title: 'Error',
          message: error.message,
          type: 'error',
        })
      }
    },


    submit() {
      this.$store.dispatch('setFirst', this.n);
  
      ElNotification({
        title: 'Success',
        message: `new stor val = ${this.n}`,
        type: 'success',
      })

      this.n = '';

    }
  }
  

}
</script>

<style lang="scss">
#c {
  width: 200px;
  transition: 10000ms;
}
</style>