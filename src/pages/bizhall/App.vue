<template>
  <div id="app">
    <Cover />
  </div>
</template>

<script>
import Cover from './components/Cover.vue'

export default {
  name: 'app',
  components: {
    Cover
  }
}
</script>

<style>
#app {
  background: #ffffff;
}
</style>
