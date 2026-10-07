
let arr = [1,2,3,4,"five","Jane",false]
console.log(arr)//(7) [1, 2, 3, 4, 'five', 'Jane', false]
console.log(arr.length)//7


console.log(arr[3])//4
console.log(arr.at(4)) //"five"
console.log(arr.at(-2)) //"Jane"


arr[1] = 'two'
console.log(arr)//(7) [1, 'two', 3, 4, 'five', 'Jane', false]


let sliced = arr.slice(3,6)
console.log(sliced) //(3) [4, 'five', 'Jane']

let reversed = sliced.reverse()
console.log(reversed) //(3) ['Jane', 'five', 4]

console.log(arr.includes("Jane")) //true


let numbers = [100,200,"jan","Feb",1,2,3,4,5,true,500]
numbers.unshift(200,"Mike")
console.log(numbers)//(13) [200, 'Mike', 100, 200, 'jan', 'Feb', 1, 2, 3, 4, 5, true, 500]
numbers.push("March","April")
console.log(numbers)//(15) [200, 'Mike', 100, 200, 'jan', 'Feb', 1, 2, 3, 4, 5, true, 500, 'March', 'April']

numbers.shift()
console.log(numbers)//(14) ['Mike', 100, 200, 'jan', 'Feb', 1, 2, 3, 4, 5, true, 500, 'March', 'April']

numbers.pop()
console.log(numbers)//(13) ['Mike', 100, 200, 'jan', 'Feb', 1, 2, 3, 4, 5, true, 500, 'March']

//splice to add elements without deleting

let new_array = ["Mon","Tue","Wed","Thur"]

new_array.splice(2,0,"Jack","Jill")
console.log(new_array)
//['Mon', 'Tue', 'Jack', 'Jill', 'Wed', 'Thur']


//splice to delete without replacement
new_array.splice(4,2)
console.log(new_array)
//(4) ['Mon', 'Tue', 'Jack', 'Jill']


//splice to delete with replacement
new_array.splice(2,2,"Wed","Thur")
console.log(new_array)
   //(4) ['Mon', 'Tue', 'Wed', 'Thur']