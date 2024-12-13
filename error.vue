<template>
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 class="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
      <p class="text-lg text-gray-700 mb-2">Quiz introuvable</p>
      <p class="text-lg text-gray-700 mb-6">Déso.</p>
      <NuxtLink
        to="/"
        class="inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
      >
        Retour à l'accueil
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>