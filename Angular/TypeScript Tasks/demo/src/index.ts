//tsc index.ts (to transpile the js file) && node index.js (then to run the js) - use playground instead
//BASIC TYPES
let id: number = 5;
let company: string = 'My company name';
let isPublished: boolean = true;
let x: any = 'Hello';
//ARRAYS
//for single arrays
let ids: number[] = [1, 2, 3, 4];
let idss: string[] = ['1', '2', '3', '4'];
let array1: Array<number> = [1, 2, 3];
//for multiple types in array
let array2: (number | string)[];
//for any - not recommended
let array: any[] = [1, true, 'hey'];
//TUPLES
//Tuple Array - fixed length and type array
let person: [number, string, boolean] = [1, 'Mitaka', true];
let employee: [number, string][];
employee = [
    [1, 'Mitaka'],
    [2, 'Pesho'],
    [3, 'Gosho'],
];
//Union
let age: string | number = 22;
//LITERAL types useful with combo with UNION types
let ageGroup: 'young' | 'old'; //can use literal type so it should match the exact string
age = '22';
//Enum - to assign labels - exists only in TS
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
//Objects - type and interface
//TYPE ALLIASE
type Combinable = number | string; //union like type
type Description = 'works' | 'doesnt Work'; //type literals 
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
//implementing interface to class
interface PersonInterface {
    name: string;
    id: number;
    register(): string;
}
class Person implements PersonInterface {
    //public, private, protected
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

//SUBCLASSES
//extending the Person Class
class Employee extends Person {
    position: string;
    constructor(name: string, id: number, position: string) {
        super(name, id);
        this.position = position;
    }
}

const emp = new Employee('Ivan', 32, 'Lead Dev');
console.log(emp.position);

//GENERICS - for building reusable components

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['Mitaka', 'John', 'Nikolet']);

strArray.push('hello');
