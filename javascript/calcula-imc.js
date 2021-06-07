var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var listaPacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < listaPacientes.length; i++) {
    var paciente = listaPacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //selecionando a coluna do IMC
    var tdImc = paciente.querySelector(".info-imc");
    var imc = calculaImc(peso, altura);
    paciente.classList.add(validaPaciente(imc));
    tdImc.textContent = imc;
}
function calculaImc(peso, altura) {
    //booleana = true or false
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    var resultadoImc;

    if (!pesoEhValido) {
        resultadoImc = "Peso invalido!"
    }
    if (!alturaEhValida) {
        resultadoImc = "Altura invalida!"
    }
    if (!pesoEhValido && !alturaEhValida) {
        resultadoImc = "Altura e peso  invalidos!"     
    }
    //validar se peso e altura são validos, se sim, calcular IMC
    if (pesoEhValido && alturaEhValida) {
        var imc = 0;
        imc = peso / (altura * altura);
        resultadoImc = imc.toFixed(2);
    }
    return resultadoImc;
}

function validaPaciente(imc) {
    var cssPacienteInvalido = "paciente";
    if (isNaN(imc)) {
        cssPacienteInvalido = "paciente-invalido";
    }
    return cssPacienteInvalido;
}
function validaPeso(peso) {
    if (peso <= 0 || peso >= 1000) {
        return false;
    } else {
        return true;
    }
}
function validaAltura(altura) {
    if (altura <= 0 || altura >= 3.00) {
        return false;
    } else {
        return true;
    }
}