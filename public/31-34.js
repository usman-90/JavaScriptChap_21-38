var todayDate = new Date();
document.write(todayDate + "<br>");
var m = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var month = todayDate.getMonth();
alert("Current Month: " + m[month]);
var x = todayDate.toString();
var d = x.slice(0, 3);
alert("Today is " + d);

if (d === "Sun" || d === "Sat") {
  document.write("Its Fun Day! <br>");
} else {
  document.write("Its not fun day! <br>");
}
var date = todayDate.getDate();
if (date < 16){
    document.write("First fifteen days of the month"+"<br>")
}
else{
    document.write("Last days of the month"+"<br>")
}

document.write("Current Date: "+todayDate+"<br>")
var ms = todayDate.getTime();
document.write("Elpased miliseconds since january 1, 1970: "+ms+"<br>")
var mi = ms / (1000 * 60)
document.write("Elpased minutes since january 1, 1970: "+mi+"<br>")

var hrs = todayDate.getHours()
if (hrs >= 12){
    document.write("It's PM"+"<br>")
}
else {
    document.write("It's AM"+"<br>")
}

var laterDate = new Date('12-31-2020')
document.write("Later Date: "+laterDate+"<br>")

var strtDate = new Date('1-4-2016')
var frstDate = new Date('6-18-2015')
var diff = strtDate.getTime()  -  frstDate.getTime();
var r_days = diff / ( 1000 * 60 * 60 * 24)
alert(r_days + " days have passed since first ramzan!")

var refDate = new Date('12-5-2015')
var startDate = new Date('1-1-2015')
var diff = refDate.getTime()  -  startDate.getTime();
var T_sec = diff / ( 1000 * 60)
document.write("On the refrence date : "+refDate+" "+T_sec+" seconds have passed since beginning of 2015"+ "<br>" )

hrs = hrs + 1;
document.write("Current Date: "+todayDate+"<br>")
todayDate.setHours(hrs)
document.write("1 hours Later it will be " + todayDate + "<br>")

var todayDate = new Date()
var yrs = todayDate.getFullYear() - 100;
document.write("Current Date: "+todayDate+"<br>")
todayDate.setFullYear(yrs)
document.write("100 years back it was " + todayDate + "<br>")

var todayDate = new Date()
var date = prompt("Enter Date as 'mm-dd-yyyy' :")
var specDate = new Date(date);
var x = specDate.getTime();
var y = todayDate.getTime();
var z = y - x;
var age = z * 0.001/ (60 * 60 * 24 * 365);
var agee = Math.floor(age);
document.write("Your age: "+agee+"<br>")
document.write("Your Birth year is : " + (todayDate.getFullYear()-agee)+"<br>")
