<script setup>
const route = useRoute();

function getBreads(doc) {
  return [
    { link: "/blog", label: "Blog" },
    { link: `/blog/${route.params.slug}`, label: doc.title },
  ];
}
</script>

<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <div class="page pt-10 pb-16">
        <div class="cbase">
          <UIBreadcrumbs :items="getBreads(doc)" />

          <div class="page__grid mt-10">
            <div class="page__imageBox">
              <img :src="doc.imagem" alt="" />
            </div>

            <div>
              <div class="page__tags">
                <UITag v-for="tag in doc.tags" :key="tag">{{ tag }}</UITag>
              </div>
              <h1 class="page__title bannerTitle inSection">
                {{ doc.title }}
              </h1>

              <div class="my-4">
                <div class="flex align-center gap-2 mb-4">
                  <IconCalendar /> {{ doc.date }}
                </div>
                <div class="flex align-center gap-2">
                  <IconEditAuthor /> {{ doc.autores.join(", ") }}
                </div>
              </div>
            </div>
          </div>

          <UIBlogContent :image="doc.imagem" :tags="doc.tags" :doc="doc" />
        </div>
      </div>
    </template>
    <template #not-found>
      <div class="page pt-10 pb-14">
        <div class="cbase">
          <h1 class="font-bold text-5xl text-center my-20 underline">
            Post não encontrado.
          </h1>
        </div>
      </div>
    </template>
  </ContentDoc>
</template>

<style scoped>
.page__grid {
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 60px;
  margin-inline: auto;
  margin-bottom: 60px;
  max-width: 1200px;
}

.page__title {
  line-height: 1.25;
}

.page__tags {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.page__grid img {
  justify-self: center;
  border-radius: 20px;
  width: auto;
  height: 100%;
}

.page__imageBox {
  border-radius: 20px;
  flex-grow: 1;
  flex-shrink: 0;
}

@media (max-width: 1200px) {
  .page__grid {
    grid-template-columns: 1fr;
    margin-bottom: 0;
  }
}
</style>
