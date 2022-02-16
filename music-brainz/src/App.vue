<template>
  <div>
    <NavComponent/>
  </div>
</template>

<script>

import NavComponent from "./components/NavComponent.vue";

export default {
  name: "App",
  data: function () {
    return {
      results : [],
      clickedArtist:[]
    }
  },
  components: {
    NavComponent,
  },
};
</script>
