/* faça um programa para calcular o valor de uma viagem.calcular

voce terá tres variaveis, sendo elas:
1 - preço combustivel
2 - gasto medio de combustivel;
3 - distancia em km da viagem;

*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciEmKm = 100;

const litrosConsumidos = distanciEmKm / kmPorLitros;
console.log(litrosConsumidos);

const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto);


