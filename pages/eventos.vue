<script setup>
useSeoMeta({
  title: "Eventos",
});

const breads = [{ link: "/eventos", label: "Eventos" }];
</script>

<template>
  <div class="page py-9">
    <div class="cbase inline-size">
      <UIBreadcrumbs :items="breads" />

      <h1 class="text-7xl orange font-bold mb-8">Eventos</h1>
      <div class="page__grid">
        <div class="article">
          <p>
            Somos grandes fãs de jogos de tabuleiro e RPGs de mesa, por isso
            organizamos eventos geralmente aos sábados para nossa comunidade
            poder se reunir e passar um tempo juntos jogando.
          </p>
          <h2 class="text-2xl font-bold mb-2">Torneios</h2>
          <p>
            Estamos abertos para ajudar a organizar torneios de diversos jogos,
            como xadrez, MTG (Magic The Gathering), Pokemon Cards, entre outros.
          </p>
          <h2 class="text-2xl font-bold mb-2">Contato</h2>
          <p>
            Caso tenha interesse em participar, venha até nossa loja na Rua
            Gaviões 880 - Alvorada RS, ou entre em contato pelo Whatsapp 51
            984841686.
          </p>
        </div>
        <img
          src="~/assets/images/loja.jpeg"
          alt=""
          class="page__image rounded-md"
        />
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-2 orange">Encontros</h2>
        <div>
          <h3 class="text-xl font-bold">17 de Agosto de 2024</h3>
          <h4 class="font-bold mt-2">Mesa 1</h4>
          <ul class="list-disc list-inside">
            <li>Mestra: Bia</li>
            <li>Sistema: D&D 5e</li>
            <li>
              Personagens:
              <ul class="list-disc list-inside ml-5">
                <li>Loki, o Arqueiro Arcano</li>
                <li>Salazar, o Mago</li>
                <li>Luna, a Ladina</li>
                <li>Wybie, o Bruxo</li>
                <li>Leopoldo, o Guerreiro</li>
                <li>Rodion, o Clérigo</li>
                <li>Alex, o Guardião.</li>
              </ul>
            </li>
          </ul>

          <h3 class="text-xl font-bold mt-3">3 de Agosto de 2024</h3>
          <h4 class="font-bold mt-2">Mesa 1</h4>
          <ul class="list-disc list-inside">
            <li>Mestra: Bia</li>
            <li>Sistema: D&D 5e</li>
            <li>
              Personagens:
              <ul class="list-disc list-inside ml-5">
                <li>Loki, o Arqueiro Arcano</li>
                <li>Salazar, o Mago</li>
                <li>Luna, a Ladina</li>
                <li>Wybie, o Bruxo</li>
                <li>Kyrion, o Guerreiro</li>
                <li>Sener Dryck, o Druida</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

@media (max-width: 900px) {
  .page__grid {
    grid-template-columns: 1fr;
    margin-bottom: 30px;
  }
}

.page__image {
  display: block;
  margin-top: -60px;
}
</style>
