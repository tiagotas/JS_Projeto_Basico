
window.onload = function() {
    
    tratar_formulario();
}


function tratar_formulario() {

    document.getElementById("meu_form").onsubmit = function() {

        var nome = document.getElementById("nome").value;

        alert("Oi " + nome);
        
        return false;
    }

}