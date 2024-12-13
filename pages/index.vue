<script setup>
import { ref } from "vue";
const quizs = await queryContent("quizs").find();
</script>

<template>
  <NuxtLayout name="header">
    <div class="container mx-auto p-6">
      <h1 class="text-4xl font-bold text-center mb-8">Liste des Quiz</h1>
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="quiz in quizs"
          :key="quiz._path"
          class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h2 class="text-2xl font-semibold mb-2">{{ quiz.title }}</h2>
          <p class="text-gray-600 mb-4">{{ quiz.description }}</p>
          <p class="text-gray-600 mb-4">Nombre de questions : {{ quiz.content.length }}</p>
          <NuxtLink
            :to="`/quiz/${quiz._path.split('/').pop()}`"
            class="inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
          >
            Commencer le quiz
          </NuxtLink>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>