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


 //sighing up the user
 auth.createUserWithEmailAndPassword(email, password)
 .then(cred => {
     console.log(cred.user);
     const modal = document.querySelector('#modal-signup');
     M.Modal.getInstance(modal).close();
     signupForm.reset();
 })
    .catch(err =>{
    alert(err.message)
    })
});

//Logout 
const logout = document.querySelector('#logout');
logout.addEventListener('click',(e) => {
    e.preventDefault();
    auth.signOut()
     .then(() => {
         console.log('user signed out');
         
     })
})