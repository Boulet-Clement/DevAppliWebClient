<template>
  <div>
      <NavComponent/>
      <ArtisteComponent  msg="Jean"/>
  </div>
</template>

<script>

import NavComponent from "../components/NavComponent.vue";
import ArtisteComponent from "../components/ArtisteComponent.vue";


export default {
  name: "Artiste",
  components: {
    NavComponent,
    ArtisteComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
