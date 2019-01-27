let myForm = document.getElementById("contactform");
// myForm.setAttribute("novalidate", true);

let btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", check);

let txtName = document.getElementById("name");
txtName.addEventListener("blur", validateName);

let txtEmail = document.getElementById("email");
txtEmail.addEventListener("blur", validateEmail);

let txtSubject = document.getElementById("subject");
txtSubject.addEventListener("blur", validateSubject);

let txtMessage = document.getElementById("message");
txtMessage.addEventListener("blur", validateMessage);

if (Modernizr.formValidation) {
  console.log("form validation  supported");
} else {
  console.log(" form  validation  not  supported");
  validateName();
  validateEmail();
  validateSubject();
  validateMessage();
  check();
  var valid = true;

  function validateName() {
    if (txtName.validity.valueMissing) {
      txtName.setAttribute("class", "invalid");
      console.log("Name missing.  " + txtName.validationMessage);
      valid = false;
    } else {
      txtName.removeAttribute("class", "invalid");
    }
  }
  function validateEmail() {
    var emailRegExp = /\S+@\S+\.\S+/;
    if (!emailRegExp.test(txtEmail.value)) {
      txtEmail.setAttribute("class", "invalid");
      console.log("Email invalid.  " + txtEmail.validationMessage);
    } else {
      txtEmail.removeAttribute("class", "invalid");
    }
  }
  function validateSubject() {
    if (txtSubject.validity.valueMissing) {
      txtSubject.setAttribute("class", "invalid");
      console.log("Subject missing.  " + txtSubject.validationMessage);
      valid = false;
    } else {
      txtSubject.removeAttribute("class", "invalid");
    }
  }
  function validateMessage() {
    if (txtMessage.validity.valueMissing) {
      txtMessage.setAttribute("class", "invalid");
      console.log("Message missing.  " + txtMessage.validationMessage);
      valid = false;
    } else {
      txtMessage.removeAttribute("class", "invalid");
    }
  }
  function check() {
    valid = true;
    validateName();
    validateEmail();
    validateSubject();
    validateMessage();
    if (!valid) {
      console.log("not valid");
    } else {
      console.log("process data");
    }
  }
}
