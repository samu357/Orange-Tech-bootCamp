class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoPercurso(distancia, precoCombustivel) {
    return distancia * this.gastoMedioPorKm * precoCombustivel;
  }
}

const palio = new Carro('fiat', 'verde', 1 / 12)
console.log(palio.calcularGastoPercurso(107, 5));

const strada = new Carro('fiat', 'preto', 1 / 9);
console.log(strada.calcularGastoPercurso(107, 5));
