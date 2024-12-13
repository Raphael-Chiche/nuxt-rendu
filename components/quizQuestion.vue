<script setup>
const quiz = inject('quiz');
</script>

<template>
  <div class="my-5">
    <h2 class="text-xl text-center mb-4">{{ quiz.quiz.content[quiz.currentQuestionIndex.value].question }}</h2>
    <p class="text-center mb-4">Question {{ quiz.currentQuestionIndex.value + 1 }}/{{ quiz.quiz.content.length }}</p>
<ul class="flex flex-col gap-4 items-center">
      <li
        v-for="(choice, idx) in quiz.quiz.content[quiz.currentQuestionIndex.value].choix"
        :key="idx"
      >
        <button
          @click="quiz.selectAnswer(choice)"
          class="bg-red-500 min-w-72 text-white p-4 rounded hover:bg-red-600 transition-colors duration-300 text-xl"
        >
          {{ choice }}
        </button>
      </li>
    </ul>
  </div>
</template>