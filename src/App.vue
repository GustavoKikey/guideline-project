<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <!-- Essa tag possibilita que o leitor de telas consiga 
    identificar que a página é para ser lida em PT-BR 
  https://asesweb.governoeletronico.gov.br/
  AChecker-->
  <html lang="pt-br">
    <RouterView />
  </html>
</template>

<style>
html {
  background-color: #fbf7f5;
}

.v-container {
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  margin: 20px;
  font-size: 18px;
}

.next {
  display: flex;
  justify-content: end;
}

.back {
  display: flex;
  justify-content: start;
}

.v-img {
  margin: 20px;
}

.container {
  margin: 100px;
}
</style>
