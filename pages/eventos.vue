<script setup>
useSeoMeta({
  title: "Eventos",
});

const breads = [{ link: "/eventos", label: "Eventos" }];

const meets = [
  {
    date: "17 de Agosto de 2024",
    groups: [
      {
        guide: "Bia",
        system: "D&D 5e",
        characters: [
          "Loki, o Arqueiro Arcano",
          "Salazar, o Mago",
          "Luna, a Ladina",
          "Wybie, o Bruxo",
          "Leopoldo, o Guerreiro",
          "Rodion, o Clérigo",
          "Alex, o Guardião.",
        ],
      },
    ],
  },
  {
    date: "3 de Agosto de 2024",
    groups: [
      {
        guide: "Bia",
        system: "D&D 5e",
        characters: [
          "Loki, o Arqueiro Arcano",
          "Salazar, o Mago",
          "Luna, a Ladina",
          "Wybie, o Bruxo",
          "Kyrion, o Guerreiro",
          "Sener Dryck, o Druida",
        ],
      },
    ],
  },
  {
    date: "25 de Maio de 2024",
    groups: [
      {
        guide: "David",
        system: "D&D 5e",
        characters: [
          "Momonga - Bruxo",
          "Kyrian - Guerreiro",
          "Apollo - Paladino",
          "Art - Ladino",
          "Nessa - Guardiã",
          "Lormoon - Feiticeiro",
          "Arthur - Guerreiro",
        ],
      },
    ],
  },
];
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
        <div class="flex flex-wrap flex-col sm:flex-row gap-14">
          <UIMeetDay
            :meet="meet"
            v-for="meet in meets"
            :key="meet.date"
            class="mb-4"
          />
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
