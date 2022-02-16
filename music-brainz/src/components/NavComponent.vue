<template>
  <div>
    
    <div id="nav-component">
      <router-link class="btn btn-primary mb-3" to="/">Nouvelle recherche</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'NavComponent',
}
</script>