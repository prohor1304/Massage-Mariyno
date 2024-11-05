// Растяжение/сжатие контейнера FAQ + поворот стрелки

window.addEventListener('click', function (event) {
    if (event.target.dataset.img === 'arrow' && event.target.dataset.rotated === 'false') {
        const arrow = event.target.closest('.arrow');
        const questionBlock = event.target.closest('.question');

        arrow.style.transform = 'rotate(180deg)';
        questionBlock.style.height = 'max-content';

        arrow.dataset.rotated = true;
        questionBlock.dataset.rotated = true;

    } else if (event.target.dataset.img === 'arrow' && event.target.dataset.rotated === 'true') {
        const questionBlock = event.target.closest('.question');
        const arrow = event.target.closest('.arrow');

        arrow.style.transform = 'rotate(0deg)';
        questionBlock.style.height = '60px';

        arrow.dataset.rotated = false;
        questionBlock.dataset.rotated = false;
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


