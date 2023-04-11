/* Write a function that creates a closure and returns a function that can add
a specific number to any number passed to it. For example, if the closure is
created with 5, the returned function should add 5 to any number passed
to it. */

function add(number) {
    return function(specificNumber) { //annonymous function
        console.log(number + specificNumber);
    }
}

let innerFunction = add(5);
console.log(innerFunction(60));

/* Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested. */

let carsArray = ["BMW", "AUDI", "BRV", "TOYOTA"];
const userInputValue = prompt("Enter the value to find in cars Array");
if(searchArray(carsArray, userInputValue)) {
    console.log("Value found in cars Array");
} else {
    console.log("Value not found in cars Array");
}
function searchArray(carsArray, findValue) {
    if (carsArray.length === 0) { 
        return false;
    }
    else if(carsArray[0] === findValue) {
        return true;
    } else {
        return searchArray(carsArray.slice(1), findValue);
    }
}

/* Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element. */



function addPara() {
    const paraText = prompt("Enter the paragraph text");
    let divElem = document.querySelector("div");
    let para = "<p>" + paraText + "</p>";
    divElem.innerHTML = para;
}

/*  Write a function that adds a new list item to an unordered list in an HTML
document. The function should take a string argument that will be used as
the text content of the new list item. */

function addList() {
    const listText = prompt("Enter Your Favourite Fruit");
    let listElem = document.getElementById("list");
    let list = `<li>${listText}</li>`
    listElem.innerHTML += list;
}

/* Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color */

let h1 = document.getElementById("h1");
const color = "#ffff00";
function addColor(element, color) {
    element.style.backgroundColor = color;
}
addColor(h1, color);

/* Write a function that saves an object to localStorage. The function should
take two arguments: the first argument is a string representing the key to
use for storing the object, and the second argument is the object to store. */

let carPrevData = localStorage.getItem("cars");
let cars = carPrevData ? JSON.parse(carPrevData) : [];

function carData() {
    let car = {
        carName: prompt("Enter your car name"),
        modelNo: prompt("Enter the car model no"),
        carColor: prompt("Enter the color of your car"),
        registrationYear: prompt("Enter the car registration year")
    };
    cars.push(car);
    localStorage.setItem("cars", JSON.stringify(cars));
}

/* Write a function that retrieves an object from localStorage. The function
should take one argument, which is a string representing the key used to
store the object. The function should return the object. */


function getCar(carsData) {
    console.log(JSON.parse(carsData));
    let ul = document.getElementById("cars");
    ul.innerHTML = `<li>${carsData}</li>`; 
}

function getCarData() {
    let carsData = localStorage.getItem("cars");
    getCar(carsData);
}

/* Write a function that takes an object and saves each property to
localStorage using the property name as the key and the property value as
the value. The function should also retrieve the object from localStorage
and return it as a new object. */


function getStudent(students) {
    localStorage.setItem("students", JSON.stringify(students));
    let studentData = localStorage.getItem("students");
    return studentData;
}

let students = {
    name: "Asad",
    rollNo: 23,
    age: 25,
    gender: "Male"
}

let stdData = getStudent(students);
console.log(stdData);
