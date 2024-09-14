<script setup>
import imagem from "/images/fichas/luna.webp";

const ficha = {
  nome: "Luna, a bastarda",
  imagem,
  atributos: [
    { label: "Força", value: 9 },
    { label: "Destreza", value: 15 },
    { label: "Constituição", value: 13 },
    { label: "Inteligência", value: 15 },
    { label: "Sabedoria", value: 10 },
    { label: "Carisma", value: 9 },
  ],
  jogador: "Sophia",
  classe: "Ladino 1",
  raca: "Humano",
  antecedente: {
    nome: "Nobre",
    tracos: "Perfeccionista, Gananciosa",
    ideais: "Independência, Lealdade",
    ligacoes: "Baronesa Revolta (Meia-irmã)",
    defeitos: "Eu odeio dividir",
  },
  tendencia: "Caótico e Neutro",
  idade: "23 anos",
  olhos: "Verdes",
  altura: "1,64",
  peso: "54kg",
  cabelo: "Ruiva",
  pele: "Branca",
  vida: "10",
  classeArmadura: "14 (+3 destreza, +1 de armadura)",
  idiomas: "Comum e Élfico",
  pericias: [
    { nome: "Acrobacia", valor: "+5" },
    { nome: "Atletismo", valor: "+2" },
    { nome: "Furtividade", valor: "+5" },
    { nome: "História", valor: "+5" },
    { nome: "Percepção", valor: "+3" },
    { nome: "Persuasão", valor: "+2" },
  ],
  armas: [
    { nome: "Rapieira", valor: "1d8 de dano" },
    { nome: "Arco curto", valor: "1d6 de dano" },
    { nome: "2 adagas", valor: "1d4 de dano" },
  ],
  equips: {
    geral: "Conjunto de roupas finas.",
    kits: "1 kit de Assaltante, 1 kit de Jogos.",
    armas: "Arco curto, Rapieira, Adaga 6/18, 20 flechas, armadura de couro.",
    especial:
      "Ferramenta de ladrão, pergaminho de antecedência de família, poção de cura, água benta.",
    pilhagem: "Anel de Sinete",
  },
};
</script>

<template>
  <UIPageContainer class="fichaOut">
    <UIFicha :ficha="ficha">
      <template #historia>
        <p>
          <i
            >"Eu traço meu próprio destino, sem depender de deuses ou de
            ninguém. Minha ambição é tudo para mim, e não divido meus ganhos com
            ninguém. Mas pela minha meia-irmã, faria qualquer sacrifício. Ela é
            a única exceção em meu mundo de liberdade e riqueza."</i
          >
        </p>
        <h3>Dança Proibida</h3>
        <p>
          Nos confins de um reino, onde os castelos erguiam-se majestosos e os
          campos estendiam-se verdejantes, havia um segredo guardado nas
          sombras. Era uma noite escura e tempestuosa quando Lunna veio ao
          mundo, tua estrada no mundo marcada por uma ocultação que, por muitos
          anos, permanece impenetrável. O cenário era uma modesta taverna, local
          de encontros clandestinos e segredos sussurrados. Era ali que uma
          mulher morena de linhagem mágica, cujo nome ninguém ousava pronunciar,
          e um Barão enigmático, casado e poderoso, se encontraram em um
          encontro fugaz. O destino, como tantas vezes ocorre, os uniu em uma
          dança proibida, e daquele encontro furtivo surgiu a vida de Lunna.
        </p>
        <p>
          Noves meses se passaram, e em uma noite de lua cheia, enquanto a chuva
          caía em um ritmo constante, a mulher morena bela deu à luz uma menina.
          O quarto estava mergulhado na penumbra, e o choro do recém-nascido
          parecia ecoar como um lamento, uma canção de segredos e promessas
          quebradas. A mulher, com olhos carregados de mistério e magia, segurou
          a criança nos braços enquanto lágrimas silenciosas escorriam por seu
          rosto. Ela sabia que sua filha não teria um destino fácil, que a vida
          de Lunna seria marcada por sombras e segredos, assim como a dela.
        </p>
        <p>
          Secretamente, a mulher procurou o Barão, fazendo-se passar por vítima,
          implorando por ajuda para a filha recém-nascida. Ameaçou revelar a
          traição ao mundo, lançando uma sombra sobre a reputação imaculada do
          Barão. Desesperado e atormentado pela culpa, o Barão concordou em
          fornecer apoio financeiro em troca de silêncio. Foi assim que Lunna
          recebeu seu nome, uma mistura de sombras que envolviam seu nascimento
          e a da lua que brilhava naquela noite fatídica. Depois de meses se
          escondendo, a esposa do Barão descobriu a verdade e mandou assassinar
          a mulher morena, com o pesar na consciência, Barão interveio pela
          sobrevivência do bebê. Desde então, Lunna viveu nas sombras, uma
          bastarda destinada a ser ignorada em público, relegada a uma
          existência solitária.
        </p>
        <h3>Sombras do Castelo</h3>
        <p>
          À medida que Lunna crescia, as sombras do castelo pareciam estender-se
          sobre ela, obscurecendo o brilho natural que possuía. A esposa do
          Barão, agora uma Baronesa, olhava-a com olhos gélidos, tratando-a como
          se fosse uma sombra indesejada no seu reinado de luxo e pompa. No
          entanto, a vida de Lunna era marcada por momentos de resiliência e
          surpreendente determinação. Ela não permitiria que sua condição a
          definisse. Com esforço incansável, Lunna absorvia as lições que o
          destino lhe oferecia, aprendendo a se vestir e comportar-se como uma
          dama. Cada passo, cada gesto, cada palavra, era uma tentativa de
          esculpir sua própria identidade.
        </p>
        <p>
          A relação com a Baronesa, embora fria e distante, também trouxe uma
          luz tênue de conforto. Era na presença de sua meia-irmã, Revolta, que
          Lunna encontrava um vislumbre de calor humano. Revolta, por sua vez,
          carregava o peso de suas próprias expectativas e pressões, o fardo de
          ser a filha legítima do Barão. Com o tempo, Lunna e Revolta se
          apoiaram mutuamente, encontrando consolo nos braços uma da outra. Era
          em segredo que compartilhavam confidências, sonhos e, por vezes,
          lágrimas. A conexão entre elas tornou-se uma âncora poderosa, uma
          fonte de força em meio à tormenta.
        </p>
        <p>
          Contudo, o castelo era uma prisão dourada, e as sombras continuavam a
          pairar sobre Lunna. Em um ato de desespero, a Baronesa a confinou em
          uma sala escura, onde o silêncio era quebrado apenas pelo eco dos
          próprios passos. Mas, para surpresa de todos, foi ali que Lunna
          descobriu uma nova habilidade. Seus olhos, antes cegos pela escuridão,
          agora enxergavam na penumbra, captando detalhes que outros não viam.
          Uma nova força brotava dela, uma habilidade oculta que a libertava das
          amarras da escuridão.
        </p>
        <p>
          Enquanto o tempo passava, Lunna transformou-se. Seus cabelos, uma vez
          longos e luxuosos, foram cortados para que pudesse se passar por um
          menino durante os ensaios de dança com Revolta. A dor da tesoura
          contra seus fios deu lugar a uma determinação ainda mais profunda, a
          uma vontade férrea de se adaptar e sobreviver. Ninguém esperava algo
          de Lunna naquele castelo, seu nome nunca era mencionado, a esposa de
          seu pai se sentia ofendida só de ter a presença da bastarda em sua
          casa. Barão também não era muito presente com Lunna, das poucas vezes
          que se viam eram os mesmos discursos:
        </p>
        <p>
          — Todo sofrimento valerá a pena, um dia não tão distante terá a vida
          que sempre sonhou. Reze para que o celestial te ajude. És minha filha
          que eu amo e nada vai mudar isso. – Mesmo ficando furioso por terem
          cortado seus cabelos, não fez nada a respeito.
        </p>
        <p>
          Lunna entendeu que precisava ser perfeita, precisava agradar a esposa
          de seu pai, mesmo que ela o machucasse, mesmo que seus braços e
          panturrilhas fossem marcados por uma vara longa e fina. Entretanto,
          sua meia-irmã também sofria uma pressão por ser a filha legítima. Às
          escondidas, as duas adolescentes se encontravam para conversar, mesmo
          não estando tão presentes na vida uma da outra por essa barreira,
          Lunna amava sua irmã, sempre Revolta empurrava a culpa para Lunna ela
          aceitava a punição de bom grado. Porque de todos do castelo, a
          bastarda sentia que era amada pela meia-irmã da mesma intensidade,
          engolindo sua inveja e orgulho como se fossem espinhos descendo de sua
          garganta.
        </p>
        <p>
          Todas as festas e reuniões de famílias a bastarda evitava de chamar a
          atenção, usando vestidos simples como as criadas e jóias falsas,
          completamente ao contrário da meia-irmã. Desde cedo tinha talento para
          passar entre as pessoas como um fantasma, furtar os pertences de seus
          convidados era seu passatempo favorito, Lunna sempre adorou joias, os
          vestidos e tudo que era belo. Quanto mais velha ficava, seu dom mágico
          herdado de sua misteriosa mãe se despertava, como choques repentinos
          nas pessoas e sensações estranhas de objetos, pessoas e lugares
          supostamente mágicos.
        </p>
        <h3>A Fuga</h3>
        <p>
          Em uma noite comum, aos seus 16 anos, veio a notícia do falecimento do
          Barão, ao invés de ficar de luto com a filha, agora viúva, ordenou a
          execução da pessoa que mais tinha desgosto, Lunna. Com ajuda de
          Revolta, conseguiu fugir somente com a roupa do corpo, com medo ela se
          escondendo atrás de árvores e rezava por uma ajuda divina. Os
          primeiros dias eram como um inferno, roubava comida e dinheiro para
          sobreviver, passou a fazer muitas viagens, esbarrando em homens mais
          velhos em tavernas alegando conhecerem Lunna, de boca em boca chegou
          em uma taverna chamada O Javali Ebrio, mulheres e homens que
          frequentam aquele estabelecimento por anos se chocaram ao reconhecer
          Lunna.
        </p>
        <p>
          — É linda igual sua mãe!<br />
          — O rosto é o mesmo, até seus cabelos!<br />
          — Aquela mulher era uma malandra mesmo.<br />
          — Eu mesma que fiz o parto de sua mãe, te carreguei no colo!<br />
          — Ela disse que iria embora dessas terras miseráveis, como veio parar
          aqui?<br />
        </p>
        <p>
          Ouvia aquelas histórias absurdas, nitidamente decepcionada de como era
          sua mãe. Uma puta oportunista e golpista, sendo somente uma ferramenta
          para arrancar dinheiro de seu pai. “Nem mesmo minha mãe me quis” era o
          que ela pensava. Uma raiva crescente surgindo a cada comparação de sua
          aparência por ela. Saiu daquela taverna em fúria.
        </p>
        <p>
          — Eu sou tão idiota HAHAHHA!! – Sua voz ecoava nas estradas vazias,
          cada vez mais distante da aldeia. – “Tudo vai valer a pena” era o que
          ele me dizia, mentiroso! HAHHAHA! Eu nunca tive chance, não é? Tudo
          aquilo era pela Revolta, tudo girava em torno dela enquanto eu me
          ferrava!!
        </p>
        <p>
          Perdida em seus pensamentos, um grupo de pessoas a seguia, e quando
          percebeu, uma onda de choque levou dois desses homens à morte. Na
          mesma hora aquele grupo se apresentou, interessados no que Lunna
          poderia fazer. Um grupo de nativos, chamados Tarki, de uma cultura
          agressiva e resiliente, foram o que viram naquela garota perdida. Com
          eles, a bastarda foi treinada a manifestar suas habilidades mais a
          fundo, foi treinada a mexer com armas e se defender sozinha, saqueando
          os vilarejos pequenos e vivendo como nômades naquelas terras. Tendo a
          se acostumar com aquela nova cultura, além de treinar, costurava e
          tecia tapetes e mantos para as cerimônias.
        </p>
        <p>
          Não era o que Lunna queria, mesmo sendo assim por dois anos, nunca de
          fato se permitiu criar um laço com eles. Se sentia cada dia mais
          solitária. No dia de seu afastamento, Tharuk, líder de sua tribo e
          quem a treinou por esses anos, a presenteou com sais longas de ponta
          afiada, juntamente a uma coleção de adagas e facas. Ela voltou para o
          alojamento da taverna O Javali Ebrio, trabalhava de forma
          independente, roubava e matava para sobreviver, se algo ou alguém não
          estivesse fazendo exatamente o que ela mandou ou o que era pra ser
          feito tinha sua garganta cortada, fora uma das maneiras que tal
          conseguiu sua reputação e respeito naquela taverna. A fama e seus
          títulos aumentavam, caçadores de recompensas a caçavam vez ou outra,
          entretanto sempre conseguia finalizar a briga. Cinco anos se passaram,
          até conseguir reencontrar sua meia-irmã como Baronesa.
        </p>
        <p>
          Era muito arriscado um nobre visitar aquela taverna suja, mas Revolta
          sempre fazia jus ao seu nome, colocando a conversa em dia deu-se a
          notar o quanto as duas mudaram, desde seu reencontro a meia-irmã pede
          serviços para Lunna como espionagem, investigação, roubos e
          assassinatos em troca de uma recompensa gorda e proteção dos caçadores
          de recompensas. Era o suficiente para viver naquele reino, por algum
          motivo, a bastarda fazia os serviços sem reclamar
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
      <template #anotacoes> </template>
    </UIFicha>
  </UIPageContainer>
</template>
