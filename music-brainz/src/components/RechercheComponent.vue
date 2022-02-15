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
import axios from 'axios';

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
      this.sendRequest()
    },
    onChangeType: function(e){
        this.selectedType = e.target.value;
        console.log(this.selectedType)
    },
    sendRequest(){
      let apiLink = '';
      if (this.selectedType === 1){// Artiste 
        console.log("on est dans le lien 1")
        apiLink = `https://musicbrainz.org/ws/2/artist?query=artist:${this.search}%20AND%20type:person&limit=10&fmt=json`
      }else if (this.selectedType === 2){ // Titre
        apiLink = ''
      }else{
        throw new Error
      } 
      axios.get(apiLink , {
            headers: {
            "Content-Type": "application/json",
            "User-Agent" : "MyMusicBrainz/1.2.0 ( clement60.b@gmail.com )",
            }
        })
        .then(response => {
            this.datas = response.data
            this.$parent.$parent.$parent.results = response.data // Pas très propre, si on doit réutiliser le composant
            console.log(this.$parent.$parent.$parent.results);
            this.$router.push({name:'Resultats'}) // Plutot redirect sur Resultats
            
        })
       .catch(function (error) {
             console.log(error);
        });
    }
  },
}
</script>
