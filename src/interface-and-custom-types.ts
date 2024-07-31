type Coordinates = {
    x: number;
    y: number;
}



function calculateDistance(pointA: Coordinates, pointB: Coordinates): number {
    const distanceX = pointB.x - pointA.x;
    const distanceY = pointB.y - pointA.y;

    const result = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    return result;
}

const cordinateA: Coordinates = {
    x: 10,
    y: 20,
};
const cordinateB: Coordinates = {
    x: 15,
    y: 30,
};

console.log(calculateDistance(cordinateA, cordinateB))

//////////////////////////////////////


// Car is an interface, so we can't create an instance of it const myCar: Car = new Car(); 
// Error: Type 'Car' does not have a constructor.


interface Car {
    brand: string;
    model: string;
    year: number;
    startEngine: () => void
}

// We can create an object that conforms to the Car interface 

const myCar: Car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    startEngine: () => console.log('Vroom'),
}

function drive(car: Car): void {
    console.log(`Driving ${car.brand} and model is ${car.model} and your year is ${car.year} `)
    car.startEngine()
}
// We can pass the object to the function drive() and it will work as expected 
drive(myCar)