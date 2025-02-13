<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const radios = ref();
const router = useRouter();

</script>

<template>
  <div class="container">
    <v-container>
      <h1>Curso sobre conceitos básicos de acessibilidade</h1>
      <p>Em qual ponto você deseja iniciar o curso? Selecione dentre as duas opções abaixo.</p>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <RouterLink to="Introduction"><v-btn>Conteúdo</v-btn></RouterLink>
          </v-col>

          <v-col cols="auto">
            <RouterLink to="Form"><v-btn>Questionário</v-btn></RouterLink>
          </v-col>

        </v-row>
    </v-container>
  </div>
</template>

<style scoped></style>
