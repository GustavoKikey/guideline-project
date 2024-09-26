<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <v-container>
      <h1>Glossário:</h1>
      <p>
        Eficácia é o que cumpre perfeitamente determinada tarefa ou função,
        atingindo o objetivo proposto. A eficácia está diretamente ligada ao
        resultado.
      </p>
      <p>
        Eficiente é o que executa uma tarefa com qualidade, competência,
        excelência, com nenhum ou com o mínimo de erros. A eficiência está
        ligada ao modo de fazer uma tarefa.
      </p>
      <RouterLink to="accessibility"><v-btn>Voltar</v-btn></RouterLink>
    </v-container>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
