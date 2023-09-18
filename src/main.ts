import "./style.css";

let score: number = 0;

muestraPuntuacion(score);

function muestraPuntuacion(puntuacion: number) {
  const score = document.getElementById("score");
  if (score !== null && score !== undefined) {
    score.innerHTML = puntuacion.toString();
  }
}

function dameCarta() {
  let newCard: number = Math.floor(Math.random() * 10) + 1;
  if (newCard > 7) newCard = newCard + 2;
  return newCard;
}

const buttonAsk = document.getElementById("askCard");

const noMoreCards = document.getElementById("noMoreCards");

const newCardShown = document.getElementById("card");

const message = document.getElementById("message");

const startAgain = document.getElementById("startAgain");

if (buttonAsk !== null && buttonAsk !== undefined) {
  buttonAsk.addEventListener("click", () => pideCarta(true));
}

if (noMoreCards !== null && noMoreCards !== undefined) {
  noMoreCards.addEventListener("click", () => plantarse());
}

if (startAgain !== null && startAgain !== undefined) {
  startAgain.hidden = true;
  startAgain.addEventListener("click", () => empezarNuevo());
}

const empezarNuevo = (): void => {
  score = 0;
  pintarCarta(score);
  showMessage("");
  muestraPuntuacion(score);
  botonesJugar();
};

const plantarse = (): void => {
  showMessage(seleccionMensaje());
  botonReset();
  botonWhatHappen();
};

const whatWouldHappen = document.getElementById("whatWouldHappen");

if (whatWouldHappen !== null && whatWouldHappen !== undefined) {
  whatWouldHappen.hidden = true;
  whatWouldHappen.addEventListener("click", () => pideCarta(false));
}

const pideCarta = (jugando: boolean): void => {
  const carta: number = dameCarta();
  pintarCarta(carta);
  score = score + obtenerValorCarta(carta);
  muestraPuntuacion(score);
  revisarPartida(jugando);
};

const revisarPartida = (jugando: boolean): void => {
  if (score > 7.5 && jugando) {
    showMessage(seleccionMensaje());
    botonReset();
  }
  if (!jugando) {
    showMessage("Esta puntuación habrias sacado si hubieras seguido jugando");
  }
};

function pintarCarta(carta: number): void {
  if (
    newCardShown !== null &&
    newCardShown !== undefined &&
    newCardShown instanceof HTMLImageElement
  ) {
    newCardShown.src = mostrarCarta(carta);
  }
}

function botonWhatHappen(): void {
  if (
    whatWouldHappen !== null &&
    whatWouldHappen !== undefined &&
    whatWouldHappen instanceof HTMLButtonElement
  ) {
    whatWouldHappen.hidden = false;
  }
}

function botonesJugar(): void {
  if (
    buttonAsk !== null &&
    buttonAsk !== undefined &&
    buttonAsk instanceof HTMLButtonElement
  ) {
    buttonAsk.hidden = false;
  }
  if (
    noMoreCards !== null &&
    noMoreCards !== undefined &&
    noMoreCards instanceof HTMLButtonElement
  ) {
    noMoreCards.hidden = false;
  }
  if (
    startAgain !== null &&
    startAgain !== undefined &&
    startAgain instanceof HTMLButtonElement
  ) {
    startAgain.hidden = true;
  }
  if (
    whatWouldHappen !== null &&
    whatWouldHappen !== undefined &&
    whatWouldHappen instanceof HTMLButtonElement
  ) {
    whatWouldHappen.hidden = true;
  }
}

function botonReset(): void {
  if (
    buttonAsk !== null &&
    buttonAsk !== undefined &&
    buttonAsk instanceof HTMLButtonElement
  ) {
    buttonAsk.hidden = true;
  }
  if (
    noMoreCards !== null &&
    noMoreCards !== undefined &&
    noMoreCards instanceof HTMLButtonElement
  ) {
    noMoreCards.hidden = true;
  }
  if (
    startAgain !== null &&
    startAgain !== undefined &&
    startAgain instanceof HTMLButtonElement
  ) {
    startAgain.hidden = false;
  }
}

function showMessage(mensaje: string): void {
  if (message !== null && message !== undefined) {
    message.innerHTML = mensaje;
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
    mensaje = "Game Over";
  }
  return mensaje;
}

function obtenerValorCarta(carta: number): number {
  let puntuacion: number;
  if (carta === 1) {
    puntuacion = 1;
  } else if (carta === 10 || carta === 11 || carta === 12) {
    puntuacion = 0.5;
  } else {
    puntuacion = carta;
  }
  return puntuacion;
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
