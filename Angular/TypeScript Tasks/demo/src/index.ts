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
console.log(Directions2.Up); //it will display 'Up'
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
interface UserInterfacer {
    //describing the object using interface
    name: string;
    id: number;
}

const user: UserInterfacer = {
    //the js object to be shaped as the interface
    name: 'Hayes',
    id: 0,
};

//Type Assertion
let cid: any = 1;
let customerId = <number>cid; //so we give type to the cid
let customerId2 = cid as number; // or like this

//OBJECTS and interfaces
// we can use "?" optional if key is not included
interface UserInterface {
    readonly id: number; //readonly
    name: string;
    age?: number;
}
const user1: UserInterface = {
    id: 1,
    name: 'Peter',
};
//if property id is "readonly" you cannot assign user1.id = 5;

//FUNCTIONS interface
interface MathFunc {
    (x: number, y: number): number;
}
const addNum1: MathFunc = (x: number, y: number): number => x + y;
//functions
function addNum(x: number, y: number): number {
    return x + y;
}
//or func without return - we are using VOID (void is return type that doesn't return a value);
function log(message: string | number): void {
    console.log(message);
}

//CLASSES
//public, private, protected
//implementing interface to class
interface PersonInterface {
    name: string;
    id: number;
    register(): string;
}
class Person implements PersonInterface {
    public name: string;
    id: number;
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
    register(): string {
        return `${this.name} is now registered`;
    }
}
const person1 = new Person('Brad', 3);

//extending the Person Class
class Employee extends Person {
    position: string;
    constructor(name: string, id: number, position: string) {
        super(name, id);
        this.position = position;
    }
}

const emp = new Employee('Ivan', 32, 'Lead Dev')
console.log(emp.position);
