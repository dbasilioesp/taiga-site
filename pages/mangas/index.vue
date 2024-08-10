<script setup></script>

<template>
  <div class="page py-9">
    <div class="cbase">
      <div>
        <NuxtLink to="/" class="font-medium">Home</NuxtLink> &gt;
        <NuxtLink to="/mangas" class="font-bold">Mangás</NuxtLink>
      </div>
      <h1 class="text-7xl orange font-bold mb-8">Mangás</h1>
      <div class="base-grid">
          <UIBookCard
            v-for="item in mangas"
            :key="item.nome"
            :title="item.nome"
            :author="item.autores"
            :image="item.imagem"
            :link="`/mangas/${item.slug}`"
          />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
