<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <v-container>
      <h1>Conceitos básicos sobre acessibilidade</h1>
      <p>
        O texto apresentará cinco temas: 
        <RouterLink to="accessibility">acessibilidade, </RouterLink>
        <RouterLink to="usability">usabilidade, </RouterLink>
        <RouterLink to="accessibilitymodel">usabilidade, leis
          relacionadas com a acessibilidade, </RouterLink>
        <RouterLink to="inclusiveeducation">ensino inclusivo, </RouterLink>
        <RouterLink to="companyaccessibility"> e acessibilidade em empresas.</RouterLink>
      </p>

      <RouterLink to="accessibility"><v-btn>Próxima página</v-btn></RouterLink>
    </v-container>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
