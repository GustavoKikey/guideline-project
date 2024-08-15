<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const radios = ref();
const router = useRouter();

const navigate = () => {
  if (radios.value === "one") {
    router.push("/introduction");
  } else if (radios.value === "two") {
    router.push("/form");
  }
};
</script>

<template>
  <div class="container">
    <v-container>
      <h1>Curso sobre conceitos básicos de acessibilidade</h1>
      <p>Em qual ponto você deseja iniciar o curso? Selecione dentre as duas opções abaixo.</p>
      <v-radio-group v-model="radios">
        <v-radio label="Conteúdo" value="one"></v-radio>
        <v-radio label="Questionário" value="two"></v-radio>
      </v-radio-group>
      <v-btn @click="navigate">Iniciar Curso</v-btn>
    </v-container>
  </div>
</template>

<style scoped></style>
