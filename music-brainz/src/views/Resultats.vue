<template>
  <div class="container">
      <NavComponent/>
      <div class="row">
        <ResultatsComponent v-for="artist in resultats.artists" :key="artist" :artists="artist" class="col-3 mt-3 mb-3" />
      </div>
  </div>
</template>

<script>

import NavComponent from "../components/NavComponent.vue";
import ResultatsComponent from "../components/ResultatsComponent.vue";

//v-for="artist in resultats.artists" :key="artist"
export default {
  name: "Resultats",
  components: {
    NavComponent,
    ResultatsComponent,
  },
  data: function () {
      return {
      resultats : [],
    }
  },
  created(){
      this.resultats = this.$parent.$parent.results
      //console.log(this.resultats.artists[0].name)
      console.log(this.resultats)
      if (this.resultats.artists == null){//Si le tableau est vide : rediriger vers la page de recherche
        this.$router.push({name:'Home'})
    }
  }
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
