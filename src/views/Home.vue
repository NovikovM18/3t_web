<template>
  <div id="home" class="container">
    <h1 class="val">{{ storeN }}</h1>


    <form class="form" @submit.prevent="submit">
      <input
        class="input input_text"
        v-model="form.val"
        placeholder="Please input val"
        type="text"
      />

      <button 
        @click="submit"
      >
        set val
      </button>

    </form>
    


  </div>
</template>

<script setup>
  import { ref, reactive, computed } from 'vue'
  import { supabase } from '@/supabase'
  import { useStore } from 'vuex'

  const store = useStore();

  const form = reactive({
    val: '',
  });
  const color = '#098098';
  
  const storeN = computed(() => store._state.data.data.first) ;

  function submit() {
    store.dispatch('setFirst', form.val);
    setTimeout(() => {
      form.val = '';
    }, 0);
  };
</script>

<style lang="scss">
  #home {
    .val {
      color: v-bind(color);
    }
  }
</style>