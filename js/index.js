var myForm = document.getElementById("myForm");

var regexCardNumber = /^([0-9]{14,16})$/
var regexCardCVC = /^([0-9]{4})$/
var regexAmount = /^([0-9]{3,})$/
var regexName = /^([A-z]{1,20})$/
var regexLocation = /^([A-z]{3,25})$/
var regexPostalCode = /^([0-9]{5,15})$/


myForm.addEventListener('submit', function (e) {

    e.preventDefault();
})

myForm.onsubmit = function () {
    var cardNumber = document.getElementById("car-number");
    var cvcNumber = document.getElementById("cvc-number");
    var amount = document.getElementById("amount");
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var postalCode = document.getElementById("postal-code");
    var message = document.getElementById("message");
    var mastercard= document.getElementById("mastercard");
    var visa = document.getElementById("visa");
    var dinersClub = document.getElementById("diners-club");
    var amex = document.getElementById("amex");

    //card number verification
    if (regexCardNumber.test(cardNumber.value)) {
        cardNumber.classList.remove("is-invalid");
        cardNumber.classList.add("is-valid");
    }else{
        cardNumber.classList.remove("is-valid");
        cardNumber.classList.add("is-invalid");
    }

    //card number verification
    if (regexCardCVC.test(cvcNumber.value)) {
        cvcNumber.classList.remove("is-invalid");
        cvcNumber.classList.add("is-valid");
    }else{
        cvcNumber.classList.remove("is-valid");
        cvcNumber.classList.add("is-invalid");
    }

    //Mony amount verification
    if (regexAmount.test(amount.value)) {
        amount.classList.remove("is-invalid");
        amount.classList.add("is-valid");
    }else{
        amount.classList.remove("is-valid");
        amount.classList.add("is-invalid");
    }

    //fist name verification
    if (regexName.test(firstName.value)) {
        firstName.classList.remove("is-invalid");
        firstName.classList.add("is-valid");
    }else{
        firstName.classList.remove("is-valid");
        firstName.classList.add("is-invalid");  
    }
    
    //last name verification
    if (regexName.test(lastName.value)) {
        lastName.classList.remove("is-invalid");
        lastName.classList.add("is-valid");
    }else{
        lastName.classList.remove("is-valid");
        lastName.classList.add("is-invalid");
    }

    //city verification
    if (regexLocation.test(city.value)) {
        city.classList.remove("is-invalid");
        city.classList.add("is-valid");
    }else{
        city.classList.remove("is-valid");
        city.classList.add("is-invalid");
    }

    //state verification
    if (regexLocation.test(state.value)) {
        state.classList.remove("is-invalid");
        state.classList.add("is-valid");
    }else{
        state.classList.remove("is-valid");
        state.classList.add("is-invalid");
    }

    //postal code verification
    if (regexPostalCode.test(postalCode.value)) {
        postalCode.classList.remove("is-invalid");
        postalCode.classList.add("is-valid");
    }else{
        postalCode.classList.remove("is-valid");
        postalCode.classList.add("is-invalid");
    }

    //card radio chec verification
    if (mastercard.checked || visa.checked || dinersClub.checked || amex.checked) {
        document.getElementById("payment-metod").classList.remove("red-border");
    }else{
        document.getElementById("payment-metod").classList.add("red-border");
    }
}