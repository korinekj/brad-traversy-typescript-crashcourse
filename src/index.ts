// Basic Types

let id: number = 20;
let company: string = "Korinek WebDev";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3];
let arr: any = [1, "2", true];

// Tuple
// - specifikujeme konkrétní typy, které může pole obsahovat -> uspořádáná n-tice (uspořádaná znamená, že záleží na pořádí prvků)
let person: [number, string, boolean] = [5, "haha", true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Jarda1"],
  [2, "Jarda2"],
  [3, "Jarda3"],
];

// Union
let pid: string | number;

pid = 154;

// Enum
// (výčtový typ -> konečná omezaná množina pojmenovaných hodnot)
enum Direction1 {
  Up = 1,
  Right = 20,
  Down,
  Left,
}

enum Direction2 {
  Up = "Up",
  Right = "Right",
  Down = "Down",
  Left = "Left",
}

// Objects
type User = { id: number; name: string };

const user: User = {
  id: 14,
  name: "Jarda",
};

// Type Assertion
// - explicitně řekneme compileru, že chceme s entitou zacházet jako s jiným datovým typem
//
//      2. způsoby
//
//      1.
let code: any = 1;

let customerCode = <number>code; // assertion -> trvdíme, že customerCode musí být type "number"

//      2. use this with JSX;
//let customerCode = code as string

// Functions
function addNum(a: number, b: number): number {
  return a + b;
}

//   Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  id: number;
  readonly name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 14,
  name: "Jarda",
};

//

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => {
  return x + y;
};
const sub: MathFunc = function (x: number, y: number) {
  return x - y;
};

// Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registred`;
  }
}

const jarda = new Person(14, "Jarda");
const jaja = new Person(25, "Jaja");

// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const otrok = new Employee(1, "Pan Otrok", "Zametač");

// Generics
// -used to build reusable components
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

// let numArray: number[] = getArray([1, 2, 3, 4]);
// let strArray: string[] = getArray(["Jarda", "Michal", "Kuba"]);

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["Jarda", "Michal", "Kuba"]);

console.log(numArray, strArray);
