//* EXERCISE 1: Array Methods (push, pop, slice, splice)

// 1.1 Push and Pop
const fruits = ['apple', 'banana'];
fruits.push('orange');

const removedFruit = fruits.pop();
// fruits is now ['apple', 'banana']
// removedFruit is 'orange'

// 1.2 Slice vs Splice
const numbers = [1, 2, 3, 4, 5];

const slicedNumbers = numbers.slice(1, 4);
// [2, 3, 4]

numbers.splice(1, 2, 'two', 'three');
// numbers is now [1, 'two', 'three', 4, 5]


//* EXERCISE 2: Arrow Functions

// 2.1 Arrow function with template literals
const greet = (name) => {
  console.log(`hello ${name}`);
};

// 2.2 Arrow function with multiple parameters
const add = (a, b) => a + b;


//* EXERCISE 3: Map

const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
];

const studentNames = students.map(student => student.name);
// ['Alice', 'Bob', 'Charlie']


//* EXERCISE 4: Filter

const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Monitor', price: 300 },
  { name: 'Keyboard', price: 80 },
];

const affordableProducts = products.filter(product => product.price < 100);
// Mouse and Keyboard


//* EXERCISE 5: Reduce

const prices = [10, 20, 30, 40];

const largestPrice = prices.reduce((max, current) =>
  current > max ? current : max
);
// 40


//* EXERCISE 6: Array Destructuring

const colors = ['red', 'green', 'blue'];

const [firstColor, secondColor] = colors;
// firstColor = 'red'
// secondColor = 'green'


//* EXERCISE 7: Object Destructuring

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
};

// Basic destructuring
const { firstName, age } = person;

// Renaming
const { firstName: first } = person;

// Default values
const { country = 'USA' } = person;


//* CHALLENGE: Combine Everything

const employees = [
  { id: 1, name: 'Alice', department: 'IT', salary: 75000 },
  { id: 2, name: 'Bob', department: 'HR', salary: 65000 },
  { id: 3, name: 'Charlie', department: 'IT', salary: 80000 },
  { id: 4, name: 'Diana', department: 'Finance', salary: 70000 },
];

// Filter IT employees
const itEmployees = employees.filter(emp => emp.department === 'IT');

// Map to name and salary
const itNameSalary = itEmployees.map(({ name, salary }) => ({ name, salary }));

// Reduce to average salary
const averageITSalary =
  itEmployees.reduce((total, emp) => total + emp.salary, 0) / itEmployees.length;

// Destructure first IT employee
const [{ name: firstITName, salary: firstITSalary }] = itEmployees;