<script setup>
const breads = [
  { link: "/clube-taiga", label: "Clube Taiga" },
  { link: `/clube-taiga/guilda`, label: "Guilda" },
];
</script>

<template>
  <UIPageContainer class="page">
    <UIBreadcrumbs :items="breads" class="mb-9" />

    <section class="article container">
      <h1>Guilda Taiga</h1>

      <p>
        O Discord da Taiga terá temporadas focadas em sistemas de RPG, sendo
        assim estamos iniciando a temporada de D&D 5. Onde os participantes
        poderão criar seus personagens e participar das missões que os mestres
        irão anunciar.
      </p>

      <h2>Regras de Conduta</h2>

      <p>
        O servidor é aberto para adolescentes e adultos, logo é preciso cuidar
        os tipos de brincadeiras para aqueles que não estão no contexto. Sabemos
        que muitos adoram um humor mais ácido, mas vamos manter um limite:
      </p>

      <ul>
        <li>
          Não queremos brincadeiras relacionado a com doenças e transtornos.
        </li>
        <li>Não queremos brincadeiras com capacitismo</li>
        <li>
          Não queremos brincadeiras com mutilação dentro do discord, e dentro
          das sessões o grupo precisa permitir
        </li>
        <li>Não é permitido ofensas e ameaças</li>
      </ul>

      <h2>Regras de Participação</h2>
      <p>
        Queremos conhecer cada um que está no discord e por isso vamos pedir que
        se apresentem no canal de texto com as seguintes informações:
      </p>
      <ul>
        <li>Seu nome</li>
        <li>Idade ou faixa etária (adolescente, jovem, adulto)</li>
        <li>Qual cidade mora</li>
        <li>Gostos</li>
        <li>Quem indicou o servidor ou qual pessoa é a conexão</li>
        <li>Fobias que tem pra caso for participar das sessões de RPG</li>
      </ul>

      <p>
        É importante conseguirmos identificar os participantes, e por isso é
        preciso ter o nome dentro do servidor no seguinte formato:
      </p>
      <blockquote>
        Nome do Personagem - Nome Verdadeiro/Nickname usado na Apresentação
      </blockquote>

      <h2>Como criar um personagem de D&D 5e.</h2>

      <h3>Nivel Iniciante</h3>
      <p>
        Para jogadores no nivel iniciante recomendamos criar um personagem
        usando apenas o Livro de Personagens referente a versão de 2014.
      </p>

      <h3>Nivel Combeiro</h3>
      <p>Está liberado a criação de personagem usando os seguintes livros:</p>
      <ul>
        <li>Playbook 14</li>
        <li>Volo..</li>
        <li>Morderkainen…</li>
      </ul>

      <h3>Criação básica ou Rolar o dado?</h3>
      <p>
        O jogador pode criar sua ficha de personagem de acordo com o nível
        iniciante ou combeiro, distribuindo os pontos de atributo através do
        site: https://chicken-dinner.com/5e/5e-point-buy.html
      </p>

      <p><b>Rolando o dado</b></p>
      <blockquote>
        ATENÇÃO: Antes de rolar o dado anuncie no canal de texto da Guilda que
        irá criar o personagem rolando o dado.
      </blockquote>

      <p>
        Para a sua raça/espécie/linhagem role um d52 e para a sua classe um d13
        e confira o resultado abaixo, você pode rolar duas vezes pra cada
        aspecto. Raças com muitas variações e subraças (elfos, anões e etc)
        estão sob o mesmo guarda chuva e fica a critério do jogador qual usar.
        Bônus: a ficha de personagem ganhará um Talento no nível 1 por rolar o
        dado.
      </p>
    </section>

    <section class="article">
      <div class="container">
        <h2>Lista de Raças/Origins</h2>
      </div>

      <div class="page__grid">
        <div class="card" v-for="(item, index) in ORIGINS" :key="item.name">
          <img :src="item.image" :alt="item.name" />
          <div class="cardTitle">{{ item.name }}</div>
          <span class="cardNumber">{{ index + 1 }}</span>
        </div>
      </div>
    </section>
  </UIPageContainer>
</template>

<style scoped>
.page {
  padding-bottom: 180px;
}

.page__grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.container {
  max-width: 75ch;
  margin-inline: auto;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card img {
  height: 200px;
  object-fit: cover;
  object-position: top center;
}

.card .cardTitle {
  font-size: 1.25rem;
}

.card .cardNumber {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: brown;
  color: white;
  z-index: 1;
}
</style>
