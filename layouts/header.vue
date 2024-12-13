<template>
  <main class="bg-gray-100 min-h-screen">
    <header class="bg-red-500 text-white p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Quiz de Raphaël</h1>
        <NuxtLink to="/" class="text-white hover:text-gray-200 transition-colors duration-300">
          Retour à l'accueil
        </NuxtLink>
      </div>
    </header>
    <div class="container mx-auto p-6">
      <slot />
    </div>
  </main>
</template>