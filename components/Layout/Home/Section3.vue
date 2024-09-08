<script></script>

<template>
  <div class="sectionC">
    <NuxtLink class="sectionC__col sectionC__books" to="/livros">
      <span>Livros</span>
    </NuxtLink>

    <NuxtLink class="sectionC__col sectionC__mangas" to="/mangas">
      <span>Mangás</span>
    </NuxtLink>

    <NuxtLink class="sectionC__col sectionC__rpgs" to="/rpgs">
      <span>RPGs</span>
    </NuxtLink>
  </div>
</template>

<style>
.sectionC {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 600px;
  place-items: center;
}

.sectionC__col {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.sectionC__col::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: all 400ms ease-out;
}

.sectionC__col span {
  position: relative;
  font-size: 48px;
  color: var(--yellow);
  font-weight: bold;
}

.sectionC__col span::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 1px;
  height: 2px;
  width: 0;
  border-radius: 4px;
  background-color: var(--orange);
  transition: width 0.3s ease-out;
}

.sectionC__col:hover span:before {
  width: 100%;
}

.sectionC__col:hover::before {
  scale: 1.05;
}

.sectionC__books::before {
  background-image: var(--overlayGray), url("~/assets/images/Roxo.jpeg");
}

.sectionC__mangas::before {
  background-image: var(--overlayGray), url("~/assets/images/boruto.jpg");
}

.sectionC__rpgs::before {
  background-image: var(--overlayGray),
    url("~/assets/images/ordem_paranormal.jpg");
}

.sectionC__col:hover {
  background-size: calc(100% + 10px);
}

@media (max-width: 900px) {
  .sectionC {
    grid-template-columns: 1fr;
  }
}
</style>
