<script setup>
const props = defineProps({
  home: Boolean,
});

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
</script>

<template>
  <header class="header" :class="{ isHome: props.home }">
    <div class="header__wrap cbase">
      <NuxtLink to="/" class="header__logo">
        <img src="~/assets/images/logo-horizontal-com-borda.svg" alt="Logo" />
      </NuxtLink>
      <button
        type="button"
        @click="active = true"
        class="header__buttonnav white"
      >
        <IconMenu />
      </button>
      <nav class="header__nav" :class="{ active }" ref="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/livros">Livros</NuxtLink>
        <NuxtLink to="/mangas">Mangás</NuxtLink>
        <NuxtLink to="/rpgs">RPGs</NuxtLink>
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
  gap: 40px;
  align-items: center;
  justify-content: center;
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

.header__logo img {
  width: 180px;
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

.header__buttonnav,
.header__closenav {
  display: none;
}

@media (max-width: 800px) {
  .header__wrap {
    justify-content: space-between;
  }

  .header__nav {
    position: fixed;
    height: 100svh;
    width: 100%;
    z-index: 20;
    background-color: var(--purple);
    top: 0;
    right: 0;
    flex-direction: column;
    justify-content: center;
    translate: 100%;
    transition: translate 0.5s ease;
  }

  .header__nav.active {
    translate: 0;
  }

  .header__nav a {
    font-size: 40px;
  }

  .header__buttonnav {
    display: inline-block;
  }

  .header__closenav {
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
</style>
