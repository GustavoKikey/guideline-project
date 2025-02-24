<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <v-container>
      <h1>Conceitos básicos sobre acessibilidade</h1>
      <p>
        O texto apresentará cinco temas: 
        <RouterLink to="accessibility">Acessibilidade, </RouterLink>
        <RouterLink to="usability">Usabilidade, </RouterLink>
        <RouterLink to="usability">Legislação, </RouterLink>
        <RouterLink to="accessibilitymodel">Modelo de Acessibilidade em Governo Eletrônico, </RouterLink>
        <RouterLink to="inclusiveeducation">Ensino Inclusivo, </RouterLink>
        <RouterLink to="companyaccessibility"> e Acessibilidade em empresas.</RouterLink>
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
