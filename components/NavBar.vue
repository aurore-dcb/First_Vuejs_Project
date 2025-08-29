<template>
  <nav class="nav-bar">
    <router-link to="/">Acceuil</router-link>
    <router-link to="/course">Parcours</router-link>
    <router-link to="/registration">Inscription</router-link>
    <router-link to="/results">Résultats</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
