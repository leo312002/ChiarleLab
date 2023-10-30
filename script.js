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

/* chiude il collapse quando viene schiacciato un item della navbar */

$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});


/* Change btn more news text on click. NON FUNZIONA, va in contrasto con li script di sopra 
const btnMorePublication = document.getElementById('btn-more-publication');

// ✅ Toggle button text on click
btnMorePublication.addEventListener('click', function handleClick() {
const initialText = 'SEE LESS PUBLICATION';

if (
  btnMorePublication.textContent
    .toLowerCase()
    .includes(initialText.toLowerCase())
) {
  btnMorePublication.innerHTML = "SEE MORE PUBLICATION";
  //document.getElementById("a-more-news").href = "#news-hide";
} else {
  btnMorePublication.textContent = initialText;
  //document.getElementById("a-more-news").href = "#news-show";
}
}); */

/* Script to change opacity when you scroll the web page */
  $(window).scroll(function(){
    $('.scroll-op-title').css("opacity", 0.7 + $(window).scrollTop()/700)
    $('.scroll-op-first').css("opacity", 0.2)
    $('.scroll-op-second').css("opacity", 0.2)
    $('.scroll-op-third').css("opacity", 0.2)
    if(window.innerWidth < 768){   /* Mobile */
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
      if($(window).scrollTop() > 400){
        $('.scroll-op-first').css("opacity", 1)
      }
      if($(window).scrollTop() > 900){
        $('.scroll-op-first').css("opacity", 0.2)
        $('.scroll-op-second').css("opacity", 1)
      }
      if($(window).scrollTop() > 1400){
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
  document.querySelector('body').classList.add('animation-pause');
}

function showText() {
  document.getElementById("choose-lab").innerHTML = "Chiarle Lab";
  document.querySelector('body').classList.remove('animation-pause');
}




