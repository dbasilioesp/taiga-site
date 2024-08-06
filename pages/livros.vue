<template>
  <div class="page">
    <h1>Livros</h1>

    <div v-for="book in books" :key="book.Nome">
      <div>{{ book.Nome }}</div>
      <div>{{ book.Autores }}</div>
    </div>
  </div>
</template>
