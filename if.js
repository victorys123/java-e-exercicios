
let andar = 5;
let subindo = false;


while (andar !== 0) {
    alert(`Espere mais um pouquinho. andar atual: ${andar}`);
    
    if(andar === 1){
        subindo = true;
    }
    
    if (andar ===5){
        subindo = false;
    }
    
    if (subindo){
        andar ++;
    }
    
    else {andar --;
    }
}

alert("pode sair que já chegou ao térreo");




