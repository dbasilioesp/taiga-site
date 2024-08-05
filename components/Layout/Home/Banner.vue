<script></script>

<template>
  <div class="banner">
    <h1 class="banner__title">Taiga</h1>
    <p class="banner__desc">
      Somos uma livraria que procura inspirar a nova joventude, escolhendo
      títulos inovadores e que conversem com os novos tempos.
    </p>
  </div>
</template>

<style scoped>
.banner {
  padding-top: var(--headerHeight);
  height: clamp(300px, 65vh, 676px);
  background-image: linear-gradient(
      to right,
      color(from var(--purple) srgb r g b / 0.8) 0%,
      color(from var(--purple) srgb r g b / 0.8) 100%
    ),
    url("~/assets/images/home-banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.banner__title {
  font-size: 72px;
  color: var(--yellow);
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
