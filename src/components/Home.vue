<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const radios = ref();
const router = useRouter();

</script>

<template>
  <div class="container">
    <v-container>
      <h1>Curso sobre conceitos básicos de acessibilidade</h1>
      &nbsp;&nbsp;
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <RouterLink to="Introduction"><v-btn>Iniciar curso</v-btn></RouterLink>
          </v-col>

        </v-row>
    </v-container>
  </div>
</template>

<style scoped></style>
