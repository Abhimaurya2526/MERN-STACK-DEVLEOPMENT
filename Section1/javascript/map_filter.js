// map is a function of array
// map returns a new array 

arr1 = [23, 4, 6, 8, 5, 3];
const newnums = arr1.map((n) => { return n * n });
console.log(newnums);

prices = [100, 99, 4724, 999, 3199];
const new1 = prices.map((n) => { return "$" + n }) // call back
console.log(new1);

const arr2 = [23, 43, 6, 8, 10, 3, 6, 27];

// const even1 = arr2.map((n1) => {
//     if (n1 % 2 == 0)
//         return n1 / 2;
//     else
//         return n1 * 2;

// });
// console.log(even);

//curley bracket with return statement 

const even = arr2.map((n) => n%2 == 0 ? n/2 : n*2);      
console.log(even);

// Filter

const filteredArr2 = arr2.filter((a) => {return a%2==0})
console.log(filteredArr2);



