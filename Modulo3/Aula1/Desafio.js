function imc(altura, peso){
    return peso / (altura * altura);
}

function tipoImc(imc){
    let tipoImc;
    if(imc<18.5){
        tipoImc = 'Abaixo do peso';
    }else if(imc >= 18.5 && imc < 25){
        tipoImc = 'Peso normal';
    }else if(imc >= 25 && imc < 30){
        tipoImc = 'acima do peso';
    }else{
        tipoImc = 'Obesidade';
    }

    return tipoImc;
}

function main(){

    console.log(`Seu imc é ${tipoImc(imc(1.75, 80))}`);

}
main();