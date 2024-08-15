<script setup>
// setPageLayout("home");
definePageMeta({
  layout: "home",
});
useSeoMeta({
  title: "Início",
});
</script>

<template>
  <div>
    <LayoutHomeBanner />
    <LayoutHomeSection1 />
    <LayoutHomeSection3 />
    <LayoutHomeEventos />
  </div>
</template>

<style scoped></style>
