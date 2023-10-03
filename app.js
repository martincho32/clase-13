const autosImportados = require('./autos')

let concesionaria = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    let autoEncontrado = this.autos.find((auto) => auto.patente == patente)
    if (autoEncontrado) {
      return autoEncontrado
    } else {
      return null
    }
  },
  venderAuto: function (patente) {
    let auto = this.buscarAuto(patente)
    if (auto) {
      auto.vendido = true && false
    }
  },
  autosParaLaVenta: function () {
    return this.autos.filter((auto) => auto.vendido == false)
  },
  autosNuevos: function () {
    return this.autosParaLaVenta().filter((auto) => auto.km < 100)
  },
  listaDeVentas: function () {
    let autosVendidos = this.autos.filter((auto) => auto.vendido == true)
    return autosVendidos.map((auto) => auto.precio)
  },
  totalDeVentas: function () {
    return this.listaDeVentas().reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
  },

  puedeComprar: function (auto, persona) {
    let pagoPorCuotaDelAuto = auto.precio / auto.cuotas
    if (
      persona.capacidadDePagoEnCuotas >= pagoPorCuotaDelAuto &&
      persona.capacidadDePagoTotal >= auto.precio
    ) {
      return true
    } else {
      return false
    }
  },
  autosQuePuedeComprar: function (persona) {
    return this.autosParaLaVenta().filter((auto) =>
      this.puedeComprar(auto, persona)
    )
  },
}

// Primer ejercicio del PG

let autos = [
  {
    marca: 'Ford',
    modelo: 'Fiesta',
    precio: 150000,
    km: 200,
    color: 'Azul',
    cuotas: 12,
    anio: 2019,
    patente: 'APL123',
    vendido: false,
  },
  {
    marca: 'Toyota',
    modelo: 'Corolla',
    precio: 100000,
    km: 0,
    color: 'Blanco',
    cuotas: 14,
    anio: 2019,
    patente: 'JJK116',
    vendido: false,
  },
]
module.exports = autos
