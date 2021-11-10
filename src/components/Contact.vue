<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Nous contacter'
    }
  }
}
</script>

<style scoped>
h1{
  font-weight: bolder;
}
</style>
