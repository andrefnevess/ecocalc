const display = document.getElementById("display");

function inserir(valor) {
  display.value += valor;
}

function limpar() {
  display.value = "";
}

function apagar() {
  display.value = display.value.slice(0, -1);
}

function calcular() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Erro";
  }
}

// Suporte ao teclado físico
document.addEventListener("keydown", (event) => {
  const teclasValidas = "0123456789+-*/.";
  if (teclasValidas.includes(event.key)) {
    inserir(event.key);
  } else if (event.key === "Enter") {
    calcular();
  } else if (event.key === "Backspace") {
    apagar();
  } else if (event.key === "Escape") {
    limpar();
  }
});
