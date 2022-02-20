<template>
  <div class="container">
      <div class="row">

        <div v-if="type == 1">
          <h1>Artiste(s)</h1>
          <ArtistResultatsComponent v-for="artist in resultats.artists" :key="artist" :artist="artist" class="col-12 mt-3 mb-3" />
        </div>
        <div v-else-if="type == 2">
          <h1>Titre(s)</h1>
          <TitreResultatsComponent v-for="artist in resultats.artists" :key="artist" :artist="artist" class="col-12 mt-3 mb-3" />
        </div>
        <div v-else>
          Une Erreur est survenue lors du rendu des résultats
        </div>
      </div>
  </div>
</template>

<script>


import ArtistResultatsComponent from "../components/ArtistResultatsComponent.vue";
import TitreResultatsComponent from "../components/TitreResultatsComponent.vue";

export default {
  name: "Resultats",
  components: {
    ArtistResultatsComponent,
    TitreResultatsComponent,
  },
  data: function () {
      return {
      type : 1, // 1 : Artiste, 2 : Titre
      resultats : [],
    }
  },
  created(){
      if (!this.$parent.$parent.results){//Si le tableau est vide : rediriger vers la page de recherche
        this.$router.push({name:'Home'})
      }
      this.type = this.$parent.$parent.type
      this.resultats = this.$parent.$parent.results
      if (this.resultats == null){//Si le tableau est vide : rediriger vers la page de recherche
        this.$router.push({name:'Home'})
      }else if (this.resultats.artists == null){//Si le tableau est vide : rediriger vers la page de recherche
        this.$router.push({name:'Home'})
      }
  }
};
</script>
