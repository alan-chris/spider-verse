const data = [
  {
    image: '/img/time-aranha.png',
    name: 'Homem-Aranha no Aranhaverso',
    description: `Filme de animação estadunidense de 2018, baseado nas histórias em quadrinhos
                  do personagem Miles Morales da Marvel Comics, produzido pela Columbia Pictures
                  e Sony Pictures Animation em associação com a Marvel Entertainment e distribuído
                  pela Sony Pictures Releasing.`,
    next: 'Miles Morales'
  },
  {
    image: '/img/miles-morales.png',
    name: 'Miles Morales',
    description: `Personagem presente nos quadrinhos da Marvel Comics, que apareceu pela primeira
                  vez em Ultimate Fallout #4. Um adolescente negro com ascendência hispânica, Miles
                  é o segundo Homem-Aranha a aparecer em Ultimate Marvel, e com uma continuação no
                  Universo Marvel principal`,
    next: 'Peter Parker'
  },
  {
    image: '/img/peter-parker.png',
    name: 'Peter Parker',
    description: `O Homem-Aranha, o alter ego de Peter Parker, é um super-herói que aparece nas
                  revistas em quadrinhos publicadas pela Marvel Comics. Criado pelo escritor/editor
                  Stan Lee e pelo escritor/artista Steve Ditko, o Homem-Aranha apareceu pela primeira
                  vez na Amazing Fantasy #15, durante a Era de Prata dos Quadrinhos.`,
    next: 'Spider Gwen'
  },
  {
    image: '/img/spider-gwen.png',
    name: 'Spider Gwen',
    description: `Gwen-Aranha (no original, Spider-Gwen) é o alter ego de Gwen Stacy da Terra-65, que 
                  assume a identidade de Mulher-Aranha depois de ter sido picada por uma aranha radioativa, 
                  é uma personagem fictícia da Marvel Comics que apareceu pela primeira vez na história Edge 
                  of Spider-Verse #2 de setembro de 2014.`,
    next: 'Spider Noir'
  },
  {
    image: '/img/spider-noir.png',
    name: 'Spider Noir',
    description: `Parte do universo Marvel Noir (Terra-90214), esta versão alternativa do Homem-Aranha é uma
                  versão noir do personagem e surge em uma versão de Nova York durante a Grande Depressão. 
                  Enquanto investiga um anel de contrabando, Peter Parker é mordido pelo que parece ser uma 
                  aranha altamente venenosa alojada dentro de um ídolo do deus-aranha.`,
    next: 'Peni Parker'
  },
  {
    image: '/img/peni-parker.png',
    name: 'Peni Parker',
    description: `super-heroína que aparece nas publicações da Marvel Comics . Ela é uma versão alternativa do
                  Homem-Aranha . A personagem é retratada como uma estudante do ensino médio de 14 anos que 
                  foi adotada por tia May e tio Ben após a morte de seu pai/zelador. Ela pilota um traje mecânico
                  de força psíquica construído por seu pai.`,
    next: 'Peter Porker'
  },
  {
    image: '/img/spider-ham.png',
    name: 'Peter Porker',
    description: `personagem fictício, uma paródia antropomórfica do popular personagem da Marvel Comics, Homem-Aranha,
                  criado por Tom DeFalco e Mark Armstrong. Sua primeira aparição foi na edição especial cômica Marvel 
                  Tails Starring Peter Porker, the Spectacular Spider-Ham nº1, que foi então seguida por uma série bi-mestral,
                  Peter Porker, the Spectacular Spider-Ham que durou 17 edições e foi publicada pelo selo Star Comics da Marvel.`,
    next: 'Homem-Aranha no Aranhaverso'
  }
]

var index = 0
var object = data[index]

function nextPosition() {
  index += 1;
  object = data[index]
  if (!object) {
    index = 0
    object = data[index]
  }
  render()
}

function render() {
  document.querySelector('[spider-component]').innerHTML =
    `
  <div>
  <img src="${object.image}">
  <article>
    <h1>${object.name}</h1>
    <p>${object.description}</p>
    <button onclick="nextPosition()">${object.next} >></button>
  </article>
  </div>
  `
}

render()
