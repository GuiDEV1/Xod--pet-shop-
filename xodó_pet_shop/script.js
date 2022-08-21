function acionaAlert() {
   alert('Parabnes pela sua atitude!!')  
}

function acionaAlert2() {
    alert('Em breve retornaremos seu contato!!')
}

function mascaraCpf() {

    var cpf = document.getElementById('cpf');
    if(cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += '.'
    }

    else if (cpf.value.length == 11) {
        cpf.value += '-'
    }

}