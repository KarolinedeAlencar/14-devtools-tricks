const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
console.log(dogs);
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

console.log('Hello!');

// Interpolated

console.log('Hello! I am %s string!', 'AAAAA')/

// Styled

// console.log('%c I am some great Text', 'font-size: 40px; color: red;');

// warning!

console.warn('OOOH NO :(');

// Error :|

console.error('Shit!');

// Info

console.info('Crocodiles eat 3-4 people per year.');

// Testing

// IF THE STATEMENT IS FALSE, IT WILL THROW A ERROR.
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'You did not select the right Element!');

// clearing

console.clear();

// Viewing DOM Elements

console.dir(p);

console.clear();


// Grouping together

dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);

  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);

  console.groupEnd(`${dog.name}`);
});

// counting

console.count('wes');
console.count('wes');
console.count('xxx');
console.count('wes');
console.count('wes');
console.count('xxx');
console.count('wes');
console.count('wes');
console.count('wes');


// timing

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });


console.table(dogs);
