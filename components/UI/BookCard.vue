<script setup>
const props = defineProps({
  title: String,
  author: String,
  image: String,
  light: Boolean,
  link: String,
});
</script>

<template>
  <NuxtLink class="card" :class="{ light }" :to="props.link">
    <img class="card__image" :src="props.image" alt="" />
    <h2 class="card__title">{{ props.title }}</h2>
    <span class="card__author font-semibold">{{ props.author }}</span>
  </NuxtLink>
</template>

<style scoped>
.card {
  max-width: 200px;
  width: 100%;
  color: var(--darkgrey);
}

.card.light {
  color: white;
}

.card__image {
  height: 250px;
  object-fit: contain;
  object-position: left;
  border-radius: 4px;
}

.card__title {
  margin-top: 10px;
  margin-bottom: 2px;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  color: inherit;
}

.card__author {
  color: inherit;
}

@media (max-width: 600px) {
  .card {
    max-width: 40%;
  }
  .card__image {
    height: auto;
  }
}
</style>
