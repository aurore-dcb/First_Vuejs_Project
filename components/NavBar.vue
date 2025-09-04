<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const menuOpen = ref(false)
const navRef = ref(null)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function handleClickOutside(event) {
  // si navRef existe ET que le clic n'est pas dedans → fermer le menu
  if (navRef.value && !navRef.value.contains(event.target)) {
    menuOpen.value = false
  }
}

// activer et desactiver le listener
onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside)
})

</script>

<template>
  <nav class="nav-bar">

    <!-- Logo -->
    <router-link to="/" class="nav-item">
      <img src="../img/logo-run.png" alt="logo" class="nav-logo">
    </router-link>

    <!-- Bouton hamburger (affiché seulement sur petit écran) -->
    <button class="hamburger" @click="() => toggleMenu()" ref="navRef">
      ☰
    </button>

    <!-- Liens du menu -->
    <div class="nav-links" :class="{ open: menuOpen }">
      <router-link to="/" class="nav-item" @click="menuOpen = false">Accueil</router-link>
      <router-link to="/course" class="nav-item" @click="menuOpen = false">Parcours</router-link>
      <router-link to="/registration" class="nav-item" @click="menuOpen = false">Inscription</router-link>
      <router-link to="/results" class="nav-item" @click="menuOpen = false">Résultats</router-link>
      <router-link to="/contact" class="nav-item" @click="menuOpen = false">Contact</router-link>
    </div>
    
  </nav>
</template>
