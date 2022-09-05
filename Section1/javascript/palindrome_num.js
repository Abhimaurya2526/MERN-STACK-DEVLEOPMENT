function check_palindrome(num){
    let temp =num;
    let rev =0;
    while(num>0)
    {
    dig = num%10;
    rev = rev*10 + dig;
    num = parseInt(num/10);
    }

    if (rev == temp){
        console.log("number is palindrome ");
    }
    else{
        console.log("number is not palindrome ");
    }
}

check_palindrome(121);
check_palindrome(122);
check_palindrome(123);