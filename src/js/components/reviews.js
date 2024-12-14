// Находим кнопку
const button = document.querySelector('[data-reviews-more="button"]');

// Проверяем, есть ли кнопка
if (button) {
	button.addEventListener('click', function () {
		// Находим все элементы с атрибутом data-reviews-more="content"
		const reviewItems = document.querySelectorAll('[data-reviews-more="content"]');

		// Проверяем, есть ли такие элементы
		if (reviewItems.length > 0) {
			reviewItems.forEach(function (item) {
				item.style.display = 'block'; // Открываем элемент
			});

			// Скрываем родителя кнопки после клика (если нужно)
			const parent = this.parentElement; // Находим родительский элемент кнопки
			if (parent) {
				parent.style.display = 'none'; // Скрываем родителя
			} else {
				console.warn('Родительский элемент кнопки не найден.');
			}
		} else {
			console.warn('Элементы с data-reviews-more="content" не найдены.');
		}
	});
} else {
	console.warn('Кнопка с data-reviews-more="button" не найдена.');
}
