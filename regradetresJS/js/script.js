function calcularRegraDeTres() {
    // Obter os valores dos inputs
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    var x = parseFloat(document.getElementById('x').value);

    // Verificar se os valores são números
    if (isNaN(a) || isNaN(b) || isNaN(c) ) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira valores numéricos.';
        return;
    }

    // Verificar se a, b e c são diferentes de zero
    if (a !== 0 && b !== 0) {
        // Calcular o valor de x usando a regra de três simples
        var resultado = (b * c) / a;
        document.getElementById('resultado').innerHTML = 'O valor desconhecido é: ' + resultado;
    } else {
        document.getElementById('resultado').innerHTML = 'Não é possível calcular a regra de três com denominador zero.';
    }
}
