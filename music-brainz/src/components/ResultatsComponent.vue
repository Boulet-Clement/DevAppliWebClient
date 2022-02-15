<template>
    <div id="resultats-component">
    
    </div>
</template>

<script>
export default {
  name: 'ResultatsComponent',
  data: function () {
      return {
      resultats : [],
    }
  },
  created(){
      this.resultats = this.$parent.$parent.$parent.results
      console.log(this.resultats.artists[0].name)
      if (this.resultats == []){//Si le tableau est vide : rediriger vers la page de recherche
        this.$router.push({name:'Home'}) // Plutot redirect sur Resultats
    }
  }
}

</script>
