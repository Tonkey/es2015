function* idMaker() { // simple generator(infinite iterator in this example). keeps track of own state...
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker(); // "Generator { }"

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2


var myIterable = {}; //simple example of user-defined iterables.
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

// for (let value of myIterable) { 
//     console.log(value); 
// }

// console.log([...myIterable]); // [1, 2, 3]

function* makeNames() {

  let firstNames = ["Lars", "Jan", "Ida", "Tine","Thomas"];
  let lastNames = ["Mortensen","Peterson","Obama","Jensen","Hansen"];


    while(true)
        yield `firstName: ${firstNames[[Math.floor(Math.random()*firstNames.length)]]}, lastName: ${lastNames[[Math.floor(Math.random()*lastNames.length)]]}`
    
}

let index = 0;
for(let name of makeNames()){
  console.log(name);
  if(index++ === 50){
    break;
  }
}
