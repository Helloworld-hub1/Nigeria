    // MENU //
const menu = document.getElementById('mobile-menu');
const head = document.querySelector('header');

menu.addEventListener('click', function(){
    head.classList.toggle('open-menu');
});
    // SEARCH //
const searchArea = document.getElementById('search-area');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', function(){
    searchArea.classList.toggle('show-search');
});
