<script setup>
import { RouterLink, RouterView } from "vue-router"; // Importa componentes do Vue Router para navegação
import { ref, watch } from "vue"; // Importa ref para criar variáveis reativas e watch para observar mudanças
import ReviewOne from "@/components/ReviewOne.vue"; // Importa componentes de revisão para cada questão
import ReviewTwo from "@/components/ReviewTwo.vue";
import ReviewThree from "@/components/ReviewThree.vue";
import ReviewFour from "@/components/ReviewFour.vue";
import ReviewFive from "@/components/ReviewFive.vue";
import ReviewSix from "@/components/ReviewSix.vue";

// Variáveis Reativas
const selected = ref([]); // Array para armazenar as respostas selecionadas
let showResult = ref(false); // Controla a exibição da página de resultados
let showReview = ref(false); // Controla a exibição das revisões das questões
let allQuestionsAnswered = ref(false); // Indica se todas as questões foram respondidas
let questionNumber = ref(0); // Número da questão atual
let dialogNumber = ref(0); // Número do diálogo aberto (1 para configurações, 2 para confirmação)
let quiz = ref(false); // Indica se o questionário está em andamento
let showMenu = ref(true); // Controla a exibição do menu de navegação
const dialog = ref(false); // Controla a exibição do diálogo (modal)
let progressNumber = ref(0);

// Variáveis para controle do temporizador de inatividade e do diálogo de aviso
const idleTime = ref(0);
const maxIdleTime = 20000;
const dialogVisible = ref(false);
let idleTimer;

// Variáveis para controle de volume da música
const volume = ref(0.5); // Volume inicial da música (20%)
const audioPlayer = ref(null); // Referência para o elemento de áudio

// Funções para controlar o diálogo (modal)
const openDialog = () => {
  dialog.value = true;
  dialogNumber.value = 1; // Abre o diálogo de configurações
};

const closeDialog = () => {
  dialog.value = false;
  dialogNumber.value = 0; // Fecha o diálogo
};

const openConfirmation = () => {
  dialog.value = true;
  dialogNumber.value = 2; // Abre o diálogo de confirmação
};

// Calcula a pontuação para uma determinada questão
function calculateScore(i) {
  let answer = selected.value[i];
  return answer;
}

// Reinicia o questionário para o estado inicial
function resetQuiz() {
  selected.value = [];
  showResult.value = false;
  showReview.value = false;
  questionNumber.value = 0;
  progressNumber.value = 0;
  showMenu.value = true;
}

// Inicia o questionário
function startQuiz() {
  questionNumber.value = 1; // Vai para a primeira questão
  progressNumber.value = 0;
  quiz = true;
  startIdleTimer(); // Inicia o temporizador de inatividade
}

// Finaliza o questionário e exibe os resultados
function endQuiz() {
  quiz = false;
  showResult.value = true;
  showReview.value = true;
  window.removeEventListener("mousemove", resetIdleTimer); // Remove os ouvintes de eventos
  window.removeEventListener("keydown", resetIdleTimer);
  clearTimeout(idleTimer); // Limpa o temporizador
}
// Navegação entre as questões
function nextQuestion() {
  checkAllQuestionsAnswered();
  questionNumber.value++;
  showMenu.value = true;
}

function previousQuestion() {
  checkAllQuestionsAnswered();
  questionNumber.value--;
  showMenu.value = true;
}

// Função para exibir a revisão de uma questão específica
function reviewQuestion(question) {
  questionNumber.value = question;
  showResult.value = false;
  console.log(questionNumber.value);
}

// Verifica se todas as questões foram respondidas
function checkAllQuestionsAnswered() {
  let allAnswered = true;
  progressNumber.value = 0;
  for (let i = 0; i < 6; i++) {
    if (selected.value[i] === undefined) {
      // Verifica se a resposta da questão i está indefinida
      allAnswered = false;
    } else {
      progressNumber.value = progressNumber.value + 16.66;
    }
  }
  allQuestionsAnswered.value = allAnswered;
}

// Exibe os resultados se todas as questões foram respondidas, caso contrário, abre o diálogo de confirmação
function showResults() {
  checkAllQuestionsAnswered();
  if (!allQuestionsAnswered.value) {
    // Se nem todas as questões foram respondidas
    openConfirmation(); // Abre o diálogo de confirmação
  } else {
    endQuiz(); // Finaliza o questionário
  }
}

// Continua para os resultados após a confirmação no diálogo
function continueConfirmation() {
  closeDialog();
  endQuiz();
}

// Esconde o menu de navegação
function hiddenMenu() {
  showMenu.value = false;
}

// Aplica o volume padrão ao abrir o diálogo
watch(dialogVisible, (newVal) => {
  if (newVal && audioPlayer.value) {
    updateVolume();
  }
});

// Aplica o volume padrão quando o elemento de áudio estiver pronto
watch(audioPlayer, (newAudioPlayer) => {
  if (newAudioPlayer) {
    updateVolume();
  }
});
// Função para reiniciar o temporizador de inatividade
const resetIdleTimer = () => {
  idleTime.value = 0;
  clearTimeout(idleTimer);
  startIdleTimer();
};

// Função para iniciar o temporizador de inatividade
const startIdleTimer = () => {
  //window.addEventListener("mousemove", resetIdleTimer); // Adiciona ouvintes de evento para movimento do mouse e teclas
  //window.addEventListener("keydown", resetIdleTimer);
  idleTimer = setTimeout(() => {
    dialogVisible.value = true; // Exibe o diálogo se o usuário ficar inativo
    if (audioPlayer.value) {
      audioPlayer.value.play(); // Inicia a música de alerta
    }
  }, maxIdleTime);
};

// Funções para controle de volume
const increaseVolume = () => {
  if (volume.value < 1) {
    volume.value = Math.min(volume.value + 0.1, 1);
  }
  updateVolume();
};
const decreaseVolume = () => {
  if (volume.value > 0) {
    volume.value = Math.max(volume.value - 0.1, 0);
  }
  updateVolume();
};

const updateVolume = () => {
  // Função para atualizar o volume do elemento de áudio
  if (audioPlayer.value) {
    audioPlayer.value.volume = volume.value;
  }
};

// Função para obter as questões não respondidas
const getUnansweredQuestions = () => {
  let unansweredQuestions = [];
  for (let i = 0; i < 6; i++) {
    if (selected.value[i] === undefined) {
      unansweredQuestions.push(i + 1); // Adiciona o número da questão (index + 1) ao array
    }
  }
  return unansweredQuestions;
};

// Função para ir para uma questão específica
const goToQuestion = (question) => {
  questionNumber.value = question;
  showMenu.value = true;
  closeDialog();
};

const handleClick = (index) => {
  questionNumber.value = index + 1; // Define o questionNumber para o índice do item clicado + 1
  showMenu.value = true;
};

// Array com os títulos das questões (para o menu de navegação)
const items = ref([
  { title: "Questão 1" },
  { title: "Questão 2" },
  { title: "Questão 3" },
  { title: "Questão 4" },
  { title: "Questão 5" },
  { title: "Questão 6" },
]);

</script>

<template>
  <div class="container">
    <v-row v-if="questionNumber == 0">
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
        &nbsp;>&nbsp;
        <RouterLink to="companyaccessibility">Empresas</RouterLink>
      </v-col>
    </v-row>

    <v-row v-if="showResult == false && quiz">
      <v-col cols="12" class="next">
        <template v-for="n in questionNumber">
          <button
            @click="questionNumber = n"
            aria-label="Questão {{ n }}"
            :class="{ 'active-question': n === questionNumber }"
          >
            Questão {{ n }}
          </button>
          <span v-if="n < questionNumber">&nbsp;>&nbsp;</span>
        </template>
      </v-col>
    </v-row>

    <v-row v-if="showResult == false && dialog == false && quiz && showMenu">
      <v-col cols="12" class="back">
        <button @click="hiddenMenu()">Pular menu e ir para questão</button>
      </v-col>
    </v-row>

    <v-row class="mt-0 mb-2">
      <v-col cols="12" class="back">
        <v-menu
          v-if="
            dialog == false &&
            showResult == false &&
            showReview == false &&
            showMenu
          "
        >
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props"> Configurações </v-btn>
          </template>
          <v-list>
            <v-list-item @click="openDialog">
              Atualização de página
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu
          v-if="
            showResult == false &&
            questionNumber != 0 &&
            dialog == false &&
            showMenu
          "
        >
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props" class="ml-4">
              Menu de questões
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="item.title"
              @click="handleClick(index)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <div>
        <h4>Barra de Progresso</h4>
        <v-progress-linear
        v-model=progressNumber
        color="blue-grey"
        height="25"
      >
      <strong>{{ Math.ceil(progressNumber) }}%</strong>
      </v-progress-linear>
    </div>&nbsp;&nbsp;

    <v-container v-if="dialogNumber == 1 && dialog == true">
      <h2>Configuração de atualização da página</h2>
      <v-spacer></v-spacer>
      <p>Atualização automática:</p>
      <v-row rows="12">
        <v-col cols="12">
          <v-select
            label="Escolha uma opção"
            :items="['Ativado', 'Desativado']"
          ></v-select>
        </v-col>
      </v-row>
      <v-row rows="12">
        <v-col cols="6">
          <v-btn @click="closeDialog"> Salvar </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn @click="closeDialog"> Cancelar </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="dialogNumber == 2 && dialog == true">
      <p>Você não respondeu todas as questões. Deseja continuar mesmo assim?</p>
      <p>As seguintes questões não foram respondidas:</p>
      <ul>
        <li
          class="li"
          v-for="question in getUnansweredQuestions()"
          :key="question"
        >
          Questão {{ question }}
          <v-btn class="ml-5" @click="goToQuestion(question)"
            >Ir para questão</v-btn
          >
        </li>
      </ul>
      <v-row class="mt-0" v-if="showReview == false">
        <v-col cols="6" class="back">
          <v-btn @click="closeDialog">Voltar</v-btn>
        </v-col>
        <v-col cols="6" class="next">
          <v-btn @click="continueConfirmation">Continuar</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialogVisible" max-width="500px">
      <v-card>
        <v-card-title>Aviso de Inatividade</v-card-title>
        <v-card-text class="dialog-content">
          <p>
            Você ainda está aí? Se não estiver, fecharemos esta sessão em 20
            segundos.
          </p>
          <v-btn @click="dialogVisible = false" class="continue-button">
            Continuar respondendo a questão
          </v-btn>
          <div v-if="dialogVisible">
            <audio ref="audioPlayer" controls autoplay style="display: none">
              <source src="/src/assets/lofi.mp3" type="audio/mpeg" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <div v-if="dialogVisible" class="volume-controls">
              <button @click="decreaseVolume" aria-label="Diminuir volume">
                <v-icon>mdi-volume-minus</v-icon>
              </button>
              <span aria-hidden="true">{{ volume.toFixed(2) }}</span>
              <button @click="increaseVolume" aria-label="Aumentar volume">
                <v-icon>mdi-volume-plus</v-icon>
              </button>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-container
      v-if="showResult == false && questionNumber == 0 && dialog == false"
    >
      <h1>Questionário</h1>
      <p>
        Esse questionário contém 7 perguntas baseadas nos conteúdos
        apresentados anteriormente.
      </p>
      <v-btn @click="startQuiz" v-if="showReview == false"
        >Iniciar questionário</v-btn
      >
    </v-container>

    <v-container
      v-if="showResult == false && questionNumber == 1 && dialog == false"
    >
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
    <v-container
      v-if="showResult == false && questionNumber == 2 && dialog == false"
    >
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
    <v-container
      v-if="showResult == false && questionNumber == 3 && dialog == false"
    >
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
    <v-container
      v-if="showResult == false && questionNumber == 4 && dialog == false"
    >
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
    <v-container
      v-if="showResult == false && questionNumber == 5 && dialog == false"
    >
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
    <v-container
      v-if="showResult == false && questionNumber == 6 && dialog == false"
    >
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
          <v-btn @click="nextQuestion">Próxima questão</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      v-if="showResult == false && questionNumber == 7 && dialog == false"
    >
      <p class="hidden-description">
        Questão discursiva - Desenvolva uma resposta detalhada para a seguinte
        pergunta:
      </p>
      <p>
        7. Quais as maiores dificuldades que você encontra para entender imagens
        muito complexas ou com muitas informações?
      </p>
      <v-row class="mt-0" rows="12">
        <v-col cols="4" class="input-col">
          <input
            type="file"
            ref="audioInput"
            style="display: none"
            accept="audio/*"
          />
          <v-btn
            prepend-icon="mdi-microphone"
            color="indigo"
            @click="$refs.audioInput.click()"
          >
            Inserir áudio
          </v-btn>
        </v-col>
        <v-col cols="4" class="input-col">
          <input
            type="file"
            ref="videoInput"
            style="display: none"
            accept="video/*"
          />
          <v-btn
            prepend-icon="mdi-video"
            color="indigo"
            @click="$refs.videoInput.click()"
          >
            Inserir vídeo
          </v-btn>
        </v-col>
        <v-col cols="4" class="input-col">
          <input type="file" ref="textInput" style="display: none" />
          <v-btn
            prepend-icon="mdi-keyboard"
            color="indigo"
            @click="$refs.textInput.click()"
          >
            Inserir texto
          </v-btn>
        </v-col>
      </v-row>
      <v-container v-if="showReview == true" class="review">
        <ReviewSix />
        <v-btn @click="continueConfirmation"
          >Voltar para página de resultados</v-btn
        >
      </v-container>
      <v-row class="mt-5" v-if="showReview == false">
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
    <v-container v-if="showResult == true && dialog == false">
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
        v-if="
          !showResult && showReview == false && questionNumber == 0 && !dialog
        "
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
        <RouterLink to="video"><v-btn>Próxima página</v-btn></RouterLink>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.volume-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center; /* Centraliza horizontalmente */
  margin-top: 16px; /* Espaçamento superior */
}

.volume-controls button {
  background-color: #f0f0f0; /* Cor de fundo neutra */
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s; /* Efeito de transição suave */
}

.volume-controls button:hover {
  background-color: #e0e0e0; /* Cor de fundo mais escura ao passar o mouse */
}

.dialog-content {
  text-align: center; /* Centraliza o texto */
}

.continue-button {
  display: block; /* Torna o botão um elemento de bloco */
  margin: 16px auto; /* Centraliza horizontalmente e adiciona margem superior e inferior */
}

.volume-controls span {
  font-size: 14px;
}

.li {
  margin-bottom: 20px;
}

.v-select {
  width: 300px;
}

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
