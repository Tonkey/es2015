let names = ["Nicklas", "Michael", "Mick", "Louise", "Lars", "Bo"];

//OBS! this is bad practice, and should be considered heavily before usage!
Array.prototype.myFilter = function(callback){
    let returnArr = [];
    this.forEach((value)=>{
        if(callback(value)) {returnArr.push(value);}
    });
    return returnArr;
};

Array.prototype.myMap = function(callback){
    let returnArr = [];
    this.forEach((value)=>{
        returnArr.push(callback(value))
    })
    return returnArr;
};

Array.prototype.myForEach = function(callback){
    for(var i = 0; i < this.length; i++){
        callback(this[i]);
    }
};


//use and print filter function
let filterNames = names.myFilter((name)=>{return name.length<=5});
console.log(filterNames);

//use and print map funcion
let mappedNames = names.myMap((name)=>{return `Hello ${name}`}).join("\n");
console.log(mappedNames)

names.myForEach((name)=>{console.log(">"+name)});
