<template>
    <div class="header">
        <h1>TODO</h1>
    <div id="nav">
      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    </div>
</template>

<script>
export default {
    name:"Headers"
}
</script>

<style  scoped>
.header{
    background:#000;
    text-align: center;
    color: #fff;
   
    
}
</style>