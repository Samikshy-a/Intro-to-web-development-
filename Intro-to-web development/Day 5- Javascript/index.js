// Javascript variables

var fullName = "Samikshya Aryal";
let address = "Kathmandu,Nepal";
const bloodGroup = "B+";

console.log("Full Name:", fullName);
console.log("Address:", address);
console.log("Blood Group:", bloodGroup);


// Data Type

let name="Samikshya";

let age=20;

let isstudent=false;

let hobbies=['singing','Dancing','Eating'];

let user={
    name:"Samikshya",
    age:20,
    isstudent:false,
    hobbies:['singing','Dancing','Eating']

};
console.log(hobbies[0]) // how to print specific item 

console.log(user['name'])
console.log(user.age)

function greet(name){
    console.log('Welcome',name);
}
greet('Samikshya.');

// DOM Manipulation

const HeadingElementById=document.getElementById('heading-2');
console.log("Heading element:",HeadingElementById);

const headingElementByQuery=document.querySelector('#heading-2');
console.log("heading element by query selector: ",headingElementByQuery);

headingElementByQuery.textContent="Get element by query selector";
headingElementByQuery.style.color="yellow";
headingElementByQuery.style.fontsize='24px';

const buttonElement=document.querySelector('.btn');

buttonElement.addEventListener('click',function() {
    alert('Button clicked');
    console.log('Button clicked');
});
