function validateCreditCardNumber(cardNumber) {
  let sum = 0;
  let alternate = false;
  
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);
    
    if (alternate) {
      digit *= 2;
      if (digit > 9) {
        digit = (digit % 10) + 1;
      }
    }
    
    sum += digit;
    alternate = !alternate;
  }
  
  return sum % 10 === 0;
}

let subBtn = document.getElementById("subBtn");

subBtn.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent form submission

    let inputField = document.getElementById("numbers");
    let inputValue = inputField.value.trim().replace(/\D/g, ''); // Remove non-digit characters
    let error = document.getElementById("error");

    if (inputValue === "") {
       error.innerHTML = "Invalid"
        return;
    }

    let isValid = validateCreditCardNumber(inputValue);

    if(isValid === true) {
      error.innerHTML = "Credit card is valid";
    } else {
      error.innerHTML = "Credit card is invalid";
    }
   
    console.log("Is valid credit card number? " + isValid);

  
});
