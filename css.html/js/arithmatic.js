r=parseFloat(prompt("Enter radius of circle"));
ch=parseInt(prompt("Enter your choice:1.area\n2.Perimeter"));
if(ch==1){
    area= 3.14 * r * r;
    console.log("Area of circle:",area);
}
else if(ch==2){
    Perimeter= 2 * 3.14 * r;
    console.log("Perimeter of circle:",Perimeter);
}
else{
    console.log("Invalid choice");
}