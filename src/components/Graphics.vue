<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <v-row class="mt-0 mb-2">
      <v-col cols="12" class="next">
        <RouterLink to="introduction">Página Inicial</RouterLink>
      </v-col>
    </v-row>
    <v-container>
      <p>
        Embora a acessibilidade seja muito importante, ainda é necessário muito
        estudo sobre o tema e sensibilizar as pessoas. Por exemplo, o gráfico
        abaixo apresenta a diferença das pontuações entre pessoas que
        participaram de alguns seminários sobre acessibilidade em uma empresa e
        pessoas que não participaram.
      </p>
      <v-img
        :width="800"
        alt="Descrição do gráfico de barras: Este é um gráfico de barras horizontais. 
          Seu título é impacto do seminário sobre acessibilidade e inclusão. A legenda do eixo y é perguntas realizadas. 
          A legenda do eixo x é pontuação. Os valores das barras vermelhas, que representam a pontuação sem seminário,  
          variam entre 1,5 e 3,3. Os valores das barras azuis, que representam a pontuação com seminário,  variam entre 2,6 e 3,4. 
          A primeira barra é a pergunta conheço o significado de acessibilidade e inclusão, no geral e possui os valores 3,4 com seminário e 3,3 sem seminário. 
          A segunda barra é a pergunta conheço o que está sendo falado na minha área sobre acessibilidade e inclusão e possui os valores 2,9 com seminário e 1,9 sem seminário. 
          A terceira barra é a pergunta consigo identificar em quais processos da minha área existem oportunidades sobre acessibilidade e 
          inclusão e possui os valores 3,1 com seminário e 2,3 sem seminário. A quarta barra é a pergunta consigo promover mudanças 
          para tornar os processos da minha área mais acessíveis e inclusivos e possui os valores 2,9 com seminário e 2,2 sem seminário.  
          A quinta barra é a pergunta costumo ouvir a pauta de acessibilidade e inclusão nas reuniões da minha área e possui os valores 2,6 com seminário e 1,7 sem seminário. 
          A sexta barra é a pergunta Minha área já promoveu mudanças para melhorar a acessibilidade e inclusão e possui os valores 2,7 com seminário e 1,5 sem seminário."
        src="../src/assets/grafico_barra.png"
      ></v-img>
      <p>
        A acessibilidade também deve ser considerada no ambiente de trabalho.
        Dessa forma, o gráfico abaixo apresenta o quantitativo de pessoas por
        tipo de deficiência que trabalham na câmara dos deputados.
      </p>
      <v-img
        :width="600"
        alt="Descrição do gráfico de pizza: Este é um gráfico de setores ou gráfico de pizza. 
        Seu título é quantitativo de pessoas com deficiência que trabalham na câmara dos deputados. O valor da fatia azul, 
        que representa a deficiência física, é 44%. O valor da fatia verde, que representa a deficiência visual, é 27%. O valor da fatia amarela, 
        que representa a deficiência auditiva, é 21%. O valor da fatia laranja, que representa a deficiência intelectual, é 7%. O valor da fatia rosa, 
        que representa a deficiência múltipla, é 1%."
        src="../src/assets/grafico_pizza.png"
      ></v-img>
    </v-container>

    <v-row class="mt-0">
      <v-col cols="6" class="back">
        <RouterLink to="accessibility"
          ><v-btn>Página anterior</v-btn></RouterLink
        >
      </v-col>
      <v-col cols="6" class="next">
        <RouterLink to="usability"><v-btn>Próxima página</v-btn></RouterLink>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
