<template>
  <div id="app">
    <Headers/>
    <router-view/>
  </div>
</template>
<script>
import Headers from './components/layouts/header'
export default {
  name: "app",
  components:{
    Headers
  }
}
</script>
<style lang="scss">
*{
  
  margin: 0!important;
}
body { margin: 0; }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0;
  padding: 0;
  color: #2c3e50;
}

#nav {
  padding: 20px!important;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
