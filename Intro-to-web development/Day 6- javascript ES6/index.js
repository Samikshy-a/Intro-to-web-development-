// const greet = (name) => {
//   console.log(`hello ${name}`);
// };

// greet('samikshya');


// const number=[10,20,30,40];
// number.push(100);
// number.push(80);
// console.log(number);
// number.pop();
// console.log(number);

const numberList=[ 10,23,31,40];
const doubleNumber=numberList.map((number)=>{
    return number*2;
});

// console.log(doubleNumber);

// numberList.map((number) => {
//     console.log (number);
// });

// numberList.filter((number)=>{

// });

const EvennumberList=numberList.filter((number)=>{
    return number%2===0;
    
});

// console.log(EvennumberList);

// const totalSum=numberList.reduce((accumulator,currentValue) => {
//     console.log (accumulator, currentValue);
//     return accumulator + currentValue;
// },0);


// console.log(totalSum);

// slice and splice

const fruits=['mango','orange','kiwi','licchi'];
fruits.slice(1,3);
const slicedFruits=fruits.slice(1);

// console.log(slicedFruits);

// const splicedFruits=fruits.splice(1,3);
fruits.splice(1,2,'grape','kiwi');

// console.log(fruits);

const names=['Alice','Bob','Charlie'];

const newName=[...names,'David','Eve'];

// console.log(newName);

const User={
    name: 'Samikshya',
    Age: 20,
    Address: 'Kathmandu,Nepal'
};

// console.log(User);

const Userupdate={
    ...User,
    isStudent: false
};

// console.log(Userupdate);

//destructuring

const [firstName,secondName]=newName;
// console.log(firstName);
// console.log(secondName);

const {name,Address}=Userupdate;
console.log(name,Address);





