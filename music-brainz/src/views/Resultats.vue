<template>
  <div>
      <NavComponent/>
      <ResultatsComponent  msg="Jean"/>
  </div>
</template>

<script>

import NavComponent from "../components/NavComponent.vue";
import ResultatsComponent from "../components/ResultatsComponent.vue";


export default {
  name: "Resultats",
  components: {
    NavComponent,
    ResultatsComponent,
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
