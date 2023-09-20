<template>
  <Header />
  <router-view />
</template>

<script>
  import { supabase } from '@/supabase'
  import Header from './components/Header.vue'

  export default {
    components: { Header },
    data: () => ({
      
    }),
    mounted() {
      this.checkSession();
    },
    methods: {
      checkSession() {
        supabase.auth.onAuthStateChange((event, session) => {
          if (session) {
            this.$store.dispatch('setUser', 
              {
                session: session,
                user: session.user
              }
            );
          } else {
            this.$router.push('/login/signin');
          };
        });
      }
    },
  }
</script>

<style lang="scss">
  
</style>
