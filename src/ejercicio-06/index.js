// Escribe tu código aquí:
class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength)
    }
}
const square = new Square(7)
console.log('Area del cuadrado:', square.calculateArea())