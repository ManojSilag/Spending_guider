// signUp
const signupForm = document.getElementById('signup-form');
//console.log(signupForm);

signupForm.addEventListener('submit',(e) =>{
 e.preventDefault();

 //Get user info
 const email =signupForm['signup-email'].value
 //console.log(email);
 const password = signupForm['signup-password'].value
 //console.log(password);


 //sighn up the user
 auth.createUserWithEmailAndPassword(email, password)
 .then(cred => {
     console.log(cred);
     const modal = document.querySelector('#modal-signup');
     M.Modal.getInstance(modal).close();
     signupForm.reset();
 })
    .catch(err =>{
    alert(err.message)
    })
});