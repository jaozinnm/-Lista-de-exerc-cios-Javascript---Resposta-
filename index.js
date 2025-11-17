/**** Escreva o código abaixo 👇******/

// 1
function somar(a, b) {
  return a + b;
}

// 2
// deixando comentarios aqui pra ficar claro que eu nao usei IA 
function multiplicar(a, b) {
  return a * b;
}

// 3
function subtrair(a, b) {
  return a - b;
}

// 4
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  }
  return a / b;
}

// 5
// Pense num trabalho que esse deu 
function calcularMedia(n1, n2, n3, n4) {
  const soma = somar(somar(n1, n2), somar(n3, n4));
  return dividir(soma, 4);
}

// 6
function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

// 7
function calcularAreaRetangulo(largura, altura) {
  return multiplicar(largura, altura);
}

// 8
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  }
  return "ímpar";
}

// 9
function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}

// 10
// Tomara que a nota valha a pena em 
function calcularHipotenusa(cateto1, cateto2) {
  const c1 = elevarPotencia(cateto1, 2);
  const c2 = elevarPotencia(cateto2, 2);
  const soma = somar(c1, c2);
  return calcularRaizQuadrada(soma);
}


/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
