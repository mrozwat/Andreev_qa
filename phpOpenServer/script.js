let page = document.querySelector('body');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
  page.classList.toggle('dark-theme');
};
