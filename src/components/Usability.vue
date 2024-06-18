<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <v-row class="mt-0">
      <v-col cols="6" class="back"> </v-col>
      <v-col cols="6" class="next">
        <RouterLink to="lawinformation">Ajuda</RouterLink>
      </v-col>
    </v-row>
    <v-row class="mt-0 mb-2">
      <v-col cols="6" class="back"> </v-col>
      <v-col cols="6" class="next">
        <RouterLink to="/">Página Inicial</RouterLink>
        &nbsp;>&nbsp;
        <RouterLink to="accessibility">Acessibilidade</RouterLink>
      </v-col>
    </v-row>
    <v-container>
      <h1>Usabilidade</h1>
      <p>
        A acessibilidade é considerada uma sub-característica de Usabilidade,
        portanto, estes dois conceitos estão diretamente relacionados. De acordo
        com Sarodnick et al., a primeira definição formal de usabilidade foi
        proposta por Shackel, que descreveu a usabilidade de um produto como "a
        capacidade de ser usado por humanos com facilidade e eficácia".
      </p>
      <h1>Legislação</h1>
      <p>
        A Lei 13.146 estabelece a Lei Brasileira de Inclusão da Pessoa com
        Deficiência (Estatuto da Pessoa com Deficiência) e tem como objetivo
        "assegurar e promover, em condições de igualdade, o exercício dos
        direitos e das liberdades fundamentais por pessoa com deficiência,
        visando à sua inclusão social e cidadania".
      </p>
      <p>
        Portanto, a Lei Brasileira de Inclusão da Pessoa com Deficiência garante
        à pessoa com deficiência acesso a produtos, recursos, estratégias,
        práticas, processos, métodos e serviços de tecnologia assistiva que
        maximizem sua autonomia, mobilidade pessoal e qualidade de vida.
      </p>
    </v-container>
    <v-row class="mt-0">
      <v-col cols="6" class="back">
        <RouterLink to="graphics"><v-btn>Página anterior</v-btn></RouterLink>
      </v-col>
      <v-col cols="6" class="next">
        <RouterLink to="accessibilitymodel"
          ><v-btn>Próxima página</v-btn></RouterLink
        >
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.v-container {
  margin-top: 0;
}
</style>
