function is_prime(num){
    let flag = 1;
    if(num==0 || num==1){
        flag=false;
    }
    for(i=2;i<num/2;i++)
    {
        if(num%i==0)
        {
         flag=false;
         break;
        }
     }
  if (flag)
  console.log(" is a prime number");
  else
  console.log(" is not a prime number");
    }

is_prime(2);
is_prime(7);
is_prime(5);

