const evens = [1,2,3]// cant do map on a non-existing array...

odds  = evens.map(v => v + 1) // this works because v + 1 increments v.
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)

var odds = evens.map(v => v++);