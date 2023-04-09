function evenodd() {
    var uservalue = +prompt("Enter a Number")
if (uservalue % 2 == 0) {
var resulteven =document.getElementById("wether").innerHTML=("Result: Number is Even")   
}
else{
    var resultodd =document.getElementById("wether").innerHTML=("Result: Number is odd")
}
}

function Maxnum() {
    var Num1 = + prompt("To find greater write first number ")
    var Num2 = + prompt("To find greater write Second number ")
    if (Num1 > Num2) {
        var resultmax1 =document.getElementById("result").innerHTML=("Result: Number one is greater")
    }
    else{
        var resultmax2 =document.getElementById("result").innerHTML=("Result: Number two is greater")
    }
}


function ThreeMax() {
    var num1 = + prompt("To find In three write first number ")
    var num2 = + prompt("To find In three write Second number ")
    var num3 = + prompt("To find In three write Third number ")
    if (num1 > num2 && num1 > num3) {
        var resultmax01 =document.getElementById("Result3").innerHTML=("Result: Number one is greater")
    }
    if(num2 > num1 && num2 > num3){
        var resultmax02 =document.getElementById("Result3").innerHTML=("Result: Number two is greater")
    }
    if(num3 > num1 && num3 > num2) {
        var resultmax03 =document.getElementById("Result3").innerHTML=("Result: Number three is greater")
    }
}

function Negtive() {
    var Enterednumber =+ prompt("To find Neagtive, Positive and zero Enter a number")
    if(Enterednumber > 0){
        var plus = document.getElementById("resultplus").innerHTML=("Result: Numberr is Positive")
    }
    if(Enterednumber < 0){
        var neg = document.getElementById("resultplus").innerHTML=("Result: Numberr is Neagtive")
    }
    if(Enterednumber == 0){
        var zero = document.getElementById("resultplus").innerHTML=("Result: Number is Zero")
    }
}

function Divideable() {
    var divide1 =+ prompt("Enter a Number to check it is divideable with 5 and 11")
    if (divide1 % 5 == 0 && divide1 %11 == 0) {
        var divided1 =document.getElementById("lfive").innerHTML=("Result: Yes it is divide-able with 5 and 11")
    }
    else{
        var divided2 =document.getElementById("lfive").innerHTML=("Result: No This is not divide-able with 5 and 11")
    }
}

function leapyear() {
    var year =+ prompt("Enter the year in which you check it is leap year or not")
    if (year % 4 ==0 && year % 100 !=0 || year % 400 == 0) {
        var leapyes =document.getElementById("leap").innerHTML=("Result: Yes it is a leap year")
    }
    else{
        var leapno =document.getElementById("leap").innerHTML=("Result: No this is not a leap year")
    }
}

function character() {
    var charac = prompt("Enter a character")
    if (charac >='a' && charac <= 'z' ||charac >='A' && charac <= 'Z' ) {
        var alpa =document.getElementById("chara").innerHTML=("Result: character is a alphabat")
    }
    else if( charac >= '0' && charac <= '9'){
        var digi =document.getElementById("chara").innerHTML=("Result: character is a digit")

    }
    else{
        var symbo =document.getElementById("chara").innerHTML=("Result: character is a special symbol")
    }
}

function alphabat() {
    var check = prompt("Enter a character")
    if (check >='a' && check <= 'z' ||check >='A' && check <= 'Z' ) {
        var yes =document.getElementById("che").innerHTML=("Result: Entered character is a alphabat")
    }
    else{
        var no =document.getElementById("che").innerHTML=("Result: Entered character is not a alphabat")
    }
}

function vowle() {
    var cons= prompt("Enter a Alphabat")
    if (cons == 'a'|| cons == 'e' || cons == 'i'|| cons == 'o'|| cons == 'u'){
        var vov= document.getElementById("vowle").innerHTML=("Result: Vowle")
    }
    if (cons == 'A'|| cons == 'E' || cons == 'I'|| cons == 'O'|| cons == 'U'){
        var vov2= document.getElementById("vowle").innerHTML=("Result: Vowle")
    }
    else{
        var conc= document.getElementById("vowle").innerHTML=("Result: consonant")
    }
}

function uppercase() {
    var upper= prompt("Enter a Character")
    if(upper >= 'A' && upper <= 'Z'){
        var Capital =document.getElementById("up").innerHTML=("Result: Upper case")
    }
    else{
        var small =document.getElementById("up").innerHTML=("Result: Lower case")
    }
}

function dayname(){
    var weeknum = prompt("Enter a Day of week in number")
    if(weeknum == 1){
        var day1 =document.getElementById("day").innerHTML=("Result: Sunday")
    }
    if(weeknum == 2){
        var day2 =document.getElementById("day").innerHTML=("Result: Monday")
    }
    if(weeknum == 3){
        var day3 =document.getElementById("day").innerHTML=("Result: Tuesday")
    }
    if(weeknum == 4){
        var day3 =document.getElementById("day").innerHTML=("Result: Wednesday")
    }
    if(weeknum == 5){
        var day4 =document.getElementById("day").innerHTML=("Result: Thrusday")
    }
    if(weeknum == 6){
        var day5 =document.getElementById("day").innerHTML=("Result: Friday")
    }
    if(weeknum == 7){
        var day6 =document.getElementById("day").innerHTML=("Result: Saturday")
    }
}


function monthdays() {
    var monthnum = prompt("Enter month number")
    if(monthnum ==1){
        var month1 =document.getElementById("month").innerHTML=("Result: 31")
    }
    if(monthnum ==2){
        var month2 =document.getElementById("month").innerHTML=("Result: 28")
    }
    if(monthnum ==3){
        var month3 =document.getElementById("month").innerHTML=("Result: 31")
    }
    if(monthnum ==4){
        var month4 =document.getElementById("month").innerHTML=("Result: 30")
    }
    if(monthnum ==5){
        var month5 =document.getElementById("month").innerHTML=("Result: 31")
    }
    if(monthnum ==6){
        var month6 =document.getElementById("month").innerHTML=("Result: 30")
    }
    if(monthnum ==7){
        var month7 =document.getElementById("month").innerHTML=("Result: 31")
    }
    if(monthnum ==8){
        var month8 =document.getElementById("month").innerHTML=("Result: 31")
    }
    if(monthnum ==9){
        var month9 =document.getElementById("month").innerHTML=("Result: 30")
    }
    if(monthnum ==10){
        var month10 =document.getElementById("month").innerHTML=("Result: 31")
    }
    if(monthnum ==11){
        var month11 =document.getElementById("month").innerHTML=("Result: 30")
    }
    if(monthnum ==12){
        var month12 =document.getElementById("month").innerHTML=("Result: 31")
    }
}




