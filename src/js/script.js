let userName = "Andrew"
let userAge = 21
const userPets = ["Cat", "Dog"]
let userBalance = 1200
const EVERY_DAY_SPENDING = 15.3
let everyDaySpendingPerPet = 2.4
let daysSurvived = 0


//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName)
console.log("User Age", userAge)
console.log("User balance", userBalance)
console.log("Every Day Spending Per Pet", everyDaySpendingPerPet)
console.log("Days Survived", daysSurvived)

while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days")


//task 1
function nameVertical(name) {
    name.split('').forEach((letter) => {
        console.log(letter)
    })
}
// Sarah for example
nameVertical("Sarah")


//task 2
function code(n) {
    return (n < 100)? "Not a valid code" : 
        (n<200) ? 'Informational responses (100–199)':
            (n<300) ? 'Successful responses (200–299)':
                (n<400) ? 'Redirection messages (300–399)':
                    (n<500) ? 'Client error responses (400–499)':
                        (n<600) ? 'Server error responses (500–599)': "not valid code"
 }
// for example n = 121
console.log(code(121));
console.log(code(211));
console.log(code(311));
console.log(code(411));
console.log(code(511));
console.log(code(611));


//task3
function compareVariables(var1, var2) {
    if (var1 === var2){
        console.log('The two variables have the same value and type')
    } else if (var1 == var2){
        console.log(' The two variables have the same value but not the same type')
        console.log("the type of var1 is", var1, typeof var1)
        console.log("the type of var2 is", var2, typeof var2)
    } else {
        console.log('The two variables do not have the same value nor the same type')
    }

}

// After completing the function pass different values instead of var1 and var2 to test your function

compareVariables (1, '1');
compareVariables ('3', '3');
compareVariables (900, '23');

//task4
function fibonacci(n) {
    let n1 = 0, n2 = 1, nextTerm;
    console.log('Fibonacci Series:');
    console.log(n1); // print 0
    console.log(n2); // print 1
    nextTerm = n1 + n2;
    while (nextTerm <= n) {

        // print the next term
        console.log(nextTerm);
    
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
}

// After completing the function pass different numbers instead of n and test the result.

fibonacci(34);

//lisatask






