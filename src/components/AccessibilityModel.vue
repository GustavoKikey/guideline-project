<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <v-row class="mt-0 mb-2">
      <v-col cols="12" class="next">
        <RouterLink to="introduction">Página Inicial</RouterLink>
        &nbsp;>&nbsp;
        <RouterLink to="accessibility">Acessibilidade</RouterLink>
        &nbsp;>&nbsp;
        <RouterLink to="usability">Usabilidade</RouterLink>
      </v-col>
    </v-row>
    <v-container>
      <h1>Modelo de Acessibilidade em Governo Eletrônico</h1>
      <p>
        O Modelo de Acessibilidade em Governo Eletrônico (eMAG) é composto por
        um conjunto de recomendações que devem ser consideradas no
        desenvolvimento e adaptação de conteúdos do governo brasileiro na web.
      </p>
      <v-img
        :width="400"
        alt="Ilustração para representar a construção de um site acessível. O primeiro plano apresenta uma pessoa construindo um site. 
        O segundo plano da ilustração mostra um quadro com as tarefas que essa pessoa deverá realizar para criar o site, as tarefas que ela está realizando e 
        as tarefas que ela já finalizou"
        src="../src/assets/imagem_segundo_plano.png"
      ></v-img>
      <p>
        O Modelo de Acessibilidade em Governo Eletrônico tem o compromisso de
        ser o "norteador no desenvolvimento e a adaptação de conteúdos digitais
        do governo federal, garantindo o acesso a todos''. As recomendações do
        eMAG permitem que a implementação da acessibilidade digital seja
        conduzida de forma padronizada, de fácil implementação, coerente com as
        necessidades brasileiras e em conformidade com os padrões
        internacionais. É importante ressaltar que o eMAG trata de uma versão
        especializada do documento internacional WCAG voltado para o governo
        brasileiro, porém o eMAG não exclui qualquer boa prática de
        acessibilidade do WCAG.
      </p>
      <p>
        Caso queira conhecer mais sobre o eMAG, acesse o link a seguir:
        <a
          aria-describedby="descricao-link"
          href="https://emag.governoeletronico.gov.br/"
          >https://emag.governoeletronico.gov.br/</a
        >
      </p>
      <p class="descricao-link">
        O conteúdo do link anterior aborda o processo para desenvolver um site
        acessível, recomendações de acessibilidade e práticas desaconselhadas"
      </p>
    </v-container>
    <v-row class="mt-0">
      <v-col cols="6" class="back">
        <RouterLink to="usability"><v-btn>Página anterior</v-btn></RouterLink>
      </v-col>
      <v-col cols="6" class="next">
        <RouterLink to="inclusiveeducation"
          ><v-btn>Próxima página</v-btn></RouterLink
        >
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.descricao-link {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
