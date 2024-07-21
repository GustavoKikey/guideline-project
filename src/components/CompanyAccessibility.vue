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
        &nbsp;>&nbsp;
        <RouterLink to="accessibilitymodel">eMAG</RouterLink>
        &nbsp;>&nbsp;
        <RouterLink to="inclusiveeducation">Ensino Inclusivo</RouterLink>
      </v-col>
    </v-row>
    <v-container>
      <h1>Acessibilidade em empresas</h1>
      <p>
        Existem diversas entidades e grupos de pesquisa que estão preocupados
        com o desenvolvimento web acessível e que disponibilizam materiais e
        técnicas que podem auxiliar no entendimento e no desenvolvimento
        acessível. As grandes empresas costumam adotar manuais de boas práticas
        de desenvolvimento como forma de elevar a qualidade do produto final
        produzido. Dentre elas podemos citar:
      </p>
      <p>
        O Google disponibiliza recursos de acessibilidade para desenvolvedores
        Android por meio de um guia de acessibilidade com documentação sobre
        como projetar aplicativos móveis acessíveis a deficientes utilizando
        exemplos de implementação. O website organiza as soluções por
        componentes de uma página web, como botões, tela de fundo, caixa de
        seleção, lista de imagens e menus.
      </p>
      <p>
        Cada componente contém informação sobre onde pode ser aplicado, imagens
        representativas de seu design de forma detalhada, comportamentos
        adotados pelo componente após ações do usuário e personalizações de
        tamanho e cores. No entanto, toda solução fornecida no guia considera
        acessibilidade de maneira geral, ou seja, não possui foco ou distinção
        do tipo de deficiência que será atendida.
      </p>
      <p>
        A empresa Mozilla possui um conjunto de documentos chamados de MDN
        (Mozilla Developer Network) Web Docs - Accessibility, que abordam uma
        boa base sobre acessibilidade e discutem quais grupos de pessoas que
        precisam ser consideradas e o porquê, quais ferramentas as pessoas com
        deficiência usam para interagir com a web e como a acessibilidade faz
        parte do cotidiano dessas pessoas.
      </p>
      <v-table>
        <caption>
          Tabela Tipos de deficiência e taxa de
          participação no mercado de trabalho
        </caption>
        <thead>
          <tr>
            <th class="text-left">Deficiência</th>
            <th class="text-left">Participação no mercado de trabalho</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in disabilities" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.participation }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
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
  </div>
</template>

<style scoped>
.hidden {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.v-table {
  border-color: black;
  border-style: solid;
}
</style>

<script>
export default {
  data() {
    return {
      disabilities: [
        {
          name: "Visual",
          participation: "37%",
        },
        {
          name: "Auditiva",
          participation: "28%",
        },
        {
          name: "Física (membros superiores)",
          participation: "17.9%",
        },
        {
          name: "Física (membros inferiores)",
          participation: "16.9%",
        },
        {
          name: "Mental",
          participation: "5.3%",
        },
      ],
    };
  },
};
</script>
