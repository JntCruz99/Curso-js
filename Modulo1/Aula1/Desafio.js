//preço da gasolina
const gasolina = 5.69;

//gasto do carro por km
const gastCombustivel = 10;

//distancia
const distancia = 100;

const valorGasto = (distancia/gastCombustivel) * gasolina;

console.log(valorGasto.toFixed(2));