window.addEventListener('load', function () {
    var lazyLoadInstance = new LazyLoad({
        elements_selector: "[data-src],[data-bg]", // селектор
        threshold: 200 // Количество пикселей до того, как элемент начнёт загружаться
    });
});

// Растяжение/сжатие контейнера FAQ + поворот стрелки

window.addEventListener('click', function (event) {
    if (event.target.dataset.trg === 'arrow' && event.target.dataset.rotated === 'false') {
        const questionBlock = event.target.closest('.question');
        const arrow = questionBlock.querySelector('.arrow');
        const questionHeader = questionBlock.querySelector('.questionHeader');
        const questionText = questionBlock.querySelector('.question_text');

        arrow.style.transform = 'rotate(180deg)';
        questionText.style.display = 'flex';

        arrow.dataset.rotated = true;
        questionHeader.dataset.rotated = true;

    } else if (event.target.dataset.trg === 'arrow' && event.target.dataset.rotated === 'true') {
        const questionBlock = event.target.closest('.question');
        const arrow = questionBlock.querySelector('.arrow');
        const questionHeader = questionBlock.querySelector('.questionHeader');
        const questionText = questionBlock.querySelector('.question_text');

        arrow.style.transform = 'rotate(0deg)';
        questionText.style.display = 'none';

        arrow.dataset.rotated = false;
        questionHeader.dataset.rotated = false;
    }
})

// Раскрытие Dropdown Menu для мобильной версии

window.addEventListener('click', function (event) {
    if (event.target.dataset.img === 'dropdown') {
        dropdownContent = this.document.querySelector('.dropdownContent');
        dropdownContent.style.display = 'block';
    }
})

// Сокрытие Dropdown Menu по клику на элемент или пустое место

window.addEventListener('click', function (event) {
    if (event.target.dataset.element === "dropdown" || !event.target.closest('.dropdownContent, .dropdownImg')) {
        dropdownContent = this.document.querySelector('.dropdownContent');
        dropdownContent.style.display = 'none';
    }
})


