<template>
  <div id="header">
    <router-link to="/">
      <img :class="rollLogo ? 'logo roll' : 'logo'" alt="logo" src="../assets/images/logo.png" @click="rolling">
    </router-link>

    <nav class="nav">
      <router-link to="/">home</router-link>
      <router-link to="/tasks">tasks</router-link>
      <router-link to="/users">users</router-link>
      <router-link to="/departments">departments</router-link>
      <router-link to="/about">about</router-link>
    </nav>

    <div class="actions">
      <router-link to="/login">
        user
      </router-link>
    </div>
  </div>
</template>

<script>
import { supabase } from '@/supabase'

export default {
  name: 'Header',
  data: () => ({
    rollLogo: false,


  }),
  computed: {
    isAuth() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    // this.userW()
  },
  methods: {
    userW() {
      supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session)
      })
    },
    rolling() {
      this.rollLogo = true;
      setTimeout(() => {
        this.rollLogo = false;
      }, 250);
    },
  }
  
}
</script>

<style lang="scss">
  @import '../styles/vars.scss';
  
  #header {
    position: sticky;
    top: 0;
    padding: 1rem 1rem;
    height: $headerHeight;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: $bg;
    backdrop-filter: blur(12px);
    box-shadow: $gray_light 0px 3px 6px, $gray_light 0px 3px 6px;
    // box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 24px -12px;
    z-index: 999;

    .logo {
      width: 48px;
      animation: rotation 30s linear 0s infinite;
    }
    
    .roll {
      animation: roll 250ms linear 0s infinite;
    }

    .nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .actions {
      width: 48px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      a {
        .el-icon {
          width: 100%;
          height: 100%;
          svg {
            width: 32px;
            height: 32px;
          }
        }
      }
    }

  }



  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes roll {
    100% {
      transform: rotate(360deg);
    }
  }
  
</style>