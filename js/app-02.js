/* 02 - FORM VALIDATION :: YOUR CODE BELOW */
var form = document.getElementById("registration-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  var username = document.getElementById("field__user");
  var password = document.getElementById("field__pass");
  var passwordConf = document.getElementById("field__passconf");
  var taxId = document.getElementById("field__tax");
  var accountType = document.getElementById("field__account");
  var terms = document.getElementById("field__terms");

  var valUserName = document.querySelector(".validation--username");
  var valPassword = document.querySelector(".validation--user-password");
  var valPassConf = document.querySelector(".validation--confirm-password");
  var valPassConf = document.querySelector(".validation--confirm-password");
  var valTaxId = document.querySelector(".validation--tax-id");
  var valAccount = document.querySelector(".validation--account");
  var valTerms = document.querySelector(".validation--terms-of-service");
  var valEntireForm = document.querySelector(".validation--entire-form");
  var success = 0;


if ( username.value === ""){
  valUserName.textContent = "Username cannot be blank";

} else {
  valUserName.textContent = "Success";
   success++;
}

if ( password.value.length < 8){
  valPassword.textContent = "Passwords must have a minimum of 8 characters";

} else {
  valPassword.textContent = "Success";
   success++;
}

if ( password.value !== passwordConf.value || passwordConf.value === ""){
  valPassConf.textContent = "Passwords must match";
} else {
  valPassConf.textContent = "Success";
   success++;
}

if(taxId.value === ""){
    valTaxId.textContent = 'Must provide Tax ID number';
  }
  else if(taxId.value ==="" || taxId.value.length !== 10){
    valTaxId.textContent = 'Tax ID number is only numbers and is 10 digits';
  }
  else{
    valTaxId.textContent = 'Success';
    success++;
  }

if(accountType.selectedIndex === 0){
     valAccount.textContent = 'Must select account type';
   }
   else {
     valAccount.textContent = 'Success';
     success++;
   }

if(terms.checked === false){
     valTerms.textContent = 'Must approve terms of service';
   }
   else {
     valTerms.textContent = 'Success';
     success++;
   }

 if(success === 6){
     valEntireForm.textContent = 'Form complete';
   }

});
