<script></script>

<template>
  <div class="section">
    <section class="section__content">
      <div class="section__contentwrap">
        <h2 class="title-base yellow shadow-text">Sobre nós</h2>
        <p class="text-base white">
          Criamos a livraria Taiga para ser ponto de encontro daqueles que
          gostam da literatura puxada para ficção, caminhando pelos Romances,
          pelas Fantasias e até aqueles são poucos conhecidos do tipo Horror.
        </p>
        <p class="text-base white">
          Além da literatura abraçamos as light novels no formato de mangás
          japoneses. Tendo títulos como Naruto, One Piece, Attack on Titan, que
          já são muito famosos, mas também titulos menos conhecidos como
          Mieroku-chan, Dorohedoro e Guntz.
        </p>
        <p class="text-base white">
          E nossa última essência está nos jogos de tabuleiro, principalmente os
          RPGs, onde procuramos trazer títulos como Ordem Paranormal e Tormenta
          20, e utensílios como dados de várias faces, livros de aventura e
          miniaturas.
        </p>
        <NuxtLink class="button-primary" to="/livros">Veja mais</NuxtLink>
      </div>
    </section>
    <div class="section__picture">
      <img src="~/assets/images/capas.png" alt="Capas dos livros" />
    </div>
  </div>
</template>

<style scoped>
.section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  /* justify-items: center; */
}

.section__content {
  background-color: var(--blue);
  display: grid;
  justify-content: end;
  align-items: center;
}

.section__contentwrap {
  padding: 40px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 500px;
  align-items: start;
}

.section__picture {
  display: grid;
  justify-content: start;
  align-items: center;
  padding: 80px;
}
</style>
