const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};

const moreLink = document.querySelectorAll('.more-link');
if (moreLink.length > 0) {
    let moreView = document.querySelectorAll('.subtext');
    for (let k = 0; k < moreLink.length && k < moreView.length; k++) {
        moreLink[k].addEventListener("click", function(e) {
            moreView[k].classList.toggle('_more');
            e.preventDefault();
        })
    }
}