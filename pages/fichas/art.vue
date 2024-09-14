<script setup>
import imagem from "/images/fichas/art.webp";

const ficha = {
  nome: "Art Flowers",
  imagem,
  atributos: [
    { label: "Força", value: 8 },
    { label: "Destreza", value: 15 },
    { label: "Constituição", value: 10 },
    { label: "Inteligência", value: 10 },
    { label: "Sabedoria", value: 14 },
    { label: "Carisma", value: 14 },
  ],
  jogador: "Lucas",
  classe: "Ladino 1",
  raca: "Meio Elfo",
  antecedente: {
    nome: "Charlatão",
    tracos: "Calmo e caótico",
    ideais: "Amizade em primeiro lugar",
    ligacoes: "Aliado de uma bruxa dívida de vida.",
    defeitos: "Distraído",
  },
  tendencia: "Caótico e Bom",
  idade: "20 anos",
  olhos: "Verdes",
  altura: "1,75m",
  peso: "35kg",
  cabelo: "Castanho claro",
  pele: "Branca",
  vida: "8",
  idiomas: "Comum, Élfico e Dracônico",
  classeArmadura: "15 (+3 destreza, +2 armadura)",
  pericias: [
    { nome: "Acrobácia", valor: "+5" },
    { nome: "Atuação", valor: "+4" },
    { nome: "Furtividade", valor: "+7" },
    { nome: "Intuição", valor: "+4" },
    { nome: "Investigação", valor: "+4" },
    { nome: "Medicina", valor: "+4" },
    { nome: "Persuasão", valor: "+6" },
    { nome: "Prestigitação", valor: "+5" },
  ],
  armas: [
    { nome: "Rapieira", valor: "+5, 1d8 de dano" },
    { nome: "Arco Curto", valor: "+5, 1d6 de dano" },
    { nome: "Adaga", valor: "+5, 1d4 de dano" },
  ],
  equips: {
    geral: "Mochila, 15m orda de seda e um arpéu",
    kits: "kit de ladrão, kit de disfarce, kit de falsificação, 2 kit de primeiro socorros.",
    armas: "Arco curto 24/96, Rapieira, Adaga 6/18.",
    especial: "Fantasia de Alex",
  },
};
</script>

<template>
  <UIPageContainer class="fichaOut">
    <UIFicha :ficha="ficha">
      <template #historia>
        <p>
          Vamos começar do começo, né? Minha mãe era uma elfa muito querida, ela
          conheceu um humano, eles tiveram um caso de uma noite, foi aí onde
          tudo começou. Mas isso foi o cúmulo na vila, aí ela decidiu se mudar
          para uma cidade muito grande, só que no fim lá era bem preconceituosa,
          eles não gostavam dos elfos.
        </p>
        <p>
          Mas, infelizmente, eu não pude conhecer minha mãe; ela morreu no meu
          parto. Acabei indo para o orfanato e eles não gostaram nem um pouco de
          mim. Aí eu decidi fugir com 16 anos, foi aí que a maionese começou a
          desandar.
        </p>
        <p>
          Virei um viajante do nada, sem rumo; eu não tinha nada, só um pequeno
          arco. Até que eu fui para Jardim Alegre, cidade dos ricaços. Comecei a
          roubar, a mentir e a me meter em várias confusões até que um dia eu
          achei uma bruxa do Norte. Péssima ideia tentar roubar ela.
        </p>
        <p>
          Eu pedi desculpas, ela aceitou e nos tornamos amigos. Ela me pediu a
          minha ajuda; tinham alguns caçadores atrás dela só porque ela jogou
          uma maldição neles e eles queriam a cabeça dela. Eu falei para ela que
          eu ajudaria. Depois de ajudá-la, ela me deu uma espada; não é bem uma
          espada, tá? Mas por uma agulha grande. Ela falou que combinava comigo;
          eu achei um pouco estranho, mas ela era divertida.
        </p>
        <p>
          A gente ficou junto até os meus 17 anos; ela foi chamada para uma
          missão do conselho das bruxas, aí a gente seguiu carreira solo. Foi
          assim que eu virei um viajante com uma espada, um arco e me metendo em
          várias confusões durante o caminho e ajudando as pessoas. Claro que eu
          sou um mentiroso, mas eu uso isso para o bem; eu gosto bastante de
          brincar com as pessoas.
        </p>
        <p>
          Mas no decorrer das minhas viagens eu aprendi bastante coisas; uma
          médica me ensinou a fazer curativos, também a moça do teatro me
          ensinou a atuar, ou o garoto que me ensinou a nadar, a moça que me
          ensinou acrobacias incríveis. Aprendi bastante coisas, mas eu nunca
          vou esquecer da bruxa. Mas você deve estar se perguntando o nome dela,
          né? O nome dela é Íris Moon.
        </p>
      </template>
      <template #skills>
        <div>
          <h3 class="topicTitle">Ataque Furtivo</h3>
          <p>
            Uma vez por turno, você pode adicionar 1d6 nas jogadas de dano
            contra qualquer criatura que acertar, desde que tenha vantagem nas
            jogadas de ataque. O ataque deve ser com uma arma de acuidade ou à
            distância. Você não precisa ter vantagem nas jogadas de ataque se
            outro inimigo do seu alvo estiver a 1,5 metro de distância dele,
            desde que este inimigo não esteja incapacitado e você não tenha
            desvantagem nas jogadas de ataque.
          </p>
        </div>
      </template>
      <template #anotacoes>
        <p>
          <b>Identidade Falsa</b>: Sir Alex III de Jardim Alegre, Cavaleiro
          juramentado á Stevius Joiosa duque de Jardim Alegre.
        </p>
      </template>
    </UIFicha>
  </UIPageContainer>
</template>
