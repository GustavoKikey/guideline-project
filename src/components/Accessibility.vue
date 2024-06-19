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
      <h1>Acessibilidade</h1>
      <p>
        Segundo a ISO/IEC 25010, acessibilidade pode ser definida como "o grau
        em que um produto ou sistema pode ser usado por pessoas que possuem
        diferentes recursos e capacidades para atingir um objetivo específico em
        um determinado contexto de uso''. Além disso, a norma define que esse
        requisito deve ser obedecido quando um produto ou sistema é usado por
        pessoas com deficiências específicas para atingir seus objetivos de
        forma
        <RouterLink to="introduction"
          ><a href="https://emag.governoeletronico.gov.br/"
            >eficaz</a
          ></RouterLink
        >
        e com
        <RouterLink to="introduction"
          ><a href="https://emag.governoeletronico.gov.br/"
            >eficiência</a
          ></RouterLink
        >.
      </p>

      <v-img
        :width="400"
        alt="Ilustração utilizada para exemplificar o conceito de acessibilidade. A imagem mostra 6 personagens em uma biblioteca. 
        Dois personagens estão à esquerda da imagem de frente para uma bancada de livros em que está escrito literatura infantil. Cada um está lendo um livro. 
        Os dois personagens são homens brancos e possuem cabelos pretos. Um está com uma blusa verde, um short preto e um sapato marrom e o outro está com uma blusa amarela, 
        um short marrom e sem sapatos. Os outros 4 personagens estão à direita da imagem em frente à outra bancada de livros em que está escrito livros em braille e logo abaixo, 
        audiolivros. Um personagem está apoiado na bancada e possui as seguintes características: homem branco, cabelo louro, utilizando blusa, calça e sapato azuis, 
        porém a calça possui um tom mais claro. A outra personagem é uma mulher e está de frente para esse homem fazendo um sinal de positivo, 
        representando a importância da biblioteca fornecer livros em braille e audiolivros. É um mulher branca, possui cabelo castanho com algumas mechas vermelhas e 
        está usando uma blusa amarela e short e sapatos rosas. A quinta personagem é uma mulher branca, cega, possui cabelo louro e está utilizando uma blusa branca. 
        Ela está sentada e sobre a mesa possui um livro em braille, que a personagem está lendo. Ao seu lado há um cachorro amarelo, que é o seu cão guia."
        src="../src/assets/maurc3adcio-de-sousa-5.jpg"
      ></v-img>
    </v-container>

    <v-row class="mt-0">
      <v-col cols="6" class="back">
        <RouterLink to="introduction"
          ><v-btn>Página anterior</v-btn></RouterLink
        >
      </v-col>
      <v-col cols="6" class="next">
        <RouterLink to="graphics"><v-btn>Próxima página</v-btn></RouterLink>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.v-container {
  margin-top: 0;
}
</style>
