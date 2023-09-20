<template>
  <div id="signup">

    <!-- <form v-if="!isDone" @keyup.enter="signUp">
      <el-input
        v-model="form.email"
        type="email"
        placeholder="Please input email"
      />
      
      <el-input
        v-model="form.name"
        placeholder="Please input name"
      />
      
      <el-input
        v-model="form.phone"
        placeholder="Please input phone"
      />
      
      <el-input
        v-model="form.password"
        type="password"
        placeholder="Please input password"
        show-password
      />
      
      <el-button 
        plain
        type="success" 
        icon="User"
        @click="signUp"
        :disabled="!validateForm"
      >
        sign up
      </el-button>
  
      <el-button 
        plain  
        type="warning" 
        icon="RefreshLeft"
        @click="reset"
        :disabled="!form.email && !form.password"
      >
        reset
      </el-button>
    </form>

    <div v-if="isDone" class="done">
      <h1>Please, check you email</h1>
    </div> -->

    <button
      type="button"
      class="button button_primary" 
      @click="() => {$router.push('/login/signin')}"
    >
      sign in
    </button>

  </div>
</template>

<script>
import { supabase } from '@/supabase'

export default {
  name: 'SignUp',
  components: { },
  data: () => ({
    form: {
      email: '',
      password: '',
      name: '',
      phone: '',
    },
    isDone: false,
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
    reset() {
      Object.keys(this.form).forEach(element => {
        this.form[element] = '';  
      });
    },
    signUp() {
      const data = {
        email: this.form.email,
        password: this.form.password
      };
      supabase.auth.signUp(data)
        .then((res) => {
          console.log(res);
          if (res.data.user) {
            this.addUser(res.data.user);
           
          }
          if (res.error) {
           
          };
        });
    },

    addUser(user) {
      const data = {
        id: user.id,
        name: this.form.name,
        phone: this.form.phone,
        email: user.email, 
        department: {id: 1, name: 'Dep'},
        role: 'member',
        created_at: user.created_at,
      };
      supabase.from('users').insert(data).then((res) => {
        console.log(res);
        this.isDone = true;
      });
    }



  }
}
</script>

<style lang="scss">
  
</style>