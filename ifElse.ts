var num = 443;
if (num <= 0) {
    console.log("The number is below the range (negative number)");
}
else if (num >= 1 && num <= 9) {
    console.log(`The number ${num} is one digit number`);
}
else if (num >= 10 && num <= 99) {
    console.log(`The number ${num}  is two digit number`);
}
else if (num >= 100 && num <= 999) {
    console.log(`The number ${num}  is three digit number`);
}
else if (num >= 1000 && num <= 9999) {
    console.log(`The number ${num}  is four digit number`);
}
else if (num >= 10000 && num <= 99999) {
    console.log(`The number ${num}  is five digit number`);
}
else {
    console.log("Invalid value");
    
}
