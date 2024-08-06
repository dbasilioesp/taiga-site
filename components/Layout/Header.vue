<script setup>
const props = defineProps({
  home: Boolean,
});
</script>

<template>
  <header class="header" :class="{ isHome: props.home }">
    <div class="header__wrap cbase">
      <a href="/" class="header__logo">
        <img src="~/assets/images/logo.png" alt="Logo" />
      </a>
      <nav class="header__nav">
        <NuxtLink to="/livros">Livros</NuxtLink>
        <NuxtLink to="/mangás">Mangás</NuxtLink>
        <NuxtLink to="/rpgs">RPGs</NuxtLink>
        <NuxtLink to="/eventos">Eventos</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/contato">Contato</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style>
.header {
  width: 100%;
  height: var(--headerHeight);
  background-color: var(--darkgrey);
}

.header.isHome {
  position: absolute;
  top: 0;
  background-color: rgba(33, 33, 33, 0.3);
}

.header__wrap {
  display: flex;
  gap: 80px;
  align-items: center;
  height: 100%;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.header__nav a {
  position: relative;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  color: var(--yellow);
  text-decoration: none;
  transition: all 0.4s;
  text-shadow: var(--shadowText);
}
.header__nav a:hover {
  color: var(--orange);
}

.header__nav a:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 1px;
  height: 2px;
  width: 0;
  border-radius: 4px;
  background-color: var(--orange);
  transition: width 0.3s ease-out;
}

.header__nav a:hover:before {
  width: 100%;
}
</style>
