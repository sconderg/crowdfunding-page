// Navbar toggler button
const navbarToggler = document.querySelector('#main-header nav .navbar-toggler');
const navbarCollapse = document.querySelector('#main-header nav .collapse');
navbarToggler.addEventListener('click', (e) => {
    const method = navbarToggler.dataset.toggle;
    if(method === 'open') {
        navbarCollapse.classList.add('show');
        navbarToggler.dataset.toggle =  'close';
        navbarToggler.innerHTML = '<img src="./img/icon-close-menu.svg">';
    } else if (method === 'close') {
        navbarCollapse.classList.remove('show');
        navbarToggler.dataset.toggle =  'open';
        navbarToggler.innerHTML = '<img src="./img/icon-hamburger.svg">';
    }
});

// Bookmark button
const bookmarkBtn = document.querySelector('.bookmark-btn');
bookmarkBtn.addEventListener('click', () => {
    bookmarkBtn.classList.toggle('bookmarked')
    bookmarkBtn.classList.contains('bookmarked') ? bookmarkBtn.innerHTML = '<img src="./img/icon-bookmarked.svg" alt="bookmarked"><span>Bookmarked</span>' :  bookmarkBtn.innerHTML = '<img src="./img/icon-bookmark.svg" alt="bookmarked"><span>Bookmark</span>';
});

// Toggle Modal View
const showModalUp = _ => document.querySelector('.modal').classList.add('showup');
const hideModal = _ => document.querySelector('.modal').classList.remove('showup');

// Select modal items 
const modalItems = document.querySelectorAll('.modal-container .item');
modalItems.forEach(item => {
    item.addEventListener('click', () => {
        if(!item.classList.contains('out-of-stuck')) {
            modalItems.forEach(item => item.classList.remove('selected'));
            item.classList.add('selected');
        }
    });
});


// Toggle modal-completed view
const showModalCompleted = _ => document.querySelector('.modal-completed').classList.add('showup');
const hideModalCompleted = _ => document.querySelector('.modal-completed').classList.remove('showup');