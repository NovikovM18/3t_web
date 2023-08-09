<template>
  <div id="about" class="container">
    <img id="c" src="@/assets/images/pngfind.com-shooting-stars-png-48145.png" alt="">
    <img src="@/assets/images/3t_logo.png" alt="logo" >
  </div>
</template>

<script>


export default {
  name: 'About',
  components: {},
  data: () => ({
    deg: 0,
    int: null
  }),
  created() {},
  mounted() {
    console.log('mount');
    this.int = setInterval(this.rotateCircle, 1000);
  },
  unmounted() {
    console.log('unmount');
    clearInterval(this.int);
    this.int = null;
  },
  methods: {
    rotateCircle() {
      this.deg+=10;
      document.getElementById('c').style.transform = 'rotate(' + this.deg + 'deg)';
    },
  }

}
</script>

<style lang="scss">
  #about {
    height: 200vh;
 
    #c {
      width: 400px;
      transition: 50s;
    }
  }
</style>