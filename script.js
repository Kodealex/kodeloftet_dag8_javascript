console.log('Hei på deg hilsen alex');

// variables

// let variable saving the age 35 on the name age
let age = 35;
// Chaining method
console.log('min alder er: ' + age);
// Template literal
console.log(`min alder er: ${age}`);
console.log(typeof age);

//  const variable saving the string Alexander on the variable name name.
const name = "Alexander";
console.log('Mitt navn er: ' + name);
// Template literal:
console.log(`mitt navn er: ${name}`);
console.log('variabel typen er: ', typeof name);

// const variable saving the boolean true on the name isPresent
const isPresent = true;
console.log("Er tilstede: ", isPresent);
// Template literal:
console.log(`Er tilstedet: ${isPresent}`);
console.log(typeof isPresent);

// Two const variables saving strings
// One const variable saving the data from the two first variables.
const firstName = "Alexander";
const lastName = "Borge";
const fullName = firstName + " " + lastName;
console.log("Mitt fulle navn er:", fullName);


const htmlElement = document.querySelector("#javaScript")
htmlElement.textContent = fullName;