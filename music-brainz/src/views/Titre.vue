<template>
  <div>
    <TitreComponent  :titre=this.titre /> 
  </div>
</template>

<script>

import TitreComponent from "../components/TitreComponent.vue";

export default {
  name: "Titre",
  components: {
    TitreComponent,
  },
  data: function () {
      return {
      titre : [],
    }
  },
  created(){
      this.titre = this.$parent.$parent.clickedTitle
      //console.log(this.resultats.artists[0].name)
      console.log(this.titre)
      if (this.titre == null){//Si le tableau est vide : rediriger vers la page de recherche
        this.$router.push({name:'Home'})
    }
  }

};
</script>
