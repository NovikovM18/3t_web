<template>
  <div class="container">
    
  </div>
</template>

<script>
import { supabase } from '@/supabase'

export default {
  name: 'Departments',
  components: { },
  data: () => ({
    departments: [],
  }),
  mounted() {
    this.getData();
  },
  computed: {
    storeN() {
      return this.$store.state.data.first;
    },
  },
  methods: {
    getData() {
      supabase.from('departments').select().then((res) => {
        this.departments = res.data;
      })
      .catch((error) => {
        
      })
    },
   
  }
}
</script>

<style lang="scss">
  
</style>