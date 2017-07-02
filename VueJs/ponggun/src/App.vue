<template>
  <div id="app">
    <menubar> </menubar>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import menubar from './components/MenuBar'

export default {
  name: 'app',
  components: { menubar }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
