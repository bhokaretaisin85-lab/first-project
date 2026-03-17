function max3(a,b,c)
{
    if(a>b && a>c)
        console.log(`Maximum is ${a}`);
    else if(b>a && b>c)
        console.log(`Maximum is ${b}`);
    else
        console.log(`Maximum is ${c}`);
}
max3(5,15,10)
max3(10,30,50)