//OBS! notice this assignment has not been finished due to issues concerning the document object!

//a)
var names = ["Nicklas", "Michael", "Mick", "Louise", "Lars", "Bo"];

let listItems = names.map((name)=>{
    return `<li>${name}</li>`;
});
//Unordered List
let ul = 
`<ul>
    ${listItems.join("\n")}
<ul>`;

//b)
var names = [{name: "Nicklas", phone: "23456"},{name:"Michael",phone:"68213618"},{name:"Mick",phone:"4567876543"}];

var tableData = names.map(function(object){
    return `<tr><td>${object.name}</td><td>${object.phone}</td></tr>`
}).join("\n");

let table = `<table><tbody><tr><th>name</th><th>phone</th></tr>
${tableData}
</tbody></table>`
console.log(table)

//c)

var myInnerHTML = document.getElementById("names").innerHTML = ul;

function myFilter(){
    var list = [];
    list = document.getElementById("names").innerHTML;
    list = list.filter(function(value, index){
        return names[index].name>3;
    })
}


