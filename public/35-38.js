// task 1
function dateTime(){
    var todayDate = new Date()
    document.write(todayDate+ "<br>")
}
dateTime()

// task 2
function greet(){
    var f_name = prompt("Enter first name: ")
    var l_name = prompt("Enter Last Name: ")
    alert("Welcome " + f_name + " " + l_name)
}
greet()

// task 3
function add(){
    var f_num = +prompt("Enter first num: ")
    var s_num = +prompt("Enter second num: ")
    var r = f_num + s_num 
    alert("The addition of " + f_num + " and " + s_num + " is " + r)
}
add()

// task 4
function calculator(){
    var f_num = +prompt("Enter first num: ")
    var s_num = +prompt("Enter second num: ")
    var op = prompt("Enter operator: ")
    var r;
    if (op === "+"){
        r = f_num + s_num
        document.write("The addition of " + f_num + " and " + s_num + " is " + r+ "<br>")
    }
    else if (op === "-"){
        r = f_num - s_num
        document.write("The difference of " + f_num + " and " + s_num + " is " + r+ "<br>")
    }
    else if (op === "*"){
        r = f_num * s_num
        document.write("The product of " + f_num + " and " + s_num + " is " + r+ "<br>")
    }
    else if (op === "/"){
        r = f_num / s_num
        document.write("The division of " + f_num + " and " + s_num + " is " + r+ "<br>")
    }
    else if (op === "%"){
        r = f_num % s_num
        document.write("The remainder of " + f_num + " and " + s_num + " is " + r + "<br>")
    }
    
}
calculator()

// task 5
function square(x){
    var sq = x * x
    document.write("The square of "+x+" is "+sq+ "<br>")
}
square(2)

// task 6
function fact(x){
    var fac = 1;
    for (var i = x ; i >= 1 ; i--){
        fac = fac * i
    }
    document.write("The factorial of "+x+" is "+fac+ "<br>")
}
fact(5)

// task 7
function count(a,b){
    for (var i = a ; i <= b ; i++){
        document.write(i + "<br>")
    }
}
count(4,23)

// task 8
function calculateHyp(p,b){
    function calculatesquare(x){
        return (x*x)
    }
    var h;
    h = Math.sqrt(calculatesquare(p) + calculatesquare(b))
    return h
}
var a = calculateHyp(3,4)
document.write("The hyp of 3 and 4 is : "+a+ "<br>")

// task 9
function area(w,h){
    var a = w * h
    return a
}
var a = area(3,4)
document.write("Area of triangele is: "+ a + "<br>")

// task 10
function palindrome(x){
    var a = "", b = "";
    for (var i = 0 ; i < x.length ; i++){
        a = a + x[i]
    }
    for (var i = x.length - 1 ; i >= 0 ; i--){
        b = b + x[i]
    }
    if (a === b){
        document.write(x + " is palidrome" + "<br>")
    }
    else {
        document.write(x + " is not a palidrome."+ "<br>")
    }
}
var y = "mom" , z = "cat";
palindrome(y);
palindrome(z);

// task 11
function capitalize(x){
    var a = "";
    for (var i = 0 ; i < x.length ; i++){
        if (i === 0){
            a = a + x[i].toUpperCase()
        }
        else if  (x[i-1] === " "){
          a = a + x[i].toUpperCase()
        }
        else{
            a = a + x[i]
        }
  
    }
    return a;
}
c = "the quick brown fox"
v = capitalize(c)
document.write(v + "<br>")

// task 12
function longest(str){
    var a = str.match(/\w[a-z]{0,}/gi)
    var l = a[0];
    for (var i = 1 ; i < a.length ; i++){
        if (l.length < a[i].length){
            l = a[i]
        }
    }
    return l;
}
t = "Web Development Tutorial"
u = longest(t)
document.write(u+ "<br>")

// task 13
function wordcount(x,y){
    count = 0;
    for ( var i = 0 ; i < x.length ; i++){
        if (x[i] === y ){
            count += 1
        }
    }
    return count;
}

var str = "JSResouorceS.com"
var alph = "o"
document.write(wordcount(str,alph)+ "<br>") 

// task 14
function calculateCircumference(r){
    var c;
    c = 2 * Math.PI * r
    document.write("The circumference is : " + c + "<br>")
}
function calculateArea(r){
    var c;
    a = Math.PI * r * r
    document.write("The area is : " + a + "<br>")
}
calculateCircumference(4)
calculateArea(3)
