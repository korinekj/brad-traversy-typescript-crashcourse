"use strict";
// Basic Types
let id = 20;
let company = "Korinek WebDev";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3];
let arr = [1, "2", true];
// Tuple
// - specifikujeme konkrétní typy, které může pole obsahovat -> uspořádáná n-tice (uspořádaná znamená, že záleží na pořádí prvků)
let person = [5, "haha", true];
// Tuple Array
let employee;
employee = [
    [1, "Jarda1"],
    [2, "Jarda2"],
    [3, "Jarda3"],
];
// Union
let pid;
pid = 154;
// Enum
// (výčtový typ -> konečná omezaná množina pojmenovaných hodnot)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Right"] = 20] = "Right";
    Direction1[Direction1["Down"] = 21] = "Down";
    Direction1[Direction1["Left"] = 22] = "Left";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Right"] = "Right";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 14,
    name: "Jarda",
};
// Type Assertion
// - explicitně řekneme compileru, že chceme s entitou zacházet jako s jiným datovým typem
//
//      2. způsoby
//
//      1.
let code = 1;
let customerCode = code; // assertion -> trvdíme, že customerCode musí být type "number"
//      2. use this with JSX;
//let customerCode = code as string
// Functions
function addNum(a, b) {
    return a + b;
}
//   Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 14,
    name: "Jarda",
};
const add = (x, y) => {
    return x + y;
};
const sub = function (x, y) {
    return x - y;
};
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const otrok = new Employee(1, "Pan Otrok", "Zametač");
// Generics
// -used to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
// let numArray: number[] = getArray([1, 2, 3, 4]);
// let strArray: string[] = getArray(["Jarda", "Michal", "Kuba"]);
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Jarda", "Michal", "Kuba"]);
console.log(numArray, strArray);
