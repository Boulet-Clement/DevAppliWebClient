<template>
  <div class="recherche-component">
    <input type="text" name="input_search" id="">
    <input type="checkbox" name="Artiste" id="input_artiste">
    <label for="input_artiste">Artiste</label>
    <input type="checkbox" name="Titre" id="input_titre">
    <label for="input_titre">Titre</label>
    <button>Rechercher</button>
  </div>
</template>

<script>
export default {
  name: 'RechercheComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
