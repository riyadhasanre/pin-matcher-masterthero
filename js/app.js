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