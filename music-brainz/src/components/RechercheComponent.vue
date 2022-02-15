<template>
  <div class="container">
    <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupSelect01">Options</label>
      <select class="form-select" id="inputGroupSelect01" v-on:change="onChangeType($event)">
        <option value="1">Artiste</option>
        <option value="2">Titre</option>
      </select>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Ecrire ici" v-model="search" aria-label="Ecrire ici" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="handleSearchClick">Rechercher</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RechercheComponent',
  data: function () {
    return {
      selectedType: 1,
      search : '',
    }
  },
  methods: {
    handleSearchClick(){
      // On log les entrées
      console.log(this.search)
      console.log(this.selectedType)
    },
    onChangeType: function(e){
        this.selectedType = e.target.value;
        console.log(this.selectedType)
    },
  },
}
</script>
