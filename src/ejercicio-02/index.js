// Escribe tu código aquí:
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022
}
for (let prop in car){
    console.log('${prop}: ${car[prop]}')
}

class Coche {
    constructor(precio, marca, modelo, color, esado){
        this.precio = precio
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.estado = this.estado
    }

    reservar() {
        this.estado = 'disponible'
    }
}
const coche1 = new Coche ( 10000, 'Audi', 'A3', 'rojo', 'vendido')
const coche2 = new Coche ( 13000, 'renault', 'León', 'verde','disponible')
const coche3 = new Coche ( 180000, 'BMV', 'Suprema', 'Dorado', 'reservado')
const coche4 = new Coche ( 200000, 'Opel', 'Estrada', 'Azul', 'disponible')

const listaCochesConcesionarios = [coche1, coche2, coche3, coche4]

console.log('[1] - listaCochesConcesonarios:', listaCochesConcesionarios)

const cochesDisponibles = listaCochesConcesionarios.filter((Coche) => Coche.estado === 'disponible')

console.log('[2] - coches disponibles', cochesDisponibles)

coche3.reservar()

const cochesDisponibles2 = listaCochesConcesionarios.filter((Coche) => Coche.estado ==='disponible')

console.log('[3] - coches pintados: ', cochesDisponibles2)

const cochesPintados = listaCochesConcesionarios.map((Coche) => pintarCoches(Coche.color = 'rojo'))

console.log('[4] - coches pintados: ', cochesPintados)

function pintarCoches(Coche, color) {
    Coche.color = color
    return Coche

}
function pintarCoches(ListaCoches, color){
    return ListaCoches.map((Coche) => {
        pintarCoches(Coche, color)
    })
}

