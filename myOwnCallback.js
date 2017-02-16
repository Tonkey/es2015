
let names = ["Nicklas", "Michael", "Mick", "Louise", "Lars", "Bo"];
let filterVar = 5

//filter accepts an array of objects and a callback. returns array of objects.
function myFilter(arr, callback) {
    var returnArr = [];
    arr.forEach((value) => {
        if (callback(value)) { returnArr.push(value); }
    })
    return returnArr
};

let filteredNames = myFilter(names, function (name) {
    return name.length <= filterVar;
})

console.log(`Array.Filter function: filterVariable=${filterVar} \n${filteredNames.join('\n')}\n`);

//array.map function:
function myMap(arr, callback){
    var returnArr = [];
    arr.forEach((value)=>{
        returnArr.push(callback(value));
    });
    return returnArr;
};

let mappedNamesArr = myMap(names, function(name){
    return `mapped name: ${name}`;
});
console.log(`Array.Map function: \n${mappedNamesArr.join('\n')}`);

// array.forEach function:
function myForEach(arr, callback){
    for(var i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}
console.log("Array.foreach function:");
myForEach(names, function(name){
    console.log(">"+name);
});

