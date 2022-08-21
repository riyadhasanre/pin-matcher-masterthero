function getpin() {
    const pin = ganaretpinset();
    const pinstring = pin + '';
    if(pinstring.length === 4){
        return pin;
    }
    else {
        // console.log('pin is not 4 digit');
        return getpin();
    }
}


function ganaretpinset() {

    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('getpin-set').addEventListener('click', function () {
    const pin = getpin();
    // console.log(pin);
    // display pin 
    const displaypin = document.getElementById('get-pin-box');
    displaypin.value = pin;
})
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const numbertypefield = document.getElementById('number-type');
    const previesnumbertypefield = numbertypefield.value;
    if (isNaN(number)) {
        if (number === 'C') {
            numbertypefield.value = '';
        }
        else if (number === '<') {
            const digit = previesnumbertypefield.split('');
            digit.pop();
            const remainingdigit = digit.join('');
            numbertypefield.value = remainingdigit;
        }
    }
    else {
        
        
        const newnumbertypefield = previesnumbertypefield + number;
        numbertypefield.value = newnumbertypefield;
    }
})
document.getElementById('varify-pin').addEventListener('click', function () {
    // console.log('gig is opnen');
    const displaypin = document.getElementById('get-pin-box');
    const currentpin = displaypin.value;


    const numbertypefield = document.getElementById('number-type');
    const typenumbert = numbertypefield.value;

    const pinsuccess = document.getElementById('pin-success');
    const pinnotmatch = document.getElementById('pin-not-match');

    
    if (typenumbert === currentpin) {
        // console.log('correct pin');
        
        pinsuccess.style.display = 'bolck';
        pinsuccess.style.display = 'none';
      
    }
    else {
        // console.log('incorrect pin');
        
        pinnotmatch.style.display = 'block';
        pinnotmatch.style.display = 'none';
    }
})