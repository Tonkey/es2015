module.exports = function f(x,y,...rest){
    let results = [];
    results.push(`Sum: ${x+y}`)
    for(let i = 0; i < rest.length; i++){
        let currObj = rest[i];
        results.push(`rest value ${i+1} is a: ${currObj.constructor.name}`)
    }
    return results
}