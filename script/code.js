function clique(){
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var resuimc = document.getElementById('resuimc')
    var resultado = document.getElementById('resultado')
    var containerimc = document.getElementById('containerimc')
    var imc = Number (peso) / ( Number (altura) * Number (altura));
    var resetbut = document.getElementById('reset')


    if( peso == 0 || altura == 0){
        alert("PREENCHA TODOS OS DADOS")
    }
    else{
        resetbut.style.display = 'inline'  
        containerimc.style.display = 'block'
    if (imc < 18.5){
        resuimc.innerHTML = `Seu IMC é ${imc.toFixed(1)} <Br> Você esta abaixo do peso!`
    
    }
    else if (imc > 18.5 && imc < 25){
        resuimc.innerHTML = `Seu IMC é ${imc.toFixed(1)} <Br> Você esta no peso ideal!`
    }
    else if (imc >= 25 && imc < 30){
        resuimc.innerHTML = `Seu IMC é ${imc.toFixed(1)} <Br> Você esta levemente acima do peso!`
    }
    else if (imc >= 30 && imc < 35){
        resuimc.innerHTML = `Seu IMC é ${imc.toFixed(1)} <Br> Você esta com obesidade grau I!`
    }
    else if (imc >= 35 && imc < 40){
        resuimc.innerHTML = `Seu IMC é ${imc.toFixed(1)} <Br> Você esta com obesidade grau II (severa)!`
    }
    else if (imc > 40){
        resuimc.innerHTML = `Seu IMC é ${imc.toFixed(1)} <Br> Você esta com obesidade grau III (mórbida)!`
    }
    }


    
    
}
function resetpage(){
    window.location.reload();
}