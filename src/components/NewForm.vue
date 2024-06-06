<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import ReviewOne from "@/components/ReviewOne.vue";
import ReviewTwo from "@/components/ReviewTwo.vue";
import ReviewThree from "@/components/ReviewThree.vue";
import ReviewFour from "@/components/ReviewFour.vue";
import ReviewFive from "@/components/ReviewFive.vue";
import ReviewSix from "@/components/ReviewSix.vue";

const selected = ref([]);
let showResult = ref(false);
let showReview = ref(false);
let allQuestionsAnswered = ref(false);
let questionNumber = ref(0);
const dialog = ref(false);
const confirmation = ref(false);

const openDialog = () => {
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
};

const openConfirmation = () => {
  confirmation.value = true;
};

const closeConfirmation = () => {
  confirmation.value = false;
};

function calculateScore(i) {
  let answer = selected.value[i];
  return answer;
}

function resetQuiz() {
  selected.value = [];
  showResult.value = false;
  showReview.value = false;
  questionNumber.value = 0;
}

function startQuiz() {
  questionNumber.value = 1;
  startIdleTimer();
}

function nextQuestion() {
  questionNumber.value++;
}

function previousQuestion() {
  questionNumber.value--;
}

function reviewQuestion(question) {
  questionNumber.value = question;
  showResult.value = false;
}

function checkAllQuestionsAnswered() {
  let allAnswered = true;
  for (let i = 0; i < 6; i++) {
    if (selected.value[i] === undefined) {
      allAnswered = false;
      break;
    }
  }
  allQuestionsAnswered.value = allAnswered;
}

function showResults() {
  checkAllQuestionsAnswered();
  if (!allQuestionsAnswered.value) {
    openConfirmation();
  } else {
    showResult.value = true;
    showReview.value = true;
    window.removeEventListener("mousemove", resetIdleTimer);
    window.removeEventListener("keydown", resetIdleTimer);
    clearTimeout(idleTimer);
  }
}

function continueConfirmation() {
  closeConfirmation();
  showResult.value = true;
  showReview.value = true;
  window.removeEventListener("mousemove", resetIdleTimer);
  window.removeEventListener("keydown", resetIdleTimer);
  clearTimeout(idleTimer);
}

const idleTime = ref(0);
const maxIdleTime = 30000;
const dialogVisible = ref(false);
let idleTimer;

const resetIdleTimer = () => {
  idleTime.value = 0;
  clearTimeout(idleTimer);
  startIdleTimer();
};

const startIdleTimer = () => {
  window.addEventListener("mousemove", resetIdleTimer);
  window.addEventListener("keydown", resetIdleTimer);
  idleTimer = setTimeout(() => {
    dialogVisible.value = true;
  }, maxIdleTime);
};
</script>

<template>
  <div class="container">
    <v-btn @click="openDialog" v-if="showReview == false && questionNumber == 0"
      >Configuração de atualização da página</v-btn
    >
    <v-dialog role="dialog" tabindex="-1" v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          Configuração de atualização da página
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          Atualização automática:
          <v-select
            label="Escolha uma opção"
            :items="['Ativado', 'Desativado']"
          ></v-select>
          <v-btn @click="closeDialog"> Salvar </v-btn>
          <v-btn @click="closeDialog"> Cancelar </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="confirmation" max-width="500px">
      <v-card>
        <v-card-title>
          Aviso
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          Você não respondeu todas as perguntas. Deseja continuar mesmo assim?
          <v-btn @click="closeConfirmation"> Voltar </v-btn>
          <v-btn @click="continueConfirmation"> Continuar </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogVisible" max-width="500px">
      <v-card>
        <v-card-title>
          Aviso de Inatividade
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          Você ainda está aí? Se não estiver, fecharemos esta sessão em 20
          segundos.
          <v-btn @click="dialogVisible = false" class="dialog-btn"
            >Continuar respondendo a questão</v-btn
          >
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-container v-if="showResult == false && questionNumber == 0">
      <h1>Questionário</h1>
      <p>
        Esse questionário contém 6 perguntas objetivas baseadas nos conteúdos
        apresentados anteriormente.
      </p>
      <p>Responda as questões a seguir com verdadeiro ou falso.</p>
      <v-btn @click="startQuiz" v-if="showReview == false"
        >Iniciar questionário</v-btn
      >
    </v-container>

    <v-container v-if="showResult == false && questionNumber == 1">
      <p class="hidden-description">Questão objetiva com uma única opção</p>
      <p>
        1. A acessibilidade não é considerada como uma sub-característica de
        usabilidade.
      </p>
      <v-row rows="12">
        <v-radio-group inline v-model="selected[0]" :disabled="showReview">
          <v-col cols="6">
            <v-radio label="Verdadeiro" :value="true"></v-radio>
          </v-col>
          <v-col cols="6">
            <v-radio label="Falso" :value="false"></v-radio>
          </v-col>
        </v-radio-group>
      </v-row>
      <v-container v-if="showReview == true" class="review">
        <ReviewOne />
        <v-btn @click="continueConfirmation"
          >Voltar para página de resultados</v-btn
        >
      </v-container>
      <v-btn @click="nextQuestion" v-if="showReview == false"
        >Próxima questão</v-btn
      >
    </v-container>
    <v-container v-if="showResult == false && questionNumber == 2">
      <p class="hidden-description">Questão objetiva com uma única opção</p>
      <p>
        2. O Modelo de Acessibilidade em Governo Eletônico (eMAG) apresenta
        recomendações que devem ser consideradas no desenvolvimento de conteúdos
        do governo brasileiro na web.
      </p>
      <v-row rows="12">
        <v-radio-group inline v-model="selected[1]" :disabled="showReview">
          <v-col cols="6">
            <v-radio label="Verdadeiro" :value="true"></v-radio>
          </v-col>
          <v-col cols="6">
            <v-radio label="Falso" :value="false"></v-radio>
          </v-col>
        </v-radio-group>
      </v-row>
      <v-container v-if="showReview == true" class="review">
        <ReviewTwo />
        <v-btn @click="continueConfirmation"
          >Voltar para página de resultados</v-btn
        >
      </v-container>
      <v-row class="mt-0" v-if="showReview == false">
        <v-col cols="6" class="back">
          <v-btn @click="previousQuestion">Questão anterior</v-btn>
        </v-col>
        <v-col cols="6" class="next">
          <v-btn @click="nextQuestion">Próxima questão</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="showResult == false && questionNumber == 3">
      <p class="hidden-description">Questão objetiva com uma única opção</p>
      <p>
        3. A Lei 10.146 institui a lei brasileira de inclusão da pessoa com
        deficiência.
      </p>
      <v-row rows="12">
        <v-radio-group inline v-model="selected[2]" :disabled="showReview">
          <v-col cols="6">
            <v-radio label="Verdadeiro" :value="true"></v-radio>
          </v-col>
          <v-col cols="6">
            <v-radio label="Falso" :value="false"></v-radio>
          </v-col>
        </v-radio-group>
      </v-row>
      <v-container v-if="showReview == true" class="review">
        <ReviewThree />
        <v-btn @click="continueConfirmation"
          >Voltar para página de resultados</v-btn
        >
      </v-container>
      <v-row class="mt-0" v-if="showReview == false">
        <v-col cols="6" class="back">
          <v-btn @click="previousQuestion">Questão anterior</v-btn>
        </v-col>
        <v-col cols="6" class="next">
          <v-btn @click="nextQuestion">Próxima questão</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="showResult == false && questionNumber == 4">
      <p class="hidden-description">Questão objetiva com uma única opção</p>
      <p>
        4. O Modelo de Acessibilidade em Governo Eletônico (eMAG) não exclui
        qualquer boa prática de acessibilidade do WCAG.
      </p>
      <v-row rows="12">
        <v-radio-group inline v-model="selected[3]" :disabled="showReview">
          <v-col cols="6">
            <v-radio label="Verdadeiro" :value="true"></v-radio>
          </v-col>
          <v-col cols="6">
            <v-radio label="Falso" :value="false"></v-radio>
          </v-col>
        </v-radio-group>
      </v-row>
      <v-container v-if="showReview == true" class="review">
        <ReviewFour />
        <v-btn @click="continueConfirmation"
          >Voltar para página de resultados</v-btn
        >
      </v-container>
      <v-row class="mt-0" v-if="showReview == false">
        <v-col cols="6" class="back">
          <v-btn @click="previousQuestion">Questão anterior</v-btn>
        </v-col>
        <v-col cols="6" class="next">
          <v-btn @click="nextQuestion">Próxima questão</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="showResult == false && questionNumber == 5">
      <p class="hidden-description">Questão objetiva com uma única opção</p>
      <p>
        5. Acessibilidade pode ser definida como o grau em que um sistema pode
        ser usado por pessoas que possuem diferentes recursos e capacidades para
        atingir um objetivo específico.
      </p>
      <v-row rows="12">
        <v-radio-group inline v-model="selected[4]" :disabled="showReview">
          <v-col cols="6">
            <v-radio label="Verdadeiro" :value="true"></v-radio>
          </v-col>
          <v-col cols="6">
            <v-radio label="Falso" :value="false"></v-radio>
          </v-col>
        </v-radio-group>
      </v-row>
      <v-container v-if="showReview == true" class="review">
        <ReviewFive />
        <v-btn @click="continueConfirmation"
          >Voltar para página de resultados</v-btn
        >
      </v-container>
      <v-row class="mt-0" v-if="showReview == false">
        <v-col cols="6" class="back">
          <v-btn @click="previousQuestion">Questão anterior</v-btn>
        </v-col>
        <v-col cols="6" class="next">
          <v-btn @click="nextQuestion">Próxima questão</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="showResult == false && questionNumber == 6">
      <p class="hidden-description">Questão objetiva com uma única opção</p>
      <p>
        6. A empresa Mozilla possui um conjunto de documentos chamado de
        <span lang="en"
          >MDN (Mozilla Developer Network) Web Docs - Accessibility</span
        >
        que discute quais ferramentas as pessoas com deficiência usam para
        interagir com a web e como a acessibilidade faz parte do cotidiano
        dessas pessoas.
      </p>
      <v-row rows="12">
        <v-radio-group inline v-model="selected[5]" :disabled="showReview">
          <v-col cols="6">
            <v-radio label="Verdadeiro" :value="true"></v-radio>
          </v-col>
          <v-col cols="6">
            <v-radio label="Falso" :value="false"></v-radio>
          </v-col>
        </v-radio-group>
      </v-row>
      <v-container v-if="showReview == true" class="review">
        <ReviewSix />
        <v-btn @click="continueConfirmation"
          >Voltar para página de resultados</v-btn
        >
      </v-container>
      <v-row class="mt-0" v-if="showReview == false">
        <v-col cols="6" class="back">
          <v-btn @click="previousQuestion">Questão anterior</v-btn>
        </v-col>
        <v-col cols="6" class="next">
          <v-btn @click="showResults">Enviar Respostas</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="showResult == false && questionNumber == 7">
      <p class="hidden-description">Questão objetiva com uma única opção</p>
      <p>
        7. Quais as maiores dificuldades que você encontra para entender imagens
        muito complexas ou com muitas informações?
      </p>
      <v-row rows="12"> </v-row>
      <v-container v-if="showReview == true" class="review">
        <ReviewSix />
        <v-btn @click="continueConfirmation"
          >Voltar para página de resultados</v-btn
        >
      </v-container>
      <v-row class="mt-0" v-if="showReview == false">
        <v-col cols="6" class="back">
          <v-btn @click="previousQuestion">Questão anterior</v-btn>
        </v-col>
        <v-col cols="6" class="next">
          <v-btn @click="showResults">Enviar Respostas</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col cols="12" class="mt-4"> </v-col>
    </v-row>
    <v-container v-if="showResult == true">
      <h1 class="quizresult">Resultado do Questionário</h1>
      <v-row>
        <p v-if="calculateScore(0) === false">
          <b>Questão 1</b> - Resposta Correta, parabéns!
        </p>
        <p v-else>
          <b>Questão 1</b> - Resposta Incorreta
          <v-btn @click="reviewQuestion(1)"
            >Acessar o conteúdo da questão</v-btn
          >
        </p>
      </v-row>
      <v-row>
        <p v-if="calculateScore(1) === true">
          <b>Questão 2</b> - Resposta Correta, parabéns!
        </p>
        <p v-else>
          <b>Questão 2</b> - Resposta Incorreta
          <v-btn @click="reviewQuestion(2)"
            >Acessar o conteúdo da questão</v-btn
          >
        </p>
      </v-row>
      <v-row>
        <p v-if="calculateScore(2) === false">
          <b>Questão 3</b> - Resposta Correta, parabéns!
        </p>
        <p v-else>
          <b>Questão 3</b> - Resposta Incorreta
          <v-btn @click="reviewQuestion(3)"
            >Acessar o conteúdo da questão</v-btn
          >
        </p>
      </v-row>
      <v-row>
        <p v-if="calculateScore(3) === true">
          <b>Questão 4</b> - Resposta Correta, parabéns!
        </p>
        <p v-else>
          <b>Questão 4</b> - Resposta Incorreta
          <v-btn @click="reviewQuestion(4)"
            >Acessar o conteúdo da questão</v-btn
          >
        </p>
      </v-row>
      <v-row>
        <p v-if="calculateScore(4) === true">
          <b>Questão 5</b> - Resposta Correta, parabéns!
        </p>
        <p v-else>
          <b>Questão 5</b> - Resposta Incorreta
          <v-btn @click="reviewQuestion(5)"
            >Acessar o conteúdo da questão</v-btn
          >
        </p>
      </v-row>
      <v-row>
        <p v-if="calculateScore(5) === true">
          <b>Questão 6</b> - Resposta Correta, parabéns!
        </p>
        <p v-else>
          <b>Questão 6</b> - Resposta Incorreta
          <v-btn @click="reviewQuestion(6)"
            >Acessar o conteúdo da questão</v-btn
          >
        </p>
      </v-row>
    </v-container>
    <v-row class="mt-0">
      <v-col
        v-if="!showResult && showReview == false && questionNumber == 0"
        cols="6"
        class="back"
      >
        <RouterLink to="companyaccessibility"
          ><v-btn>Página anterior</v-btn></RouterLink
        >
      </v-col>
      <v-col v-if="showResult" cols="6" class="back">
        <v-btn @click="resetQuiz">Tentar Novamente</v-btn>
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

.dialog-btn {
  margin-top: 20px;
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

.review {
  margin-top: 0px;
  margin-bottom: 20px;
}

.hidden-description {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
