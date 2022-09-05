// defining the function 

// calling the function
// addNums(4,7);
// console.log(n);

function fact(n){
    let a=1;
    if(n==1||n==0) 
    return a;
    fact=n*fact(n-1);
    return fact;    
}
let n=5;
a=fact(n);
console.log("The Factorial of "+n+" is "+a+" ");




const expr = '4';
switch (expr){
    case '4':
    console.log('value is 4 ');
    break;
    case '5':
    console.log('value is 5 ');
    break;
    case '9':
    console.log('value is 9 ');
    break;
    default:
    console.log('value is not present');    
}


const sum_mul = function(num1,num2){
    s = num1+num2;
    m = num1 * num2;
    return [s,m];
}

const [sum, prod] = sum_mul(4,6);
console.log(sum, prod);

const checkperfect =(m) => {
    console.log(m**0.5);
     if (m**0.5 === parseInt(m**0.5)){
        console.log('perfect square');
    }
        else{
            console.log('not perfect square'); 
        }
     

}
checkperfect(36);

