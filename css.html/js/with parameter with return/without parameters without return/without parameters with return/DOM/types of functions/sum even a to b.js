sumofEven=(a,b)=>
{
    let sum=0;
    for(let i=a;i<=b;i++){
        if(i%2==0)
            sum+=i;
    }
        return sum;
}
console.log(sumofEven(8,18))