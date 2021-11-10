<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Extra',
  data () {
    return {
      msg: 'Extra, toujours plus'
    }
  }
}
</script>

<style scoped>
h1{
  font-weight: bolder;
}
</style>
