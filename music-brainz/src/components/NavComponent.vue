<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <div id="nav-component">
      <router-link to="/">Home</router-link> |
      <router-link to="/artiste">Artiste</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'NavComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
