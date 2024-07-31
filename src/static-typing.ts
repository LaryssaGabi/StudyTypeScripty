// Parâetro statico

let age: number = 20;
let fullName: String = "Laryssa Gabriela";
let isMarried: boolean = false;

//Inferência de Tipos
let animal = 'Dog';
let quantity = 2;

// Parâetro e retotnos de funções
function soma(a: number, b: number): number {
    const result = a + b;
    return result
}

// Parâetro e retotnos de funções
function greet(name: string): string | void {
    if (name) {
        return `Hello, ${name}!`
    }
}

// Funções com parâmetros opcionais
function stringOrNumberSize(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    }
    return value
}
