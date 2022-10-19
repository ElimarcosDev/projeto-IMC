function clique(){
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var resuimc = document.getElementById('resuimc')
    var resultado = document.getElementById('resultado')
    var containerimc = document.getElementById('containerimc')
    var imc = Number (peso) / ( Number (altura) * Number (altura));
    resuimc.innerHTML = `Seu IMC é ${imc}`
    containerimc.style.display = 'block'
    if (imc > 18,5){
        
    
    }
    
}