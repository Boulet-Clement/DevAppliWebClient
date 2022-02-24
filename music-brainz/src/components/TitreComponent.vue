<template>
  <div class="titre-component">
    <div class="container">
      <h1> {{ titre.title }}</h1>
      <h2 class="ms-2 mb-2 text-muted">{{ this.date }}</h2>
      <div id="description" class="ms-3"> 
        <span></span>
        <p class="card-text"> Artistes :  <span v-for="artiste in this.artistes" :key="artiste"> {{ artiste.name }} {{ artiste.joinphrase }} </span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitreComponent',
  props: ['titre'],
  data: function () {
      return {
      artistes : '',
      date: '',
    }
  },
  created(){
      console.log(this.titre)
      if(this.titre["artist-credit"]){
        this.artistes = this.titre["artist-credit"]
      }
      this.date = this.titre["first-release-date"]
      console.log(this.date)
  }
}
</script>