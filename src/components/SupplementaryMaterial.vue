<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <v-container>
        <v-row class="mt-0 mb-2">
            <v-col cols="12" class="next">
                <RouterLink to="introduction">Página Inicial</RouterLink>
                &nbsp;&nbsp;
                <RouterLink to="accessibility">Acessibilidade</RouterLink>
                &nbsp;&nbsp;
                <RouterLink to="usability">Usabilidade</RouterLink>
                &nbsp;&nbsp;
                <RouterLink to="accessibilitymodel">eMAG</RouterLink>
                &nbsp;&nbsp;
                <RouterLink to="inclusiveeducation">Ensino Inclusivo</RouterLink>
                &nbsp;&nbsp;
                <RouterLink to="companyaccessibility">Empresas</RouterLink>
            </v-col>
        </v-row>
        <h1>Material Complementar</h1>
        <p>
        Caso queira conhecer mais sobre o eMAG, acesse o link a seguir:
        <a
          aria-describedby="descricao-link"
          href="https://emag.governoeletronico.gov.br/"
          >Modelo de Acessibilidade em Governo Eletrônico</a
        >
      </p>
      <v-row class="mt-0">
      <v-col cols="6" class="back">
        <RouterLink to="inclusiveeducation"
          ><v-btn>Página anterior</v-btn></RouterLink
        >
      </v-col>
      <v-col cols="6" class="next">
        <RouterLink to="form"><v-btn>Próxima página</v-btn></RouterLink>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}

.descricao-link {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
