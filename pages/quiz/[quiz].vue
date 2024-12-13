<script setup>
import { provide } from "vue";

const { params } = useRoute();
const data = await queryContent("quizs", params.quiz).findOne();

const quiz = useQuiz(data);
provide("quiz", quiz);
</script>

<template>
  <NuxtLayout name="header">
    <div class="w-full max-w-xl mx-auto my-10">
      <h1 class="text-2xl text-center font-bold mb-6">
        {{ quiz.quiz.title }}
      </h1>
      <QuizQuestion v-if="!quiz.isQuizCompleted.value" />
      <QuizResult v-else />
    </div>
  </NuxtLayout>
</template>
