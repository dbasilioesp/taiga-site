<script setup>
const route = useRoute();
const active = ref(false);
const nav = ref();

onMounted(() => {
  if (nav.value) {
    const links = nav.value.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => (active.value = false));
    });
  }
});

function checkActiveLink(prefix) {
  return route.path.indexOf(prefix) == 1;
}
</script>

<template>
  <header class="header">
    <div class="header__wrap cbase">
      <NuxtLink to="/" class="header__logo">
        <img src="~/assets/images/logos/logo-horizontal.png" alt="Logo" />
      </NuxtLink>
      <button type="button" @click="active = true" class="header__buttonnav">
        <IconMenu />
      </button>
      <nav class="header__nav" :class="{ active }" ref="nav">
        <NuxtLink to="/" :class="{ isActive: route.path == '/' }"
          >Início</NuxtLink
        >
        <NuxtLink
          to="/catalogo"
          :class="{ isActive: checkActiveLink('catalogo') }"
          >Livros</NuxtLink
        >
        <NuxtLink
          to="/clube-taiga"
          :class="{ isActive: checkActiveLink('clube-taiga') }"
          >Clube</NuxtLink
        >
        <NuxtLink to="/blog" :class="{ isActive: checkActiveLink('blog') }"
          >Blog</NuxtLink
        >
        <button
          type="button"
          @click="active = false"
          class="header__closenav white"
        >
          <IconClose />
        </button>
      </nav>
    </div>
  </header>
</template>

<style src="./header.css"></style>
