var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {

    var listaPacientesTr = document.querySelectorAll(".paciente");

    if (this.value != "") {

        for (var i = 0; i < listaPacientesTr.length; i++) {

            var paciente = listaPacientesTr[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            //expressão regular
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                paciente.classList.add("ocultarLinha");//ocultar
            }
            else {
                paciente.classList.remove("ocultarLinha");//aparecer
            }
        }
    } else {
        for (var i = 0; i < listaPacientesTr.length; i++) {
            var paciente = listaPacientesTr[i];
            paciente.classList.remove("ocultarLinha");
        }

    }
});

