<template>
  <nav class="nav-bar">

    <!-- Logo -->
    <router-link to="/" class="nav-item">
      <img src="../img/logo-run.png" alt="logo" class="nav-logo">
    </router-link>

    <!-- Bouton hamburger (affiché seulement sur petit écran) -->
    <button class="hamburger" @click="toggleMenu">
      ☰
    </button>

    <!-- Liens du menu -->
    <div class="nav-links" :class="{ open: menuOpen }">
      <router-link to="/" class="nav-item">Accueil</router-link>
      <router-link to="/course" class="nav-item">Parcours</router-link>
      <router-link to="/registration" class="nav-item">Inscription</router-link>
      <router-link to="/results" class="nav-item">Résultats</router-link>
      <router-link to="/contact" class="nav-item">Contact</router-link>
    </div>
    
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
