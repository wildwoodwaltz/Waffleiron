

alert("Before we begin, there are a few questions we would like to ask.");

//#########################################################
function promptuserforyear() {
    // prompt
    let wyit = prompt('What year is it?')
    //based on input change response
    if (wyit === '') {
        //call for start of function for valid response
        alert('Not a valid response, please use numeric characters')
        promptuserforyear();
}
    else if (wyit == 2020) {
    yr = "IT'S HAPPENING AGAIN";
} 
    else if (wyit < 2020) {
    yr = 'You must be a time traveling wizard';
}   
    else if (wyit > 2020) {
    yr = "Stay masked and stay safe fren";  
} 
    else {
    alert('Not a valid response, please use numeric characters')
    promptuserforyear();
}
    return alert(yr)
    }
//------------------------------------------------------------

promptuserforyear();

//###########################################################
function change()
{
    var coin = document.getElementById("flip");
    if (coin.value=="heads") coin.value = "tails";
    else coin.value = "heads";
    console.log('Coin', coin);
}
//-----------------------------------------------------------

//###########################################################
function imgprompt(promptimage){
    var executed = false;
    if (!promptimage) {
        promptimage = 'how many pictures would you like?';
    }

    let imgct = prompt(promptimage)

    if(imgct === ''){
        let error = 'please enter a number between 1 and 3'
        imgprompt(promptimage + error);
    } else if(imgct <= 3) {
        for(let i = 0; i < imgct; i++){
             document.getElementById("imgs").innerHTML += '<img src="./cats.gif">';
        }
    }    
}
//-----------------------------------------------------------
