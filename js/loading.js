// const loadingComponent = document.getElementById("loading");
loadingComp = `<div id="loading-content"> <img class="loading-img" src="../../assets/images/logogram_login.svg" alt=""> Mohon tunggu  </div>`;

if (document.body.classList.contains("loading")) {
  console.log('ada loading');
  // setTimeout(function () {
  // }, 3000);
  var loadingComponent = document.createElement("div");
  loadingComponent.id = 'loading';
  loadingComponent.innerHTML = loadingComp
  document.body.appendChild(loadingComponent)
  loadingComponent.style.overflow="hidden";
  document.body.style.overflow="hidden";

  document.getElementById("loading").onclick = () => {
    loadingComponent.remove();
    document.body.style="auto";
  }


} else {
  loadingComponent.remove();
  document.body.style.overflow="auto";

}