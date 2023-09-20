<template>
  <div id="login" class="container">
    
    <div v-if="isAuth" class="info">
      <button @click="logout()" class="button button_warn">logout</button>

      <div v-if="currentUser" class="info_user">
        <h1>User info</h1>
        <p>{{ currentUser.id }}</p>
        <p>{{ currentUser.name }}</p>
        <p>{{ currentUser.email }}</p>
      </div>

      <button @click="getCurrentUser" class="button button_primary">
        get
      </button>
    </div>
  
    <router-view v-else/>
  </div>
</template>

<script>
import { supabase } from '@/supabase'

export default {
  name: 'Login',
  components: { },
  data: () => ({

  }),
  computed: {
    isAuth() {
      return this.$store.state.auth.user;
    },
    currentUser() {
      return this.$store.state.data.currentUser;
    },
  },
  mounted() {
  },
  methods: {
    getCurrentUser() {
      supabase.from('users').select().eq('id', this.isAuth.user.id) .then((res) => {
        if (res.data) {
          console.log('!!!!!!!!!',res.data);
          this.$store.dispatch('setCurrentUser', res.data[0]);
        };
        if (res.error) {
         
        };
      });
    },
    getUser() {
      supabase.auth.getUser().then((res) => {
        console.log('GU',res);
      });
    },
    logout() {
      supabase.auth.signOut().then((res) => {
        this.$store.dispatch('setUser', null);
        
      });
    }
  },
   
}
</script>

<style lang="scss">
  #login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
  }
</style>