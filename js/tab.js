let tabsBtn = document.querySelectorAll('.work-principles__btn');
let tabsItem = document.querySelectorAll('.work-principles__wrapper');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;


        tabsBtn.forEach(function (btn) { btn.classList.remove('work-principles__btn_first') })
        e.currentTarget.classList.add('work-principles__btn_first');

        tabsItem.forEach(function(element){element.classList.remove('work-principles__wrapper_first')});
        document.querySelector(`[data-target="${path}"]`).classList.add('work-principles__wrapper_first');

    });
});
