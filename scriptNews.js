/* chiude il collapse quando viene schiacciato un item della navbar */

$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});

/* Change btn more news text on click */
const btnMoreNews = document.getElementById('btn-more-news');

// ✅ Toggle button text on click
btnMoreNews.addEventListener('click', function handleClick() {
  const initialText = 'SEE LESS NEWS';

  if (
    btnMoreNews.textContent
      .toLowerCase()
      .includes(initialText.toLowerCase())
  ) {
    btnMoreNews.innerHTML = "SEE MORE NEWS";
    //document.getElementById("a-more-news").href = "#news-hide";
  } else {
    btnMoreNews.textContent = initialText;
    //document.getElementById("a-more-news").href = "#news-show";
  }
});