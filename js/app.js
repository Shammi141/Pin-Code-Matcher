function getPin(){
    const pin = generatePin();
    //make 4 digit pin as string sothat length can be used as only 4 for user
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        console.log('not 4 digit pin')
        return getPin();
    }
}

function generatePin(){
    //to make 4digit pin code
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    //display pin
    const displayPinField = document.getElementById('disply-pin');
    displayPinField.value = pin;
});