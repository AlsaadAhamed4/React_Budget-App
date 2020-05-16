console.log(`************************************************`);
console.log('destructuring');

console.log(`************************************************`);
console.log(`object destruturing`);
console.log(`************************************************`);

const person = {
    name: 'Alsaad',
    age: 23,
    location: {
        city: 'majoor',
        temp: 36
    }
};

console.log(`Hello ${person.name} from ${person.location.city}`);

//destructuring

const { name, age } = person;
const { city, temp } = person.location;

console.log(`Hello am ${name} aged about ${age} years and currently reside in ${city} with temparature about ${temp} degree`);


//destructuring with naming and default value

const { name: pName = 'saad', age: pAge } = person;
const { city: pCity, temp: pTemp } = person.location;

console.log(`Hello am ${pName} aged about ${pAge} years and currently reside in ${pCity} with temparature about ${pTemp} degree`);


const book = {
    title: 'Two States',
    author: 'Ahamed',
    publisher: {
        name: 'Alsaad'
    }
}

console.log(`The book called ${book.title} was written by ${book.author} and published by ${book.publisher.name}`);

//destructuring and default value

const { title, author } = book;
const { name: pubName = 'self' } = book.publisher;

console.log(`The book called ${title} was written by ${author} and published by ${pubName}`);


//
// Array destructuring 
//

console.log(`************************************************`);
console.log(`Array destruturing`);
console.log(`************************************************`);

const arra = ['Alsaad','Ahamed'];

const [fName,lName,Aage=23] = arra;

console.log(`my first name is ${fName} and last name is ${lName} with age ${Aage}`);