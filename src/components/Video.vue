<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <center><v-container>
      <h1>Vídeo com audiodescrição</h1>

      <p> Este vídeo viralizou na internet pela sua delicadeza e simplicidade. Uma boa reflexão sobre ações e recursos, sobre afeto e criatividade, que podem transformar a escola em um lugar que acolhe e ensina a todos os alunos. </p>
      
      <center><v-row rows="12">
        <video width="520" alt="Vídeo reflexivo sobre educação inclusiva com audiodescrição." controls>
            <source src="../assets/video.mp4" type="video/mp4">
            Your browser does not support the video tag
        </video>
      </v-row></center>
    </v-container></center>

    <v-row class="mt-0">
      <v-col cols="6" class="back">
        <RouterLink to="form"
          ><v-btn>Página anterior</v-btn></RouterLink
        >
      </v-col>
      <v-col cols="6" class="next">
        <RouterLink to="end"
          ><v-btn>Próxima página</v-btn></RouterLink
        >
      </v-col>
    </v-row>

  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
}

h1 {
  margin-bottom: 20px;
}

video{
  padding: 20px;
}

</style>