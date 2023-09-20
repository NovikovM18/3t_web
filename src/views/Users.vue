<template>
  <div class="container">
   
  </div>
</template>

<script>
import { supabase } from '@/supabase'

export default {
  name: 'Users',
  components: { },
  data: () => ({
    users: [],
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
      supabase.from('users').select().then((res) => {
        if (res.data) {
          this.users = res.data;
        };
        if (res.error) {
         
        };
      });
    },


   
  }
}
</script>

<style lang="scss">
  
</style>