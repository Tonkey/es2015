//forEach, filter, map, reduce, join


let namesArr = ["Nicklas", "Michael", "Mick", "Louise", "Lars", "Bo"];

let filteredNameArr = namesArr.filter((name)=>{return name.length<=5;});

//console.log(filteredNameArr);

let mappedNameArr = namesArr.map((name)=>{
    return `<td> ${name} </td>`;
}).join("\n");

//console.log(mappedNameArr);

let table = `<table><tbody>  
${mappedNameArr}  
</tbody></table>`;

console.log(table)


