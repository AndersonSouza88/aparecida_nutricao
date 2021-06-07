var botaAdicionar = document.querySelector("#adicionar-paciente");

botaAdicionar.addEventListener("click", function (enviar) {
    enviar.preventDefault();
    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente mo formulário
    var objPaciente = obtemPacienteDoFormulario(form);


    var informaErros = validaDados(objPaciente);
    var ulErros = document.querySelector("#listaErrosUl");
    ulErros.innerHTML = "";

    if (informaErros.length == 0) {//quando não existir erros, crie a linha e insira os valores.
        adicionaPacienteNaTabela(objPaciente);
       
        form.reset();
    } else {
        exibeMensagensDeErro(informaErros, ulErros);
    }
});

function obtemPacienteDoFormulario(form) {
    var objPaciente = {
        //capturando os valores dos input's
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return objPaciente;
}

function montaTr(objPaciente) {
    //criando uma linha para table
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //criando as td da linha da table
    var nomeTd = montaTd(objPaciente.nome, "nome");
    var pesoTd = montaTd(objPaciente.peso, "peso");
    var alturaTd = montaTd(objPaciente.altura, "altura");
    var gorduraTd = montaTd(objPaciente.gordura, "gordura");
    var imcTd = montaTd(objPaciente.imc, "imc");

    //atribuindo as td's a tr paciente
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    //calculando IMC dos novos itens adicionados no formulario
    pacienteTr.classList.add(validaPaciente(objPaciente.imc));
    return pacienteTr;
}
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add("info-" + classe);
    return td;
}

function validaDados(pacienteErro) {
    var listaErros = [];

    //validando campos vazios

    if (pacienteErro.nome == "") {
        listaErros.push("Preencha o campo NOME!!");
    }
    if (pacienteErro.peso == "") {
        listaErros.push("Preencha o campo PESO!!");

    }
    else if (!validaPeso(pacienteErro.peso) && pacienteErro.peso != "") {
        listaErros.push("Peso invalido!");
    }
    if (pacienteErro.altura == "") {
        listaErros.push("Preencha o campo ALTURA!!");

    }
    else if (!validaAltura(pacienteErro.altura) && pacienteErro.altura != "") {
        listaErros.push("Altura invalida!");
    }
    if (pacienteErro.gordura == "") {
        listaErros.push("Preencha o campo GORDURA!!");
    }
    return listaErros;
}

function exibeMensagensDeErro(informaErros, ulErros) {

    informaErros.forEach(function (i) {
        var li = document.createElement("li");
        li.textContent = i;
        ulErros.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}






/* //adicionando as classes nas TD's
nomeTd.classList.add("info-nome");
pesoTd.classList.add("info-peso");
alturaTd.classList.add("info-altura");
gorduraTd.classList.add("info-gordura");
imcTd.classList.add("info-imc");
*/
/*  //preenchendo os valores de texto na td's
 nomeTd.textContent = objPaciente.nome;
 pesoTd.textContent = objPaciente.peso;
 alturaTd.textContent = objPaciente.altura;
 gorduraTd.textContent = objPaciente.gordura;
 imcTd.textContent = objPaciente.imc; */
