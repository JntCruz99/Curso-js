//preço da gasolina
const gasolina = 5.69;

const etanol = 5.80;

//gasto do carro por km
const gastCombustivel = 10;

//distancia
const distancia = 100;

const tipoCombusti = 'etanol'

let valorGasto = null;

if(tipoCombusti === 'gasolina'){
    valorGasto = (distancia/gastCombustivel) * etanol;
    
}else{
    valorGasto = (distancia/gastCombustivel) * gasolina;
}

console.log(valorGasto.toFixed(2));