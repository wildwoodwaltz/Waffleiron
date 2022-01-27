
alert("Before we begin, there are a few questions we would like to ask.");

let wyit = prompt("What year is it?");

if (wyit == 2020) {
    alert("IT'S HAPPENING AGAIN")
} else if (wyit < 2020) {
    alert('You must be a time traveling wizard') 
} else if (wyit > 2020) {
    let covid = prompt("Is the pandemic over?");  
    if (covid == yes) {
        alert('Ok, it must be safe to come out now')
    } else {
        alert('What ever are we going to do now?')
    }
} else {
    alert('they are good dogs brant')
}




function change()
{
    var coin = document.getElementById("flip");
    if (coin.value=="heads") coin.value = "tails";
    else coin.value = "heads";
}
console.log('coin', coin);

