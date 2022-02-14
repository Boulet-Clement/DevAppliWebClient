<template>  
  <div>
    <NavComponent/>
    <RechercheComponent/>
  </div>
</template>

<script>
import NavComponent from '../components/NavComponent.vue';
import RechercheComponent from '../components/RechercheComponent.vue';

export default {
  name: "Home",
  components: {
    NavComponent,
    RechercheComponent,    
  },
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
