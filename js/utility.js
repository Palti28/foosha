//toggle password
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e){
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  
  this.classList.toggle(`bi-eye-slash`);
  console.log(this)
})


// function togglePw() {
//   var x = document.getElementById("login-pw");
//   var ic = document.getElementById("pw-ic-toggle");
//   if (x.type === "password") {
//     x.type = "text";
//     ic.classList.toggle('bi bi-eye-slash')
//   } else {
//     x.type = "password";
//     ic.classList.toggle("bi bi-eye")

//   }
// };
