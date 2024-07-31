enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'
}

type Person = {
    name: string;
    age: number;
    gender: Gender;
}
const person: Person = {
    name: 'John',
    age: 30,
    gender: Gender.MALE
}

function displayPersonInfo(person: Person): void {
    console.log(`Name: ${person.name}, Age: ${person.age}, Gender: ${person.gender}`)
}
displayPersonInfo(person)