<template>
  <div class="artiste-component">
    <h1>{{ artist.name }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      
    </p>
    <button class="btn btn-primary" @click="handleClickReturnResults()">Retourner aux résultats</button>
  </div>
</template>

<script>
export default {
  name: 'ArtisteComponent',
  props: ['artist'],
  methods: {
    handleClickReturnResults(){
      this.$router.push({name:'Resultats'})
    }
  },
}
</script>