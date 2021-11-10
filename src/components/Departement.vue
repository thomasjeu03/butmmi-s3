<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Departement',
  data () {
    return {
      msg: 'Le Département'
    }
  }
}
</script>

<style scoped>
h1{
  font-weight: bolder;
}
</style>
