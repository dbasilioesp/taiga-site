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
    <NuxtImg
      class="card__image"
      :src="props.image"
      alt=""
      format="webp"
      quality="80"
    />
    <h2 class="card__title">{{ props.title }}</h2>
    <span class="card__author">{{ props.author }}</span>
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
  height: 300px;
  object-fit: contain;
  object-position: left;
  filter: var(--dropShadow);
  /* border-radius: 6px; */
}

.card__title {
  margin-top: 10px;
  margin-bottom: 0px;
  font-size: 18px;
  line-height: 1.1;
  font-weight: 500;
  color: inherit;
}

.card__author {
  color: inherit;
  font-size: 14px;
  margin-top: 0;
  display: block;
  color: var(--textGrey);
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
