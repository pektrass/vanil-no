
document.getElementById('but').addEventListener('click', async function (event) {
    document.getElementById('input').value = ''; // Очистить поле ввода
    event.preventDefault();

    const reviewInput = document.getElementById('input');
    const reviewText = reviewInput.value;

    // Отправка отзыва на сервер
    const response = await fetch('http://localhost:3001/saveReview', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: reviewText }),
    });

    if (response.ok) {
        console.log('Отзыв успешно сохранен');
        // По желанию, обновите пользовательский интерфейс или очистите поле ввода
        reviewInput.value = '';
    } else {
        console.error('Ошибка при сохранении отзыва:', response.statusText);
    }
});

