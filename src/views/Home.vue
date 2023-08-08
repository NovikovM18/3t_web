<template>
  <div id="home">
    <img src="@/assets/images/3t_logo.png" alt="logo" >
    <img id="c" src="@/assets/images/pngfind.com-shooting-stars-png-48145.png" alt="">
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data: () => ({
    deg: 0,
    int: null
  }),
  created() {},
  mounted() {
    console.log('mount');
    this.int = setInterval(this.rotateCircle, 300);
  },
  unmounted() {
    console.log('unmount');
    clearInterval(this.int);
    this.int = null;
  },
  methods: {
    rotateCircle() {
      this.deg++;
      document.getElementById('c').style.transform = 'rotate(' + this.deg + 'deg)';
      console.log(this.deg);
    },
  }

}
</script>

<style lang="scss">
#c {
  width: 200px;
  transition: 1000ms;
}
</style>