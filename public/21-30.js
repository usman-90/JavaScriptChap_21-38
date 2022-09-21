// Changing case task 1
var a = prompt("Input: ")
alert(a.toUpperCase())

// Changing case task 2
var a = prompt("Input: ")
alert(a.toLowerCase())

// Strings: measuring length and extracting parts  task 1
var fav = prompt("Enter your favourite mobile phone model: " + "<br>")
var l = fav.length
document.write("The length is: " + l)

// Strings: measuring length and extracting parts task 2
document.write("The last character of your input is: " + fav[fav.length-1] + "<br>")

// Strings: finding segments task 1
var word = "pakistani"
var x = "n"
for (var i = 0 ; i < word.length ; i++){
    if (word[i] === x){
        document.write("n is found at index : " + i + " in " +word+"<br>")
    }
}

// Strings: finding segments task 2
var user = prompt("Enter username: ")
for ( var i = 0 ; i < user.length ; i++){
    if (user[i] === "@" || user[i] === "." || user[i] === "!"){
       user = prompt("Please Enter valid username: ")
    }
}

// Strings: finding segments task 3
count = 0;
var sent = "the quick brown fox jumps over the lazy"
for (var i  = 0 ; i < sent.length ; i++){
    if (sent.slice(i,i+3) === "the"){
        count += 1
    }
}
document.write("the occurs " + count + " times" +"<br>")

// Strings: finding a character at a location task 3
var w ="pakistani"
document.write("The alphabet at index 3 is " + w[3]+"<br>")

// Strings: replacing characters task 1
var word = "hyderabad"
var a= word.replace("hyder","islam")
document.write(a+"<br>")

// Strings: replacing characters task 2
var message = "Ali and Sami are best friends. They play cricket and football together.";
var z = message.replace(/and/g,"&")
document.write(z + "<br>")

// Rounding numbers task 1
var num = +prompt("Enter number: ")
document.write("number is: "+ num+ "<br>")
document.write("Rounded number is: " + Math.round(num)+ "<br>")
document.write("Ceil number is: " + Math.ceil(num)+ "<br>")
document.write("floor number is: " + Math.floor(num)+ "<br>")

// Rounding numbers task 2
var num = +prompt("Enter negative number: ")
document.write("number is: "+ num+ "<br>")
document.write("Rounded number is: " + Math.round(num)+ "<br>")
document.write("Ceil number is: " + Math.ceil(num)+ "<br>")
document.write("floor number is: " + Math.floor(num)+ "<br>")

// Generating random numbers task 1
var coin = Math.random() * 6 
document.write("Dice value : " + Math.ceil(coin) + "<br>")

// Generating random numbers task 2
var dice = Math.random() * 2 
document.write("Coin : " + Math.ceil(dice) + "<br>")

// Generating random numbers task 3
var secNum = Math.random() * 10
secNum = Math.ceil(secNum)
var choice = prompt("Enter a num between 1 to 10 ")
if (choice === secNum){
    alert("Congrates u guessed correct num!")
}
else{
    alert("Sorry the number was: " + secNum + " better luck next time.")
}

// Converting strings to integers and decimals task 1
var w = parseFloat(prompt("Enter your weight: "))
document.write("Your weight is: " + w + "<br>")

// Converting strings to numbers, numbers to strings task 1
var str = "472"
var num = Number(str)
document.write("The type of '472' is: " + typeof(str) + "<br>")
document.write("The type of 472 is : " + typeof(num) + "<br>")

// Converting strings to numbers, numbers to strings task 2
var no = 35.36;
var strr = no.toString()
document.write(strr + "<br>")

// Controlling the length of decimals task 1
var percentage = 30 / 45 * 100;
var a = percentage.toFixed(2)
document.write(a + "<br>")