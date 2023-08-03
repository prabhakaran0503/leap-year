var today=new Date()
document.write("Today="+today+"<br>"+"<br>");

today.setFullYear(2000);
document.write(today+"<br>"+"<br>")
var year=today.getFullYear();
if(year%4==0){
    document.write("This is leap year");
}
else{
    document.write("Thia is not leap year");
}