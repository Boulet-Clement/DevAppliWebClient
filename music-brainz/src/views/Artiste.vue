<template>
  <div>
    <ArtisteComponent :artist="this.artist" />
  </div>
</template>

<script>
import ArtisteComponent from "../components/ArtisteComponent.vue";

export default {
  name: "Artiste",
  components: {
    ArtisteComponent,
  },
  data: function () {
    return {
      artist: [],
    };
  },
  created() {
    this.artist = this.$parent.$parent.clickedArtist;
    if (this.artist == null) {
      //Si le tableau est vide : rediriger vers la page de recherche
      window.location.href = "/";
    }
  },
};
</script>
