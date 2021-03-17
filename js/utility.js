//Dashboard Animation on scroll
const accentBackground = document.getElementById("accent-background");
const profileBox = document.getElementById("profile-box-container");
const asideNavigation = document.getElementById("asideNavigation");
const header = document.getElementById("header");
if (document.body.contains(accentBackground && header)) {
  window.onload = function () {
    document.onscroll = scrollFunction;
  }

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      accentBackground.classList.remove("active");
      profileBox.classList.add("profile-box--small");
      asideNavigation.style.marginTop = "1rem"
      header.classList.add("header-light");
    } else {
      accentBackground.classList.add("active");
      profileBox.classList.remove("profile-box--small");
      asideNavigation.style.marginTop = "3.5rem"
      header.classList.remove("header-light");

    }
  }
}


//toggle password
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

if (document.body.contains(togglePassword && password)) {
  togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    this.classList.toggle(`bi-eye-slash`);
    console.log(this)
  })

}


// input pin
var container = document.getElementById("pin-input");
if (document.body.contains(container)) {
  container.onkeyup = e => {
    var keyDel = event.keyCode || event.charCode;
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
      var next = target;
      while (next = next.nextElementSibling) {
        if (next == null)
          break;
        if (next.tagName.toLowerCase() == "input") {
          next.focus();
          break;
        }
      }
    }
    if(keyDel == 8 || keyDel == 46){
      var previous = target;
      while (previous = previous.previousElementSibling){
        if(previous == null)
          break;
        if(previous.tagName.toLowerCase() == "input"){
          previous.focus();
          break
        }
      }
    }
  }
}