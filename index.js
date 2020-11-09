
const secretNumber = randomint ()
function randomint () {
    return (Math.floor () *101)
} 

function getUserGuess () { 
    const stringvalue = document.getElementById("user-input").value
    return parseInt(stringvalue, 10)

}

document.addEventListener("keyup") , function (event) {
    if (event.ket === "enter") {
        const guess = getguess ()
        console.log(guess)
    }
}
