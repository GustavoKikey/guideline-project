<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <v-container>
      <h1>Obrigado por participar</h1>
      <p>
        Clique no botão abaixo para acessar o formulário de feedback e nos conte
        sua experiência com o conteúdo.
      </p>
      <v-btn href="https://forms.gle/wzH8Cycbeed2LjAS7"
        >Acessar formulário</v-btn
      >
    </v-container>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
