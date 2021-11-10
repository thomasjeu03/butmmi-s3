<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Actualites',
  data () {
    return {
      msg: 'Actualités'
    }
  }
}
</script>

<style scoped>
h1{
  font-weight: bolder;
}
</style>
