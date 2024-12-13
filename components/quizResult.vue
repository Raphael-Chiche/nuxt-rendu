<script setup>

const quiz = inject("quiz");
</script>

<template>
  <div class="text-center">
    <p class="text-xl font-bold mb-4">Quiz completed! Ton score est de {{ quiz.score.value }}/{{ quiz.quiz.content.length }}</p>
    <div class="flex items-center flex-col gap-5">
      <NuxtLink
        to="/"
        class="inline-block px-4 py-2 bg-blue-500 w-52 text-white rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Retour aux autres quiz
      </NuxtLink>
      <button
        @click="quiz.reset"
        class="inline-block px-4 py-2 bg-green-500 w-52 text-white rounded hover:bg-green-600 transition-colors duration-300"
      >
        Recommencer
      </button>
    </div>
  </div>
</template>