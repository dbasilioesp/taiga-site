<script setup>
defineProps({
  items: Array,
});
</script>

<template>
  <div class="breadcrumbs">
    <NuxtLink to="/" class="link font-medium">Home</NuxtLink> <span>&gt;</span>
    <template v-for="(item, index) in items">
      <NuxtLink :to="item.link" class="link capitalize">{{
        item.label
      }}</NuxtLink>
      <span v-if="index < items.length - 1"> &gt; </span>
    </template>
  </div>
</template>

<style>
.breadcrumbs {
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 13px;
}
.breadcrumbs span {
  color: var(--textGrey);
}

.breadcrumbs a {
  font-size: inherit;
  color: var(--textGrey);
  /* font-family: var(--fontTitle); */
}
</style>
