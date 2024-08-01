function getFirstElement<T>(data: T[]): T | null {
    if (!data.length) {
        return null;
    }
    const [fisrtElement] = data;
    return fisrtElement;
}

const stringArray: string[] = ['Lucas', 'Fernanda', 'Gabriel', 'Maria'];
const numberArray: number[] = [10, 220, 25, 8, 9]

console.log(getFirstElement<string>(stringArray))
console.log(getFirstElement<number>(numberArray))

// Para não ficar tipadno toda hora e coloncando number | boolean, utilizamos os generics
// <T> é o tipo genérico, que pode ser qualquer tipo de dado