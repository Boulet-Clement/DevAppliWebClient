<template>
    <div id="resultats-component">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ artist.name }}</h5>
          <h6 class="card-subtitle mb-2 text-muted" v-if="artist.area">{{ artist.area.name }}</h6>
          <p class="card-text"> Tags :  <span v-for="tag in artist.tags" :key="tag"> <br/>- {{ tag.name }} </span></p>
          <button class="btn btn-primary" @click="handleClickViewMore(artist)">Voir plus</button>
        </div>
      </div>  
    </div>
</template>

<script>
export default {
  name: 'ResultatsComponent',
  props: ['artist'],
  methods: {
    handleClickViewMore(artist){
      this.$parent.$parent.$parent.clickedArtist = artist
      this.$router.push({name:'Artiste'})
    }
  },
}

</script>
