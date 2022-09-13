Resultado= []

function limpar() {
    document.getElementById("Fabio").value = ''
    document.getElementById("Fernando").value = ''
    document.getElementById("Carlos").value = ''
    };
function calcular(){
    deslocamento = document.getElementById("Fabio").value
    tempo = document.getElementById("Fernando").value
    Vm = document.getElementById("Carlos").value 
    
    if (deslocamento == '' || tempo == ''){
        alert("Preencha os campos corretamente!")
    } else {
        var Vm = (deslocamento/tempo).toFixed(2)
    
        document.getElementById('Carlos').value = Vm
    
    
        Resultado.push(Vm)
    }

    document.getElementById("Juca").value += Vm + "\n"
    }