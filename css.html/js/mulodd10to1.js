n=10;
mul=1;
while(n>1)
{
    if(n%2!==0)
        mul=mul*n;
    n--;
}
console.log("Multiplication:",mul)


n=10;
mul=1;
do{
    if(n%2!==0)
        mul=mul*n;
    n--;
}while(n>1);
console.log("multiplication:",mul)


mul=1;
for(n=10;n>1;n--)
{
    if(n%2!==0)
        mul=mul*n;
}
console.log("multiplication:",mul)