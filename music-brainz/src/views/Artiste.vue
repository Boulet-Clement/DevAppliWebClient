<template>
  <div>
    <ArtisteComponent  :artist=this.artist /> 
  </div>
</template>

<script>

import ArtisteComponent from "../components/ArtisteComponent.vue";

export default {
  name: "Artiste",
  components: {
    ArtisteComponent,
  },
  data: function () {
      return {
      artist : [],
    }
  },
  created(){
      this.artist = this.$parent.$parent.clickedArtist
      //console.log(this.resultats.artists[0].name)
      console.log(this.artist)
      if (this.artist == null){//Si le tableau est vide : rediriger vers la page de recherche
        this.$router.push({name:'Home'})
    }
  }

};
</script>
