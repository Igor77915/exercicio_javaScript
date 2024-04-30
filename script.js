
const form = document.getElementById('form-numero')

form.addEventListener('submit', function(e){
    e.preventDefault()
    resultado()

    function resultado(){
    let Numero1 = document.getElementById('campoA');
    let Num1 = Number(Numero1.value)
    let Numero2 = document.getElementById('campoB');
    let Num2 = Number(Numero2.value)
    const sucesso = 'sucesso !';
    const erro = 'Resultado inválido, tente novamente';

    if(Num1<Num2){
        alert(sucesso);
    } 
    else{
        alert(erro);
    }
}
}
)
