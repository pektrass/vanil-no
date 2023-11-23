
function clearInput()
{
  document.getElementById('input').value = ''; // Очистить поле ввода
}

function saveReview() {
  var inputText = document.getElementById('input').value;
  var reviews = localStorage.getItem('reviews');
  reviews = reviews ? JSON.parse(reviews) : [];
  reviews.push(inputText);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  clearInput();
  displayReviews(); // Обновляем отзывы на странице
}

function displayReviews() {
  var reviewsContainer = document.getElementById('reviews-container');
  reviewsContainer.innerHTML = ''; // Очищаем контейнер от предыдущих отзывов
  var reviews = localStorage.getItem('reviews');
  reviews = reviews ? JSON.parse(reviews) : [];
  reviews.forEach(function (review) {
      var p = document.createElement('p');
      p.textContent = review;
      reviewsContainer.appendChild(p);
  });
}

// Отображаем отзывы при загрузке страницы
window.onload = displayReviews;