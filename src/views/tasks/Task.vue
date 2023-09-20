<template>
  <div id="task">
    <p>{{ task.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  components: [],
  props: {
    task: {
      require: true,
    }
  },
  data:() => ({

  }),
  mounted() {
    console.log(this.task);
  },
  
}
</script>

<style lang="scss">
  #task {
    
  }
</style>