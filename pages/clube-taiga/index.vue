<script setup>
import Art from "/images/fichas/art.webp";
import Salazar from "/images/fichas/salazar.webp";
import Luna from "/images/fichas/luna.webp";

useSeoMeta({
  title: "Clube Taiga",
});

const breads = [{ link: "/clube-taiga", label: "Clube Taiga" }];

const meets = [
  {
    date: "14 de Setembro de 2024",
    groups: [
      {
        guide: "Biamah",
        system: "D&D 5e",
        characters: [
          "Loki, o Arqueiro Arcano",
          "Salazar, o Mago",
          "Wybie, o Bruxo",
          "Leopoldo, o Guerreiro",
          "Rodion, o Clérigo",
          "Alex, o Guardião.",
          "Kyrion, o Guerreiro",
          "?, o Barbaro",
          "Valdecir, o Druida",
        ],
      },
    ],
  },
  {
    date: "7 de Setembro de 2024",
    groups: [
      {
        guide: "David",
        system: "Tormenta",
        characters: ["TODO: adicionar personagens."],
      },
    ],
  },
  {
    date: "17 de Agosto de 2024",
    groups: [
      {
        guide: "Biamah",
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
        guide: "Biamah",
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

const fichas = [
  {
    nome: "Art Flowers",
    imagem: Art,
    slug: "art",
  },
  {
    nome: "Salazar Ankari",
    imagem: Salazar,
    slug: "salazar",
  },
  {
    nome: "Luna, a Bastarda",
    imagem: Luna,
    slug: "luna",
  },
];
</script>

<template>
  <UIPageContainer>
    <UIBreadcrumbs :items="breads" />

    <h1 class="pageTitle yellow">Clube Taiga</h1>

    <h2 class="sectionTitle">Eventos</h2>

    <div class="page__grid">
      <div class="article">
        <p>
          Somos grandes fãs de jogos de tabuleiro e RPGs de mesa, por isso
          organizamos eventos geralmente aos sábados para nossa comunidade poder
          se reunir e passar um tempo juntos jogando.
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
      <h3 class="topicTitle2">Encontros</h3>
      <div class="flex flex-wrap flex-col sm:flex-row gap-14">
        <UIMeetDay
          :meet="meet"
          v-for="meet in meets"
          :key="meet.date"
          class="mb-4"
        />
      </div>
    </div>

    <h2 class="sectionTitle">Fichas de Personagens</h2>

    <div class="page__fichasGrid">
      <NuxtLink
        :to="'/clube-taiga/fichas/' + ficha.slug"
        v-for="ficha in fichas"
        :key="ficha.nome"
        class="page__ficha"
      >
        <img :src="ficha.imagem" :alt="ficha.nome" />
        <span>{{ ficha.nome }}</span>
      </NuxtLink>
    </div>
  </UIPageContainer>
</template>

<style scoped>
.page__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.page__fichasGrid {
  display: flex;
  align-items: stretch;
  gap: 30px;
  flex-wrap: wrap;
}

.page__ficha {
  position: relative;
  width: 200px;
}

.page__ficha::before {
  content: "";
  display: block;
  background-image: linear-gradient(to bottom, transparent, black);
  opacity: 0.3;
  width: 100%;
  height: 40px;
  bottom: 0;
  left: 0;
  position: absolute;
}

.page__ficha img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.page__ficha span {
  font-size: 24px;
  position: absolute;
  bottom: 10px;
  left: 14px;
  color: white;
  font-weight: 500;
  transition: all 0.3s linear;
}

.page__ficha:hover span {
  color: var(--yellow);
  letter-spacing: 0.4;
}

@media (max-width: 900px) {
  .page__grid {
    grid-template-columns: 1fr;
    margin-bottom: 30px;
  }
}

.page__image {
  display: block;
  /* margin-top: -60px; */
}
</style>
