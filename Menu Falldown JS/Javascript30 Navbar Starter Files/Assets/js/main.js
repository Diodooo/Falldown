document.querySelector(".cabecalho__menu--link").onclick = function(){
    document.querySelector(".dropdown").classList.add("show");
}

window.onclick = function(event) {
    if (!event.target.matches(".cabecalho__menu--link")) {
      var dropdowns = document.getElementsByClassName("dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 