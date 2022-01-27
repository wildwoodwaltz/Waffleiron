

alert("Before we begin, there are a few questions we would like to ask.");

function promptuserforyear() {
    // prompt
    let wyit = prompt('What year is it?')
    //change response
    if (wyit == 2020) {
    yr = "IT'S HAPPENING AGAIN";
}     
    else if (wyit < 2020) {
    yr = 'You must be a time traveling wizard';
}   
    else if (wyit > 2020) {
    yr = "Stay Masked and stay safe fren";  
} 
    else {
    //call for start of function for valid response
    alert('Not a valid response, please use numeric characters')
    promptuserforyear();
}
    return alert(yr)
    }
    promptuserforyear()
    
// if (covid === yes) {
//     alert('Ok, it must be safe to come out now')
// } else {
//     alert('Stay masked and stay safe')
// }

function change()
{
    var coin = document.getElementById("flip");
    if (coin.value=="heads") coin.value = "tails";
    else coin.value = "heads";
    console.log('Coin', coin);
}


