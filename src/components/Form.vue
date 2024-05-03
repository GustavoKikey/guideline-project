<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const selected = ref([]);

function calculateScore(i) {
  let answer = selected.value[i];
  return answer;
}

function resetQuiz() {
  selected.value = [];
  showResult.value = false;
}

let showResult = ref(false);

function showResults() {
  showResult.value = true;
}
</script>

<template>
  <div class="container">
    <v-container v-if="showResult == false">
      <h1>Questionário</h1>
      <p>Responda as questões abaixo com verdadeiro ou falso.</p>
      <p>
        1. A acessibilidade não é considerada como uma sub-característica de
        usabilidade.
      </p>
      <v-row rows="12">
        <v-radio-group inline v-model="selected[0]">
          <v-col cols="6">
            <v-radio label="Verdadeiro" :value="true"></v-radio>
          </v-col>
          <v-col cols="6">
            <v-radio label="Falso" :value="false"></v-radio>
          </v-col>
        </v-radio-group>
      </v-row>
      <p>
        2. O Modelo de Acessibilidade em Governo Eletônico (eMAG) apresenta
        recomendações que devem ser consideradas no desenvolvimento de conteúdos
        do governo brasileiro na web.
      </p>
      <v-row rows="12">
        <v-radio-group inline v-model="selected[1]">
          <v-col cols="6">
            <v-radio label="Verdadeiro" :value="true"></v-radio>
          </v-col>
          <v-col cols="6">
            <v-radio label="Falso" :value="false"></v-radio>
          </v-col>
        </v-radio-group>
      </v-row>
      <p>
        3. A Lei 10.146 institui a lei brasileira de inclusão da pessoa com
        deficiência.
      </p>
      <v-row rows="12">
        <v-radio-group inline v-model="selected[2]">
          <v-col cols="6">
            <v-radio label="Verdadeiro" :value="true"></v-radio>
          </v-col>
          <v-col cols="6">
            <v-radio label="Falso" :value="false"></v-radio>
          </v-col>
        </v-radio-group>
      </v-row>
      <p>
        4. O Modelo de Acessibilidade em Governo Eletônico (eMAG) não exclui
        qualquer boa prática de acessibilidade do WCAG.
      </p>
      <v-row rows="12">
        <v-radio-group inline v-model="selected[3]">
          <v-col cols="6">
            <v-radio label="Verdadeiro" :value="true"></v-radio>
          </v-col>
          <v-col cols="6">
            <v-radio label="Falso" :value="false"></v-radio>
          </v-col>
        </v-radio-group>
      </v-row>
      <p>
        5. Acessibilidade pode ser definida como o grau em que um sistema pode
        ser usado por pessoas que possuem diferentes recursos e capacidades para
        atingir um objetivo específico.
      </p>
      <v-row rows="12">
        <v-radio-group inline v-model="selected[4]">
          <v-col cols="6">
            <v-radio label="Verdadeiro" :value="true"></v-radio>
          </v-col>
          <v-col cols="6">
            <v-radio label="Falso" :value="false"></v-radio>
          </v-col>
        </v-radio-group>
      </v-row>
      <p>
        6. A empresa Mozilla possui um conjunto de documentos chamado de MDN
        (Mozilla Developer Network) Web Docs - Accessibility que discute quais
        ferramentas as pessoas com deficiência usam para interagir com a web e
        como a acessibilidade faz parte do cotidiano dessas pessoas.
      </p>
      <v-row rows="12">
        <v-radio-group inline v-model="selected[5]">
          <v-col cols="6">
            <v-radio label="Verdadeiro" :value="true"></v-radio>
          </v-col>
          <v-col cols="6">
            <v-radio label="Falso" :value="false"></v-radio>
          </v-col>
        </v-radio-group>
      </v-row>

      <v-row>
        <v-col cols="12" class="mt-4"> </v-col>
      </v-row>
    </v-container>
    <v-container v-if="showResult == true">
      <h1 class="quizresult">Resultado do Questionário</h1>
      <v-row>
        <p v-if="calculateScore(0) === false">
          <b>Questão 1</b> - Resposta Correta, parabéns!
        </p>
        <p v-else>
          <b>Questão 1</b> - Resposta Incorreta
          <RouterLink to="review"
            ><v-btn class="wronganswer"
              >Acessar o conteúdo da questão</v-btn
            ></RouterLink
          >
        </p>
      </v-row>
      <v-row>
        <p v-if="calculateScore(1) === true">
          <b>Questão 2</b> - Resposta Correta, parabéns!
        </p>
        <p v-else>
          <b>Questão 2</b> - Resposta Incorreta
          <RouterLink to="review"
            ><v-btn class="wronganswer"
              >Acessar o conteúdo da questão</v-btn
            ></RouterLink
          >
        </p>
      </v-row>
      <v-row>
        <p v-if="calculateScore(2) === false">
          <b>Questão 3</b> - Resposta Correta, parabéns!
        </p>
        <p v-else>
          <b>Questão 3</b> - Resposta Incorreta
          <RouterLink to="review"
            ><v-btn class="wronganswer"
              >Acessar o conteúdo da questão</v-btn
            ></RouterLink
          >
        </p>
      </v-row>
      <v-row>
        <p v-if="calculateScore(3) === true">
          <b>Questão 4</b> - Resposta Correta, parabéns!
        </p>
        <p v-else>
          <b>Questão 4</b> - Resposta Incorreta
          <RouterLink to="review"
            ><v-btn class="wronganswer"
              >Acessar o conteúdo da questão</v-btn
            ></RouterLink
          >
        </p>
      </v-row>
      <v-row>
        <p v-if="calculateScore(4) === true">
          <b>Questão 5</b> - Resposta Correta, parabéns!
        </p>
        <p v-else>
          <b>Questão 5</b> - Resposta Incorreta
          <RouterLink to="review"
            ><v-btn class="wronganswer"
              >Acessar o conteúdo da questão</v-btn
            ></RouterLink
          >
        </p>
      </v-row>
      <v-row>
        <p v-if="calculateScore(5) === true">
          <b>Questão 6</b> - Resposta Correta, parabéns!
        </p>
        <p v-else>
          <b>Questão 6</b> - Resposta Incorreta
          <RouterLink to="review"
            ><v-btn class="wronganswer"
              >Acessar o conteúdo da questão</v-btn
            ></RouterLink
          >
        </p>
      </v-row>
    </v-container>
    <v-row class="mt-0">
      <v-col v-if="!showResult" cols="6" class="back">
        <RouterLink to="companyaccessibility"
          ><v-btn v-if="!showResult">Página anterior</v-btn></RouterLink
        >
      </v-col>
      <v-col v-if="showResult" cols="6" class="back">
        <v-btn @click="resetQuiz">Tentar Novamente</v-btn>
      </v-col>
      <v-col v-if="!showResult" cols="6" class="next">
        <v-btn @click="showResults">Enviar Respostas</v-btn>
      </v-col>
      <v-col v-if="showResult" cols="6" class="next">
        <RouterLink to="end"><v-btn>Próxima página</v-btn></RouterLink>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.v-radio {
  width: 200px;
}

.wronganswer {
  margin-left: 20px;
}

.v-radio {
  align-items: center;
  justify-content: center;
}

.quizresult {
  margin-bottom: 30px;
}
</style>
