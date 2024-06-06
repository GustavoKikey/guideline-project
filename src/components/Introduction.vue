<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <v-container>
      <p>
        O texto apresentará cinco temas: acessibilidade, usabilidade, leis
        relacionadas com a acessibilidade, ensino inclusivo e acessibilidade em
        empresas.
      </p>
      <v-img :width="100" src="../src/assets/glossário.png"></v-img>
      <RouterLink to="accessibility"
        ><v-btn>Pular glossário e ir para o conteúdo</v-btn></RouterLink
      >
      <h2>Glossário:</h2>
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
      <RouterLink to="accessibility"><v-btn>Próxima página</v-btn></RouterLink>
    </v-container>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
