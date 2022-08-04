// Task 2.1
function fibonacciSequence (limit){
  let firstSeed = 0;
  let secondSeed = 1;
  let sequence = '0, 1';


  for(i = 2; i < limit; i ++){
          let sum = firstSeed + secondSeed;
          sequence += ',' + sum;
          firstSeed = secondSeed;
          secondSeed = sum;      
  }
  console.log(sequence)  
}
fibonacciSequence(10);


// Task 2.2 version 1
//My Version
/*
let person = {name: 'Magnus', age: 33, proffesion: 'coder'};
newPerson(person);


function newPerson(person){
  for(let key in person)
  console.log(key, person[key]);
}
*/

// Task 2.2 version 2
let person = newPerson ('Magnus', 33, 'coder');
console.log(person);


function newPerson(name, age, proffesion){
  return {
      name,
      age,
      proffesion
  };
}


//Task 2.3
let person1 = {name: 'Magnus', age: 33, proffesion: 'coder'};
let person2 = {name: 'Eirik', age: 34, proffesion: 'coder'};


console.log(nameOfTheOldestPerson(person1, person2));


function nameOfTheOldestPerson(person1, person2){
  if(person1.age > person2.age) return person1.name;
  else if(person1.age < person2.age) return person2.name;
  else if(person1.age === person2.age) return 'Equally old';
}