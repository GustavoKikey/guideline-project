<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <center><v-container>
      <h1>Obrigado por participar</h1>
      <p>
        Clique em um dos botões abaixo para acessar o formulário de feedback e
        nos conte sua experiência com o conteúdo.
      </p>
      <center><v-row rows="12">
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
      </v-row></center>
    </v-container></center>

    <v-row class="mt-0">
      <v-col cols="6" class="back">
        <RouterLink to="video"
          ><v-btn>Página anterior</v-btn></RouterLink
        >
      </v-col>
    </v-row>
    
  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
