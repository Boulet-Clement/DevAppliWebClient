<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <div id="nav-component">
      <router-link to="/">Home</router-link> |
      <router-link to="/artiste">Artiste</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'NavComponent',
}
</script>