<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <v-container>
      <h1>Obrigado por participar</h1>
      <p>
        Clique em um dos botões abaixo para acessar o formulário de feedback e
        nos conte sua experiência com o conteúdo.
      </p>
      <v-row rows="12">
        <v-col cols="6">
          <v-btn
            href="https://docs.google.com/forms/d/e/1FAIpQLSeLFNeYPtAsJM2fMXRjI_Bu2BD4g-STLfGXm3zXK6p4xL7O7Q/viewform"
            >Formulário para Estudantes</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-btn
            href="https://docs.google.com/forms/d/e/1FAIpQLSf32hfikFdNNZnUsWpmsAHsFXC1IkZbRaY1a8iSKIC9nkGcLg/viewform"
            >Formulário para Pedagogos</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
