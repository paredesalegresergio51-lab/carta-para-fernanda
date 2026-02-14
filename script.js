const textoCarta = `
Querida Fernanda,

Hoy me senté a escribirte con calma,
pensando en todo lo que eres para mí
y en lo afortunado que soy de tenerte en mi vida.

No quise regalarte algo común,
porque lo que siento por ti no es algo común.
Quise darte algo que naciera de mí,
algo que llevara un pedacito de mi corazón.

Desde que llegaste, mis días cambiaron.
Cambió la forma en que sonrío,
la forma en que miro el futuro
y la forma en que entiendo el amor.

Me encanta cómo eres,
cómo haces especiales las cosas más simples,
cómo tu presencia calma mis pensamientos
y cómo tu sonrisa tiene el poder
de alegrarme incluso en los días difíciles.

Gracias por tu paciencia,
por tu cariño,
por cada momento compartido
y por quedarte incluso cuando no todo es perfecto.

Eres mi lugar seguro,
mi alegría diaria
y una de las razones más bonitas
por las que sonrío sin darme cuenta.

Hoy, en San Valentín,
solo quiero que sepas
que te amo,
que te elijo
y que agradezco cada día
el tenerte a mi lado.

Feliz San Valentín, mi amor.
`;

let i = 0;
const velocidad = 35;
const textoElemento = document.getElementById("texto");

function escribirTexto() {
  if (i < textoCarta.length) {
    textoElemento.innerHTML += textoCarta.charAt(i);
    i++;
    setTimeout(escribirTexto, velocidad);
  }
}

escribirTexto();

// Música
const musica = document.getElementById("musica");

function toggleMusica() {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}
