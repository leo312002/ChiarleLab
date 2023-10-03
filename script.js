/* COUNTER VISITE ALLA PAGINA */
const count = document.getElementById("count");

incrementVisitsCount();

function incrementVisitsCount() {
  let visits;

  if (!localStorage.getItem("visits")) {
    localStorage.setItem("visits", 1);
  } else {
    visits = +localStorage.getItem("visits");
    const incrementedCount = visits + 1;

    localStorage.setItem("visits", incrementedCount);
  }

  count.innerText = localStorage.getItem("visits");
}

/* chiude il collapse quando viene schiacciato un item della navbar */
$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

/* Change btn former members text on click */
const btnFormerMembers = document.getElementById("btn-former-members");

// ✅ Toggle button text on click
btnFormerMembers.addEventListener("click", function handleClick() {
  const initialText = "HIDE FORMER MEMBERS";

  if (
    btnFormerMembers.textContent
      .toLowerCase()
      .includes(initialText.toLowerCase())
  ) {
    btnFormerMembers.innerHTML = "SEE FORMER MEMBERS";
    document.getElementById("a-former-members").href="#former-hide";
  } else {
    btnFormerMembers.textContent = initialText;
    document.getElementById("a-former-members").href="#former-show";
  }
});

/* Script to change opacity when you scroll the web page */
  $(window).scroll(function(){
    if(window.innerWidth < 768){   /* Mobile */
      $('.scroll-op-title').css("opacity", 0.7 + $(window).scrollTop()/700)
      $('.scroll-op-first').css("opacity", 0.2)
      $('.scroll-op-second').css("opacity", 0.2)
      $('.scroll-op-third').css("opacity", 0.2)
      if($(window).scrollTop() > 300){
        $('.scroll-op-first').css("opacity", 1)
      }
      if($(window).scrollTop() > 950){
        $('.scroll-op-first').css("opacity", 0.2)
        $('.scroll-op-second').css("opacity", 1)
      }
      if($(window).scrollTop() > 1700){
        $('.scroll-op-second').css("opacity", 0.2)
        $('.scroll-op-third').css("opacity", 1)
      }
      if($(window).scrollTop() > 2000){
        $('.scroll-op-third').css("opacity", 0.2)
      }
    }else if(window.innerWidth < 992){   /* Tablet */
      $('.scroll-op-title').css("opacity", 0.7 + $(window).scrollTop()/700)
      $('.scroll-op-first').css("opacity", 0.2)
      $('.scroll-op-second').css("opacity", 0.2)
      $('.scroll-op-third').css("opacity", 0.2)
      if($(window).scrollTop() > 200){
        $('.scroll-op-first').css("opacity", 1)
      }
      if($(window).scrollTop() > 700){
        $('.scroll-op-first').css("opacity", 0.2)
        $('.scroll-op-second').css("opacity", 1)
      }
      if($(window).scrollTop() > 1200){
        $('.scroll-op-second').css("opacity", 0.2)
        $('.scroll-op-third').css("opacity", 1)
      }
      if($(window).scrollTop() > 1500){
        $('.scroll-op-third').css("opacity", 0.2)
      }
    }else{ /* Desktop */
      $('.scroll-op-title').css("opacity", 0.7 + $(window).scrollTop()/700)
      $('.scroll-op-first').css("opacity", 0.2)
      $('.scroll-op-second').css("opacity", 0.2)
      $('.scroll-op-third').css("opacity", 0.2)
      if($(window).scrollTop() > 300){
        $('.scroll-op-first').css("opacity", 1)
      }
      if($(window).scrollTop() > 800){
        $('.scroll-op-first').css("opacity", 0.2)
        $('.scroll-op-second').css("opacity", 1)
      }
      if($(window).scrollTop() > 1200){
        $('.scroll-op-second').css("opacity", 0.2)
        $('.scroll-op-third').css("opacity", 1)
      }
      if($(window).scrollTop() > 1700){
        $('.scroll-op-third').css("opacity", 0.2)
      }
    }
  })

/* hide text */
function hideText() {
  document.getElementById("choose-lab").innerHTML = "";
}

function showText() {
  document.getElementById("choose-lab").innerHTML = "Which Chiarle Lab you want to visit";
}




