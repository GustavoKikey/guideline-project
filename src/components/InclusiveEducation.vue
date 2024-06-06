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
        necessidades especiais, se desenvolvam no convívio de outros estudantes
        de uma escola regular, tornando-se parte integrante da sociedade.
      </p>
      <p>
        Mas um dos grandes desafios do ensino inclusivo é ter materiais, espaços
        e profissionais capacitados e treinados para atender a uma demanda que
        exige diversidade e maior atenção no dia a dia. Dentro dessa política de
        inclusão escolar, se faz necessário ter tecnologias assistivas que
        facilitem a inclusão dos estudantes e um projeto político-pedagógico
        inclusivo, que inclua espaços acolhedores de aprendizagem e planos de
        desenvolvimento individuais dos estudantes.
      </p>
      <p>
        Por exemplo, para que os estudantes cegos possam aprender as sobre as
        misturas de cores será necessário informar o conteúdo de cada célula da
        tabela. Além disso, o professor poderá fornecer uma representação da
        tabela utilizando texturas, ou seja, cada cor da tabela será simbolizada
        por uma textura. Dessa forma, o estudante perceberá o atrito e decifrará
        a cor associada aos níveis de cada atrito.
      </p>
      <v-table>
        <thead>
          <p class="hidden">Descrição da tabela: Tabela Mistura de cores</p>
          <tr>
            <th class="text-left">Cor 1</th>
            <th class="text-left">Operação</th>
            <th class="text-left">Cor 2</th>
            <th class="text-left">Resultado</th>
            <th class="text-left">Resultado Cor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="yellow">Amarelo</td>
            <td>+</td>
            <td class="red">Vermelho</td>
            <td>=</td>
            <td class="orange">Laranja</td>
          </tr>
          <tr>
            <td class="yellow">Amarelo</td>
            <td>+</td>
            <td class="blue">Azul</td>
            <td>=</td>
            <td class="green">Verde</td>
          </tr>
          <tr>
            <td class="red">Vermelho</td>
            <td>+</td>
            <td class="blue">Azul</td>
            <td>=</td>
            <td class="purple">Roxo</td>
          </tr>
        </tbody>
      </v-table>
      <p>
        A tabela a seguir, apresenta algumas tecnologias assistivas que podem
        ser utilizadas por estudantes cegos, a descrição de cada uma dessas
        tecnologias e o como elas promovem a inclusão no ensino.
      </p>
      <v-table>
        <thead>
          <p class="hidden">
            Descrição da tabela: Tabela Exemplos de tecnologias assistivas
            utilizadas por cegos
          </p>
          <tr>
            <th><b>Tecnologias Assistivas</b></th>
            <th><b>Descrição</b></th>
            <th><b>Impacto no Ensino Inclusivo</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p class="hidden">Tecnologias Assistivas</p>
              Softwares de Leitura
            </td>
            <td>
              <p class="hidden">Descrição</p>
              Softwares que convertem texto em áudio
            </td>
            <td>
              <p class="hidden">Impacto no Ensino Inclusivo</p>
              Permitem que estudantes com dificuldades visuais possam acessar o
              conteúdo de maneira auditiva
            </td>
          </tr>
          <tr>
            <td>
              <p class="hidden">Tecnologias Assistivas</p>
              Audiodescrição em Vídeos
            </td>
            <td>
              <p class="hidden">Descrição</p>
              Adição de narração descritiva em vídeos
            </td>
            <td>
              <p class="hidden">Impacto no Ensino Inclusivo</p>
              Torna o conteúdo visual mais acessível para estudantes com
              deficiência visual, permitindo que acompanhem o conteúdo
            </td>
          </tr>
          <tr>
            <td>
              <p class="hidden">Tecnologias Assistivas</p>
              Bússolas Táteis
            </td>
            <td>
              <p class="hidden">Descrição</p>
              Bússolas que permitem a leitura tátil de mapas
            </td>
            <td>
              <p class="hidden">Impacto no Ensino Inclusivo</p>
              Facilitam o aprendizado de geografia para estudantes com
              deficiência visual, permitindo que sintam os mapas e compreendam
              melhor a geografia
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

.yellow {
  background-color: yellow;
}

.orange {
  background-color: orange;
}

.red {
  background-color: rgb(255, 88, 88);
}

.blue {
  background-color: rgb(65, 116, 255);
}

.green {
  background-color: rgb(120, 255, 120);
}

.purple {
  background-color: rgb(190, 0, 190);
}
</style>
