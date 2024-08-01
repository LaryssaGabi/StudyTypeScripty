/*
PARTIAL = consgue manter tudo opcional  não precisando cria um novo user, mantendo o memso tipo User 
e mofificar  a essencia dele utilizando o utility types
*/
type User = {
    id: number;
    userName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};

const user: User = {
    id: 1,
    userName: "John",
    password: "1234",
    createdAt: new Date(),
    updatedAt: new Date(),
};

type PartialUser = Partial<User>;

const user2: PartialUser = {
    id: 2,
}
const user3: PartialUser = {
    userName: "Laryssa",
    password: "12345"
}



/*
--------------------------------------------------------------

OMIT = é o inverso do partial, ele ignora as propriedades que não foram passadas
*/

type NewUser = Omit<User, 'id' | 'userName'>;

/*
const user4: NewUser = {
    password: "12345"
}
*/



/*
---------------------------------------------------------------

PICK = seleciona as propriedades que foram passadas
*/

type SearchUser = Pick<User, 'userName'>
const  searchUser: SearchUser ={
    userName: "Laryssa"
}