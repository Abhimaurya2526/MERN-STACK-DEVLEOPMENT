
// for (i = 1; i < 100; i++) {

//     let sr;
//     sr = Math.sqrt(i);
//     if (sr - Math.floor(sr) == 0) {
//         console.log(i, "perfect square");
//     }

// }

const  arr = [434,32,456,12,66,35,99,5653,345,23465,350];
let  num = [];

for(let i of arr){
    if(i<100)
    num.push(i); 
}
console.log(num);