n=1;
sum=0;
while(n<11)
{
    if(n%2==0)
        sum=sum+n;
    n++;
}
console.log("sum:",sum);

n=1;
sum=0;
do
{
    if(n%2==0)
        sum=sum+n;
    n++;
}
while(n<11);
console.log("sum:",sum)

sum=0;
for(n=1;n<11;n++)
{
    if(n%2==0)
        sum=sum+n;
}
console.log("sum:",sum)