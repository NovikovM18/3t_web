<template>
  <el-alert
    v-if="isAlert"
    :title="alert.title"
    :type="alert.type"
    :description="alert.description"
    show-icon
  />
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {}
  },
  mounted() {
    console.log(this.isAlert);
    console.log(this.alert);
  },

  computed: {
    isAlert() {
      return this.$store.state.alerts.length;
    },
    alert() {
      return this.$store.state.alerts[0];
    },

  }
    
}
</script>

<style scoped>
  .el-alert {
    margin: 20px 0 0;
  }
  .el-alert:first-child {
    margin: 0;
  }
</style>