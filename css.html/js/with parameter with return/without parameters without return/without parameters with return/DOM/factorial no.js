function fact()
{
    n=parseInt(document.getElementById("num").value);
    f=1;
    for(i=1;i<=n;i++)
    {
        f=f*i;
    }
    ans=document.getElementById("ans");
    ans.innerText=`factorial of ${n} is ${f}`;
}