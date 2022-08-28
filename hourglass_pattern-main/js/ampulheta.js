let i, j, k;

let blocks = "";

// Função para filtrar input do usuario

function filterUserInput() {
  while (true) {
    let input = prompt("Digite o tamanho da Ampulheta: ");

    if (input == null) {
      alert("Bye!");
      return false;
    } else {
      if (input.length <= 0 || isNaN(input)) {
        alert("Valor invalido!");
      } else if (input < 20) {
        alert("Valor minimo de 20, favor tente novamente.");
      } else {
        return parseInt(input);
      }
    }
  }
}

let userInput = filterUserInput();

// Pattern inicial

function drawPattern() {
  // Parte Superior
  for (i = 1; i <= userInput; i++) {
    for (j = 1; j <= i; j++) {
      if (j == 1) {
        blocks += "#";
      } else {
        blocks += " ";
      }
    }

    for (j = i; j <= userInput; j++) {
      blocks += "#";
    }

    for (j = i; j <= userInput; j++) {
      blocks += "#";
    }

    for (j = 1; j <= i; j++) {
      if (j == i) {
        blocks += "#";
      } else {
        blocks += " ";
      }
    }

    blocks += "\n";
  }

  // Parte inferior
  for (i = 1; i <= userInput; i++) {
    for (j = i; j <= userInput; j++) {
      if (i == userInput) {
        blocks += "#";
      } else {
        if (j == i) {
          blocks += "#";
        } else {
          blocks += " ";
        }
      }
    }
    for (k = 0; k < 2 * i; k++) {
      if (i == 1 || i == userInput) {
        blocks += "#";
      } else {
        if (k == 0 || k == 2 * i - 1) {
          blocks += "#";
        } else {
          blocks += " ";
        }
      }
    }
    for (j = i; j <= userInput; j++) {
      if (j == userInput) {
        blocks += "#";
      } else {
        blocks += " ";
      }
    }
    blocks += "\n";
  }
  document.write(`<pre>${blocks}</>`);
}

// Pattern apos o termino do tempo da ampulheta

function futurePattern() {
  // Parte superior
  for (i = 1; i <= userInput; i++) {
    for (j = 1; j <= i-1; j++) {
      if (j == 1) {
        blocks += "#";
      } else {
        blocks += " ";
      }
    }

    for (k = 1; k <= userInput * 2 - (2 * i - 1); k++) {
      if (i == 1 || k == 1 || k == userInput * 2 - (2 * i - 1)) {
        blocks += "#";
      } else {
        blocks += " ";
      }
    }

    for (j = 0; j < i; j++) {
      blocks += " ";
    }
    for (j = 1; j <= i; j++) {
      if (j == 1) {
        blocks += "#";
      } else {
        blocks += " ";
      }
    }
    blocks += "\n";
  }

  // Parte Inferior
  for (i = 1; i <= userInput; i++) {
    for (j = i; j <= userInput -1; j++) {
      if (i == userInput) {
        blocks += "#";
      } else {
        if (j == i) {
          blocks += "#";
        } else {
          blocks += " ";
        }
      }
    }
    for (k = 0; k < 2 * i; k++) {
      if (i == 1 || i == userInput) {
        blocks += "#";
      } else {
        if (k == 0 || k == 2 * i - 1) {
          blocks += " ";
        } else {
          blocks += "#";
        }
      }
    }
    for (j = i; j <= userInput; j++) {
      if (j == userInput) {
        blocks += "#";
      } else {
        blocks += " ";
      }
    }

    blocks += "\n";
  }
  document.write(`<pre>${blocks}</>`);
}
