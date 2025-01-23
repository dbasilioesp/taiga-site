<script setup>
defineProps({
  image: String,
  description: String,
  tags: Array,
  doc: Object,
});
</script>

<template>
  <div class="blog">
    <div class="blog__text">
      <div class="blog__desc" v-html="description" v-if="description"></div>
      <ContentRenderer :value="doc" v-if="doc" class="article" />
    </div>
  </div>
</template>

<style>
.blog {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 74ch;
  margin-inline: auto;
}

.blog b {
  font-family: var(--fontTitle);
}

.blog__tags {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.blog__banner {
  width: 100%;
  object-fit: cover;
  object-position: center bottom;
  border-radius: 10px;
  grid-area: b;
}

.blog__text {
  max-width: 100ch;
  width: 100%;
}

.blog__grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
  grid-template-areas: "a b";
}

.blog__volumes {
  margin-top: 20px;
}

@media (max-width: 1200px) {
  .blog {
    max-width: 100%;
  }

  .blog__text {
    max-width: 70ch;
  }
}

@media (max-width: 760px) {
  .blog {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .blog__grid {
    grid-template-columns: 1fr;
    grid-template-areas: "b" "a";
  }

  .blog__banner {
    width: auto;
  }
}
</style>
