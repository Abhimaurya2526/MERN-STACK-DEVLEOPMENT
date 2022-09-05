const nums = [34,67,12,45,90,'nice'];
console.log(nums);
console.log(typeof(nums));

// Array can contain multiple type of data 
// Array support indexing 
// Array are dynamic
// Array are dynamic
// Array are mutable 

const fruits = ['apple','banana','mango','orange','pineapple '];
// Indexing - accessing a single element 
console.log(fruits[3]);
//console.log(fruits[100]);//undefined
// Slicing -accessig mutiple element 
//console.log(fruits.slice(1,4));
//console.log(fruits.slice(1));
//console.log(fruits.slice(1,10));
//console.log(fruits.slice(2,10));

// removing elements

fruits.splice(3,2);
//fruits.splice(1);
//console.log(fruits);
//console.log(fruits);

//Adding new element 

fruits.push('cherry');
console.log(fruits);

fruits.pop();
console.log(fruits);

// traversing using index 

for (let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}
// traversing using for-of loop 
console.log('--------traversing using for-of loop---- ')
for (let fr of fruits ){
    console.log(fr);
}

console.log('--using forEach----')
fruits.forEach( (n)   => {
    console.log(n);
})





const numbers = [2, 5, 7, 3, 5, 4, 3];

// WAP to square each number in above array and store them in array

let newNums = [];
for(let i of numbers){
    newNums.push(i*i);
}
console.log(newNums);