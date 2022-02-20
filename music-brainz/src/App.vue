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
      type : 1,
      results : [],
      clickedArtist:[]
    }
  },
  components: {
    NavComponent,
  },
};
</script>
