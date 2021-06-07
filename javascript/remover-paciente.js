var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
    
    //efeito esmaecer
    event.target.parentNode.classList.add("fadeOut");

    //antes de executar o comando de remover,espere  os 500ms
    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500);

});
//target -> quem foi clicado, mas,quem é clicado é uma TD ,  e eu não quero excluir só a TD
    //parentNode -> para selecionar o elemento Pai na TD,no caso a TR 



/* var listaPacientes = document.querySelectorAll(".paciente");
/* listaPacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick" , function(){
        this.remove();
    });
}); */

//Event bubbling