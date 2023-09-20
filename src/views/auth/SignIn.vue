<template>
  <div id="signin">
    <form class="form" @submit.prevent="signIn">

      <div class="form_item">
        <label for="email">email</label>
        <input
          id="email"
          class="input input_text"
          v-model="form.email"
          type="email"
          placeholder="Please input email"
        />
      </div>
        
      <div class="form_item">
        <label for="password">password</label>
        <input
          id="password"
          class="input input_text"
          v-model="form.password"
          :type="toggleShowPassword? 'password' : 'text'"
          placeholder="Please input password"
        />
        <div 
          class="input show"
          :style="[toggleShowPassword ? {'background-color': '#b7b9c0'} : {'background-color': '#f5f7fa'}]"
          @click="()=>{toggleShowPassword = !toggleShowPassword}"
        >
        </div>
      </div>
  
      <div class="form_actions">
        <button 
          type="submit"
          class="button button_success"
          :disabled="!validateForm"
        >
          sign in
        </button>
    
        <button 
          type="button"
          class="button button_warn"
          @click="reset"
          :disabled="!form.email && !form.password"
        >
          reset
        </button>
      </div>
    </form>

  </div>
</template>

<script>
import { supabase } from '@/supabase'

export default {
  name: 'SignIn',
  components: { },
  data: () => ({
    form: {
      email: '',
      password: '',
    },
    toggleShowPassword: true,

  }),
  computed: {
    validateEmail() {
      if (!this.form.email) {
        return false;
      } else if (!this.form.email.includes('@') || !this.form.email.includes('.')) {
        return false;
      } else {
        return true;
      };
    },
    validatePass() {
      if (!this.form.password || this.form.password.length < 6) {
        return false;
      } else {
        return true;
      };
    },
    validateForm() {
      if (!this.validateEmail || !this.validatePass) {
        return false
      } else {
        return true;
      };
    },
  },
  mounted() {
  },
  methods: {
    signIn() {
      const email = this.form.email;
      const password = this.form.password;
      console.log(email, password);
      supabase.auth.signInWithPassword({ email, password }).then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error)
        };
        if (res.data.session && res.data.user) {
          this.$store.dispatch('setUser', res.data);
          this.getCurrentUser(res.data.user.id);
          
          // this.reset();
        };
      })
    },
    
    getCurrentUser(id) {
      supabase.from('users').select().eq('id', id) .then((res) => {
        if (res.data) {
          this.$store.dispatch('setCurrentUser', res.data[0]);
        };
        this.$router.push('/');
        if (res.error) {
         
        };
      });
    },

    reset() {
      Object.keys(this.form).forEach(element => {
        this.form[element] = '';  
      });
    },



  }
}
</script>

<style lang="scss">
  #signin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
</style>