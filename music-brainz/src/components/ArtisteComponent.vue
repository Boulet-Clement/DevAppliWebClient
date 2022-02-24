<template>
  <div class="artiste-component">
    <div class="container">
      <h1>{{ artist.name }}</h1>
      <h2 v-if="artist.area" class="ms-2 mb-2 text-muted">
        {{ artist.area.name }}
      </h2>
      <div id="description" class="ms-3">
        <span>{{ this.phraseVie }}</span>
        <p class="card-text">
          Tags :
          <span v-for="tag in artist.tags" :key="tag">
            <br />- {{ tag.name }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtisteComponent",
  props: ["artist"],
  methods: {
    handleClickReturnResults() {
      this.$router.push({ name: "Resultats" });
    },
  },
  data: function () {
    return {
      naissance: "",
      mort: "",
      phraseVie: "",
      date: "",
    };
  },
  created() {
    this.naissance = this.artist["life-span"].begin;
    if (this.artist["life-span"].ended === true) {
      this.mort = this.artist["life-span"].end;
      this.phraseVie = `Naissance : ${this.naissance}, mort : ${this.mort}.`;
    } else {
      this.phraseVie = `Naissance : ${this.naissance}.`;
    }
  },
};
</script>