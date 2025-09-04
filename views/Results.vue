<script setup>
  import { ref } from "vue"

  const participants = ref([
    { nom: "Aurore", dossard: 1, categorie: "ESP F", temps: "-", classement: "-" },
    { nom: "Mathis", dossard: 2, categorie: "ESP M", temps: "-", classement: "-" }
  ])
</script>

<template>
  <h1>Results Page</h1>
  <p>Aucun résultats disponibles pour le moment</p>

  <p v-if="participants.length === 0">Aucun résultats disponibles pour le moment</p>
  <table>
    <thead>
      <tr>
        <th scope="col">Nom</th>
        <th scope="col">N˚</th>
        <th scope="col">Catégorie</th>
        <th scope="col">Temps</th>
        <th scope="col">Classement</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(participant, index) in participants" :key="index">
        <td>{{ participant.nom }}</td>
        <td>{{ participant.dossard }}</td>
        <td>{{ participant.categorie }}</td>
        <td>{{ participant.temps }}</td>
        <td>{{ participant.classement }}</td>
      </tr>
    </tbody>
  </table>
</template>
