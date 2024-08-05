<script setup>
console.log("show");
</script>

<template>
  <div>
    <LayoutHeader />
    <main class="main">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style scoped></style>
