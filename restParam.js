
function f(x,y,...rest){
    let results = [];
    results.push(`Sum: ${x+y}`)
    for(let i = 0; i < rest.length; i++){
        let currObj = rest[i];
        results.push(`rest value ${i+1} is a: ${currObj.constructor.name}`)
    }
    return results
}

console.log(f(5,2,true,2,"hello World",[1,2,3],new Date(),{}))


var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
// f(5,2,...restParams)

var chars = [... f(5,2,...restParams)] // this produces and error as f in this context is undefined.
