function printEven()
{
    a=parseInt(document.getElementById("num1").value);
    b=parseInt(document.getElementById("num2").value);
    ans=document.getElementById("ans");
    ans.innerHTML="";
    for(i=a;i<=b;i++)
    {
        if(i%2==0)
ans.innerHTML+=i+"&nbsp;"
}
}