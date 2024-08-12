<script></script>

<template>
  <div class="banner">
    <h1 class="banner__title text-7xl yellow font-bold">Taiga</h1>
    <p class="banner__desc">
      Somos uma livraria que procura inspirar a nova joventude, escolhendo
      títulos inovadores e que conversem com os novos tempos.
    </p>
  </div>
</template>

<style scoped>
.banner {
  padding-top: var(--headerHeight);
  height: max(400px, 40vw);
  background-image: var(--overlayPurple), url("~/assets/images/home-banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.banner__title {
  text-shadow: var(--shadowText);
  margin-block-start: -60px;
  margin-block-end: 20px;
}

.banner__desc {
  color: white;
  max-width: 470px;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
}
</style>
