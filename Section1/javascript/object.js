// objects are used to store key value pairs

let user = {
    name : 'raju ',
    age : 25,
    email: 'raju@mail.com',
    'enroll-no' : 'A'
};

let key = 'enroll-no';

console.log(user.email);

console.log(user['name']); 

console.log(user[key]); 

console.log(user['enroll-no']); //enroll-no acess by this way only 

console.log(user);

console.log(user.adderess)
user.adderess = 'Lucknow-226016';
console.log(user);

user.name = 'shamu';//replace old value 

console.log(user);

let brand = 'Samsung';
let model = 'Galaxy S22';
let color = ['white','black','grey'];
let price = 60000;

let smartphone = {brand , model , color, price};
console.log(smartphone);

console.log(smartphone.color[1]);

//const printDetails = (obj) =>{
    //console.log(obj.brand);
  //  console.log(obj.model);

//}

//printDetails(smartphone);
//printDetails();

//2. passing object as an argument to a function 

const printDetails  = ({brand,model}) =>{
    console.log(brand);
    console.log(model);
}

printDetails(smartphone);



let myorders = [
    {id : 23456, name : 'T-Shirt',price: 500},
    {id : 23456, name : 'Tie',price: 550},
    {id : 23456, name : 'Trouser',price: 5000},
];


console.log(myorders[1].name);

const filorder = myorders.filter((obj) => {return obj.price < 1000})
console.log(filorder);





