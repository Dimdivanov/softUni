//tsc index.ts && node index.js
//Basic Types
let id: number = 5;
let company: string = 'My company name';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4];
let array: any[] = [1, true, 'hey'];
//Tuple
let person: [number, string, boolean] = [1, 'Mitaka', true];
//Tuple Array
let employee: [number, string][];
employee = [
    [1, 'Mitaka'],
    [2, 'Pesho'],
    [3, 'Gosho'],
];
//Unions
let age: string | number = 22;
age = '22';
//Enum - enumerated types
enum Directions1 {
    Up = 1,
    Down,
    Left,
    Right,
}
console.log(Directions1.Up); //it will display 1
enum Directions2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}
console.log(Directions2.Up);
//Objects
//type
type UserType = {
    id: number;
    name: string;
};
const userType: UserType = {
    id: 1,
    name: 'John',
};

//interface
interface User {
    //describing the object using interface
    name: string;
    id: number;
}

const user: User = {
    //the js object to be shaped as the interface
    name: 'Hayes',
    id: 0,
};

//Type Assertion
let cid: any = 1;
let customerId = <number>cid; //so we give type to the cid
let customerId2 = cid as number; // or like this

//functions
function addNum(x: number, y: number): number {
    return x + y;
}
//or func without return - we are using VOID (void is return type that doesn't return a value);
function log(message: string | number): void {
    console.log(message);
}
