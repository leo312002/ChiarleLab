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
    document.getElementById("a-former-members").href = "#former-hide";
  } else {
    btnFormerMembers.textContent = initialText;
    document.getElementById("a-former-members").href = "#former-show";
  }
});



