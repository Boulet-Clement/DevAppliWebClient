<template>
    <div id="resultats-component">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ titre.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ this.date }}</h6>
          <p class="card-text"> Artistes :  <span v-for="artiste in this.artistes" :key="artiste"> {{ artiste.name }} {{ artiste.joinphrase }} </span></p>
          <button class="btn btn-primary" @click="handleClickViewMore(titre)">Voir plus</button>
        </div>
      </div>  
    </div>
</template>

<script>
export default {
  name: 'ResultatsComponent',
  props: ['titre'],
  methods: {
    handleClickViewMore(titre){
      this.$parent.$parent.$parent.clickedtitre = titre
      //this.$router.push({name:'Titre'})
    }
  },
  data: function () {
      return {
      artistes : '',
      date: '',
    }
  },
  created(){
      this.artistes = this.titre["artist-credit"]
      this.date = this.titre["first-release-date"]
      console.log(this.date)
  }
}

</script>
