<template>
  <div>
    
    <ArtisteComponent  :artist=this.artist /> 
    <NavComponent />
  </div>
</template>

<script>

import ArtisteComponent from "../components/ArtisteComponent.vue";
import NavComponent from "../components/NavComponent.vue";

export default {
  name: "Artiste",
  components: {
    ArtisteComponent,
    NavComponent,
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
