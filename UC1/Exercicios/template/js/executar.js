function showResultado(textoResultado) {
    alertaRow = document.querySelector("#idAlertRow");
    alerta = document.querySelector("#idAlerta");
    
    
    alerta.appendChild(document.createTextNode(textoResultado));
    alertaRow.style.display = 'block';
}

function escondeResultado() {
    alerta = document.querySelector("#idAlertRow");
    alerta.style.display = 'none';
}

btn = document.querySelector("#idCard");

btn.addEventListener('click', function () {

    escondeResultado();

   
    alert(resultado);
    showResultado(resultado);

    console.log(resultado);
});
