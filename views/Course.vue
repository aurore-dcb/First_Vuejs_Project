<template>

  <div class="pages-container">
    <div ref="stravaContainer" class="wrapper">
      <div class="strava-embed-placeholder" 
        data-embed-type="route" 
        data-embed-id="3124334546705320154" 
        data-units="metric" 
        data-full-width="true" 
        data-style="light" 
        data-terrain="2d" 
        data-map-hash="10.31/43.4821/3.692" 
        data-from-embed="true">
      </div>
    </div>

    <div class="course-right">
    
      <div class="features">
        <p>Parcours roulant</p>
        <p>Une médaille à la clef !</p>
      </div>

      <div class="upload">
        <a href="20-km-de-paris.gpx" download> Télécharge le gpx ></a>
      </div>

    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";

  const stravaContainer = ref(null);

  onMounted(() => {
    // Créer dynamiquement le script
    const script = document.createElement("script");
    script.src = "https://strava-embeds.com/embed.js";
    script.async = true;

    // Ajouter le script après le div
    stravaContainer.value.appendChild(script);
  });
</script>


