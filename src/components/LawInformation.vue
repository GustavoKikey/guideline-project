<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <v-container>
      <p>Quer saber mais sobre a legislação? Acesse os links abaixo:</p>
      <p>
        <a
          aria-describedby="descricao-link"
          href="https://www.planalto.gov.br/ccivil_03/leis/l10098.htm"
          >https://www.planalto.gov.br/ccivil_03/leis/l10098.htm</a
        >
      </p>
      <p class="descricao-link">
        Descrição do link: Estabelece normals gerais e critérios básicos para a
        promoção da acessibilidade das pessoas portadoras de deficiência ou com
        mobilidade reduzida
      </p>
      <p>
        <a
          aria-describedby="descricao-link"
          href="https://www.planalto.gov.br/ccivil_03/_Ato2023-2026/2023/Decreto/D11793.htm#art8"
          >https://www.planalto.gov.br/ccivil_03/_Ato2023-2026/2023/Decreto/D11793.htm#art8</a
        >
      </p>
      <p class="descricao-link">
        Descrição do link: Decreto que institui o Plano Nacional dos Direitos da
        Pessoa com Deficiência - Novo Viver sem Limite
      </p>
      <RouterLink to="usability"
        ><v-btn>Voltar para a página</v-btn></RouterLink
      >
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
