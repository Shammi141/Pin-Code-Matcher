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


document.getElementById('calculator').addEventListener('click', function(event){
    //console.log(event.target.innerText)
    const number = event.target.innerText;  //target diye vitorer element paoa jay
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        //console.log(number);
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');   // split() doese array of string 
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number
        typedNumberField.value = newTypedNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('disply-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMsg = document.getElementById('pin-success');
    const pinFailureMsg = document.getElementById('pin-failure');
    if(typedNumber === currentPin){
        //const pinSuccessMsg = document.getElementById('pin-success');
        pinSuccessMsg.style.display = 'block';  //block will show, none will hide
        pinFailureMsg.style.display = 'none';
    }
    else{
        // const pinFailureMsg = document.getElementById('pin-failure');
        pinFailureMsg.style.display = 'block';
        pinSuccessMsg.style.display = 'none';
    }
});
