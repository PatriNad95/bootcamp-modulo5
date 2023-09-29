import "./style.css";

let score: number;

function initEvents() {
  score = 0;
  pintarCarta(0);
  showMessage("");
  muestraPuntuacion();
  botonesJugar();
}

document.addEventListener("DOMContentLoaded", () => {
  initEvents();
});

const buttonAsk = document.getElementById("askCard");
if (
  buttonAsk !== null &&
  buttonAsk !== undefined &&
  buttonAsk instanceof HTMLButtonElement
) {
  buttonAsk.addEventListener("click", () => pideCarta());
} else {
  console.error("El elemento con id askCard no es un elemento button");
}

const noMoreCards = document.getElementById("noMoreCards");
if (
  noMoreCards !== null &&
  noMoreCards !== undefined &&
  buttonAsk instanceof HTMLButtonElement
) {
  noMoreCards.addEventListener("click", () => plantarse());
} else {
  console.error("El elemento con id noMoreCards no es un elemento button");
}

const newCardShown = document.getElementById("card");

const startAgain = document.getElementById("startAgain");
if (
  startAgain !== null &&
  startAgain !== undefined &&
  buttonAsk instanceof HTMLButtonElement
) {
  startAgain.hidden = true;
  startAgain.addEventListener("click", () => empezarNuevo());
} else {
  console.error("El elemento con id startAgain no es un elemento button");
}

function muestraPuntuacion() {
  const scoreHtml = document.getElementById("score");
  if (
    scoreHtml !== null &&
    scoreHtml !== undefined &&
    scoreHtml instanceof HTMLHeadingElement
  ) {
    scoreHtml.innerHTML = score.toString();
  } else {
    console.error("El elemento con id score no es un elemento h1");
  }
}

function obtenerValorAleatorio() {
  const valorAleatorio: number = Math.floor(Math.random() * 10) + 1;
  return valorAleatorio;
}

const empezarNuevo = (): void => {
  initEvents();
};

const plantarse = (): void => {
  perderPartida();
  buttonWhatWouldHappen(false);
};

const whatWouldHappen = document.getElementById("whatWouldHappen");
if (
  whatWouldHappen !== null &&
  whatWouldHappen !== undefined &&
  whatWouldHappen instanceof HTMLButtonElement
) {
  whatWouldHappen.hidden = true;
  whatWouldHappen.addEventListener("click", () => queHubieraPasado());
} else {
  console.error("El elemento con id whatWouldHappen no es un elemento button");
}

const pideCarta = (): void => {
  const valorAleatorio: number = obtenerValorAleatorio();
  const valorRealCarta: number = calcularCarta(valorAleatorio);
  pintarCarta(valorRealCarta);
  const puntos: number = obtenerPuntosCarta(valorRealCarta);
  sumarPuntuacion(puntos);
  muestraPuntuacion();
  revisarPartida();
};

const queHubieraPasado = (): void => {
  const valorAleatorio: number = obtenerValorAleatorio();
  const valorRealCarta: number = calcularCarta(valorAleatorio);
  pintarCarta(valorRealCarta);
  const puntos: number = obtenerPuntosCarta(valorRealCarta);
  sumarPuntuacion(puntos);
  muestraPuntuacion();
  showMessage("Esta puntuación habrias sacado si hubieras seguido jugando");
  botonReset();
  buttonWhatWouldHappen(true);
};

function calcularCarta(valorRealCarta: number): number {
  return valorRealCarta > 7 ? valorRealCarta + 2 : valorRealCarta;
}

function sumarPuntuacion(carta: number): void {
  score = score + carta;
}

const revisarPartida = (): void => {
  if (score === 7.5) {
    ganarPartida();
  }
  if (score > 7.5) {
    perderPartida();
  }
};

function ganarPartida() {
  const mensajeAMostrar: string = seleccionMensaje();
  showMessage(mensajeAMostrar);
  botonReset();
}

function perderPartida() {
  const mensajeAMostrar: string = seleccionMensaje();
  showMessage(mensajeAMostrar);
  botonReset();
}

function pintarCarta(carta: number): void {
  if (
    newCardShown !== null &&
    newCardShown !== undefined &&
    newCardShown instanceof HTMLImageElement
  ) {
    newCardShown.src = mostrarCarta(carta);
  } else {
    console.error("El elemento con id newCardShown no es un elemento image");
  }
}

function botonesJugar(): void {
  buttonAskShow(false);
  buttonNoMoreCards(false);
  buttonStartAgain(true);
  buttonWhatWouldHappen(true);
}

function botonReset(): void {
  buttonAskShow(true);
  buttonNoMoreCards(true);
  buttonStartAgain(false);
}

function showMessage(mensaje: string): void {
  const message = document.getElementById("message");
  if (
    message !== null &&
    message !== undefined &&
    message instanceof HTMLElement
  ) {
    message.innerHTML = mensaje;
  } else {
    console.error("El elemento con id message no es un elemento HTML");
  }
}

function seleccionMensaje(): string {
  let mensaje = "";
  if (score <= 4) {
    mensaje = "Has sido muy conservador";
  } else if (score === 5) {
    mensaje = "Te ha entrado el canguelo eh?";
  } else if (score > 5 && score <= 7) {
    mensaje = "Casi casi...";
  } else if (score === 7.5) {
    mensaje = "¡Lo has clavado! ¡Enhorabuena!";
  } else {
    mensaje = "Game Over ¡Has perdido!";
  }
  return mensaje;
}

function buttonStartAgain(mostrar: boolean) {
  if (
    startAgain !== null &&
    startAgain !== undefined &&
    startAgain instanceof HTMLButtonElement
  ) {
    startAgain.hidden = mostrar;
  } else {
    console.error("El elemento con id startAgain no es un elemento button");
  }
}

function buttonNoMoreCards(mostrar: boolean) {
  if (
    noMoreCards !== null &&
    noMoreCards !== undefined &&
    noMoreCards instanceof HTMLButtonElement
  ) {
    noMoreCards.hidden = mostrar;
  } else {
    console.error("El elemento con id noMoreCards no es un elemento button");
  }
}

function buttonAskShow(mostrar: boolean) {
  if (
    buttonAsk !== null &&
    buttonAsk !== undefined &&
    buttonAsk instanceof HTMLButtonElement
  ) {
    buttonAsk.hidden = mostrar;
  } else {
    console.error("El elemento con id buttonAsk no es un elemento button");
  }
}

function buttonWhatWouldHappen(mostrar: boolean) {
  if (
    whatWouldHappen !== null &&
    whatWouldHappen !== undefined &&
    whatWouldHappen instanceof HTMLButtonElement
  ) {
    whatWouldHappen.hidden = mostrar;
  } else {
    console.error(
      "El elemento con id whatWouldHappen no es un elemento button"
    );
  }
}

function obtenerPuntosCarta(carta: number): number {
  return carta <= 7 ? carta : 0.5;
}

function mostrarCarta(carta: number): string {
  let card: string;
  switch (carta) {
    case 1: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    }
    case 2: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    }
    case 3: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    }
    case 4: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    }
    case 5: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    }
    case 6: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    }
    case 7: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    }
    case 10: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    }
    case 11: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    }
    case 12: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    }
    default: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
      break;
    }
  }

  return card;
}
