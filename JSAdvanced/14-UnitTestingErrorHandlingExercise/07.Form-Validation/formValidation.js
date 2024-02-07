function validate() {
  let usernamePattern = /^[A-Za-z0-9]{3,20}$/g;
  let passPattern = /^[\w]{5,15}$/;
  let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
  let companyNumPatter = /^[1-9\d]{4}$/g;

  let btnSubmit = document.getElementById('submit');
  let isValid = document.getElementById('valid');

  let userNameRef = document.getElementById('username');
  let emailRef = document.getElementById('email');
  let passwordRef = document.getElementById('password');
  let confirmPasRef = document.getElementById('confirm-password');
  let companyNumberRef = document.getElementById('companyNumber');

  let isCompanyRef = document.getElementById('company');
  let companyFieldRef = document.getElementById('companyInfo');

  isCompanyRef.addEventListener('change', companySection);
  function companySection(e) {
    if (isCompanyRef.checked) {
      companyFieldRef.style.display = 'block';
    } else {
      companyFieldRef.style.display = 'none';
      companyNumberRef.value = '';
    }
  }

  btnSubmit.addEventListener('click', submitValidator);
  function submitValidator(e) {
    e.preventDefault();
    let truthChecked = true;
    let userValue = userNameRef.value;
    let emailValue = emailRef.value;
    let passValue = passwordRef.value;
    let confirmValue = confirmPasRef.value;
    let companyValue = companyNumberRef.value;

    if (userValue.match(usernamePattern)) {
      userNameRef.style.borderColor = '';
    } else {
      truthChecked = false;
      userNameRef.style.borderColor = 'red';
    }

    if (emailValue.match(emailPattern)) {
      emailRef.style.borderColor = '';
    } else {
      truthChecked = false;
      emailRef.style.borderColor = 'red';
    }

    if (passValue.match(passPattern) && confirmValue === passValue) {
      passwordRef.style.borderColor = '';
    } else {
      truthChecked = false;
      passwordRef.style.borderColor = 'red';
    }

    if (confirmValue.match(passPattern) && confirmValue === passValue) {
      confirmPasRef.style.borderColor = '';
    } else {
      truthChecked = false;
      confirmPasRef.style.borderColor = 'red';
    }

    if (companyFieldRef.style.display == 'block') {
      if (companyValue.match(companyNumPatter)) {
        companyNumberRef.style.borderColor = '';
      } else {
        truthChecked = false;
        companyNumberRef.style.borderColor = 'red';
      }
    }

    if (truthChecked) {
      isValid.style.display = 'block';
    } else {
      isValid.style.display = 'none';
    }
  }
}
