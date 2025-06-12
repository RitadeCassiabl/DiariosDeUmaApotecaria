function limparResultados() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultadoVogal").innerHTML = "";
    document.getElementById("resultadoLimites").innerHTML = "";
    document.getElementById("resultadoOrdem").innerHTML = "";
    document.getElementById("resultadoPositivoNegativo").innerHTML = "";
    document.getElementById("resultadoParImpar").innerHTML = "";
}

function MaiorMenor() {
    limparResultados();
    var num1 = parseFloat(document.getElementById("primeiro").value);
    var num2 = parseFloat(document.getElementById("segundo").value);
    var num3 = parseFloat(document.getElementById("terceiro").value);
    var num4 = parseFloat(document.getElementById("quarto").value);
    var num5 = parseFloat(document.getElementById("quinto").value);

    var maior, menor;
    var numeros = [num1, num2, num3, num4, num5];
    maior = Math.max(...numeros);
    menor = Math.min(...numeros);

    document.getElementById("resultado").innerHTML = "Maior: " + maior + " | Menor: " + menor;
}

function Vogal() {
    limparResultados();
    var letra = document.getElementById("letra").value.toLowerCase();
    var vogais = ['a', 'e', 'i', 'o', 'u'];

    if (vogais.includes(letra)) {
        document.getElementById("resultadoVogal").innerHTML = "A letra '" + letra + "' é uma vogal.";
    } else {
        document.getElementById("resultadoVogal").innerHTML = "A letra '" + letra + "' não é uma vogal.";
    }
}

function Limites() {
    limparResultados();
    var limiteInferior = parseFloat(document.getElementById("limiteInferior").value);
    var limiteSuperior = parseFloat(document.getElementById("limiteSuperior").value);
    var soma = 0
    var pares = []

    if (limiteInferior < limiteSuperior) {
        for (let i = limiteInferior; i <= limiteSuperior; i++) {
            if (i % 2 === 0) {
                soma += i
                pares.push(i)
            }
        }
    }
    document.getElementById("resultadoLimites").innerHTML = "soma dos pares: " + soma + " valores pares: " + pares;
}

function Ordem() {
    limparResultados();
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    var numeros = [a, b, c];
    numeros.sort((x, y) => x - y);

    document.getElementById("resultadoOrdem").innerHTML = numeros;
}

function PositivoNegativo() {
    limparResultados();
    var num = parseFloat(document.getElementById("inputPositivoNegativo").value);
    var resultado;

    if (num > 0) {
        resultado = true;
    } else if (num < 0) {
        resultado = false;
    } else {
        resultado = "O número é zero.";
    }

    document.getElementById("resultadoPositivoNegativo").innerHTML = resultado;
}

function ParImpar() {
    limparResultados();
    var num = parseFloat(document.getElementById("inputParImpar").value);
    var resultado;

    if (num % 2 == 0) {
        resultado = true;
    } else if (num % 2 != 0) {
        resultado = false;
    }

    document.getElementById("resultadoParImpar").innerHTML = resultado;
}

function handleSubmit(event) {
    event.preventdefault;
}
