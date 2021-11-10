<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  data () {
    return {
      msg: 'BUT MMI'
    }
  }
}
</script>

<style scoped>
h1{
  font-weight: bolder;
}
</style>
