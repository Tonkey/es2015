function makeIterator2(array) {
  var itt= {};
  itt[Symbol.iterator] = function() {
    var nextIndex = 0;
    return {
      next: function () {
        return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {done: true};
      }
    }
  }
  return itt;
}
//Here we can iterate using the for-of syntax:
var it2 = makeIterator2(['yo', 'ya']);
for(let i of it2){
  console.log(i);
}