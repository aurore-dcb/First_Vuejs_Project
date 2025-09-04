<script setup>
import { ref } from "vue"

import { reactive } from "vue"

// Données du formulaire
const form = reactive({
  nom: "",
  prenom: "",
  age: "",
  genre: "",
  email: "",
  categorie: "",
  dossard: ""
})

// Fonction d'inscription
function submitForm() {
  console.log("Formulaire soumis :", form.value)

  alert(`Inscription de ${form.prenom} ${form.nom} réussie !`)
  
  // Réinitialiser le formulaire
  form.value = {
    nom: "", 
    prenom: "", 
    age: "",
    genre: "",
    email: "", 
    categorie: "", 
    dossard: "" 
  }
}
</script>

<template>
  <div class="inscription-modal">
    <div class="inscription-left">
      <h1>Inscription</h1>
      <p>Remplissez le formulaire suivant pour vous inscrire à la course</p>
    </div>

    <form @submit.prevent="submitForm" class="inscription-form">

      <div class="form-fields">

        <div class="field-label">
          <label for="nom">Nom</label>
          <label for="prenom">Prénom</label>
          <label for="age">Âge</label>
          <label for="genre">Genre</label>
          <label for="email">Email</label>
          <label for="sas">Sas</label>
        </div>

        <div class="field-input">
          <input type="text" id="nom" v-model="form.nom" required />
          <input type="text" id="prenom" v-model="form.prenom" required />
          <input type="number" id="age" v-model="form.age" min="5" required />
          <div class="gender-choices">
            <div>
              <input class="gender-bullet" type="radio" id="femme" value="F" v-model="form.genre" />
              <label for="femme">♀</label>
            </div>
            <div>
              <input class="gender-bullet" type="radio" id="homme" value="M" v-model="form.genre" />
              <label for="homme">♂</label>
            </div>
            <div>
              <input class="gender-bullet" type="radio" id="autre" value="Autre" v-model="form.genre" />
              <label for="autre">⚧</label>
            </div>
          </div>
          <input type="email" id="email" v-model="form.email" required />
          <div class="field">
            <select id="sas" v-model="form.sas" required>
              <option disabled value="">-- Choisissez un sas de départ --</option>
              <option value="+1h10">+1h10</option>
              <option value="-1h10">-1h10</option>
              <option value="-1h00">-1h00</option>
              <option value="-0h55">-0h55</option>
              <option value="-0h50">-0h50</option>
              <option value="-0h45">-0h45</option>
            </select>
          </div>
        </div>
      </div>

      <button type="submit" class="inscription-submit">></button>
    </form>
  </div>
</template>