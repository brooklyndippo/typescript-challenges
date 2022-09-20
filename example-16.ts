// Generics are amazing!

// The next function returns the next element of 
// arr. Since we don't know what type it is use 
// a generic.
function next<Type> (arr: Type[]) : Type {
  return arr.pop()
}

const arr1 = [1,2,3,4,5]
const arr2 = ['a', 'b', 'c']
console.log(next(arr1))
console.log(next(arr2))

// fill() fills an array with any number of a 
// repeated value. Since we don't know what type
// the value is use a generic. 
function fill<Type>(value: Type, count: number): Type[] {
  const arr : Type[] = new Array(count)
  arr.fill(value)
  return arr
}
// Note! error TS2550: i got this error every time I compiled this 
// but it seemed to work anyway? 

console.log(fill('a', 3))
console.log(fill(9, 4))
console.log(fill({}, 11))

// Shuffle randomizes an array. Since can` contain
// any type use a generic to return an array of 
// the generic type
function shuffle<Type>(arr: Type[]) : Type[] {
  const arrCopy : Type[] = [...arr]
  arrCopy.sort(() => 0.5 - Math.random())
  return arrCopy
}

const arr3 = ['a','b','c','d']
console.log(shuffle(arr3))

// This functions takes an array and returns a function.
// The function returns the next item in the array. 
function iterate<Type>(arr: Type[]) : () => Type {
  let i = 0
  return () => {
    i += 1
    if (i === arr.length) {
      i = 0
    } 
    return arr[i]
  }
}


const nextFruit = iterate(['🍓', '🍎', '🍐', '🍊'])
console.log(nextFruit())
console.log(nextFruit())
console.log(nextFruit())
console.log(nextFruit())
