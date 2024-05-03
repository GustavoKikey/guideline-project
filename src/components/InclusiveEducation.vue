<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <v-container>
      <h1>Ensino Inclusivo</h1>
      <p>
        A educação inclusiva busca adaptar o sistema educacional a fim de
        assegurar o acesso, permanência e condições de aprendizagem para todas
        as pessoas, sem preconceitos e de forma a valorizar as diferenças. Ela é
        importante para permitir que os estudantes, ainda que apresentem
        necessidades especiais, se desenvolvam no convívio de outros alunos de
        uma escola regular, tornando-se parte integrante da sociedade.
      </p>
      <p>
        Mas um dos grandes desafios do ensino inclusivo é ter materiais, espaços
        e profissionais capacitados e treinados para atender a uma demanda que
        exige diversidade e maior atenção no dia a dia. Dentro dessa política de
        inclusão escolar, se faz necessário ter tecnologias assistivas que
        facilitem a inclusão dos alunos e um projeto político-pedagógico
        inclusivo, que inclua espaços acolhedores de aprendizagem e planos de
        desenvolvimento individuais dos alunos.
      </p>
      <p>
        Por exemplo, a tabela a seguir, apresenta algumas tecnologias assistivas
        que podem ser utilizadas por alunos cegos, a descrição de cada uma
        dessas tecnologias e o como elas promovem a inclusão no ensino.
      </p>
      <v-table>
        <thead>
          <tr>
            <th><b>Tecnologias Assistivas</b></th>
            <th><b>Descrição</b></th>
            <th><b>Impacto no Ensino Inclusivo</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Softwares de Leitura</td>
            <td>Softwares que convertem texto em áudio</td>
            <td>
              Permitem que alunos com dificuldades visuais possam acessar o
              conteúdo de maneira auditiva
            </td>
          </tr>
          <tr>
            <td>Audiodescrição em Vídeos</td>
            <td>Adição de narração descritiva em vídeos</td>
            <td>
              Torna o conteúdo visual mais acessível para alunos com deficiência
              visual, permitindo que acompanhem o conteúdo
            </td>
          </tr>
          <tr>
            <td>Bússolas Táteis</td>
            <td>Bússolas que permitem a leitura tátil de mapas</td>
            <td>
              Facilitam o aprendizado de geografia para alunos com deficiência
              visual, permitindo que sintam os mapas e compreendam melhor a
              geografia
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
    <v-row class="mt-0">
      <v-col cols="6" class="back">
        <RouterLink to="accessibilitymodel"
          ><v-btn>Página anterior</v-btn></RouterLink
        >
      </v-col>
      <v-col cols="6" class="next">
        <RouterLink to="companyaccessibility"
          ><v-btn>Próxima página</v-btn></RouterLink
        >
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.v-table {
  border-color: black;
  border-style: solid;
}
</style>
