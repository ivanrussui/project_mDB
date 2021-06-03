/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
  ],
};

const adv = document.querySelectorAll('.promo__adv img'),
  poster = document.querySelector('.promo__bg'),
  genre = poster.querySelector('.promo__genre'),
  movieList = document.querySelector('.promo__interactive-list');

// с помощью перебора удаляю разом все 3 рекламы
adv.forEach((item) => {
  item.remove();
});
// альтернатива с обычн функцией
// adv.forEach(function(item){
//   item.remove();
// });

// задал текст диву
genre.textContent = 'драма';
// genre2.innerHTML = 'ДРАМА';

// меняю фоновое изображение
poster.style.backgroundImage = 'url("img/bg.jpg")';
// poster.style.background = 'url(../img/bg.jpg) top center/cover no-repeat';
// poster.style.cssText = `background: url(../img/bg.jpg) top center/cover no-repeat`;

movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
		<li class="promo__interactive-item">${i + 1} ${film}
			<div class="delete"></div>
		</li>
	`;
});

// movieDB.movies = movie;

// movie.replaceWith(movieDB.movies);

// movieDB.movies.sort();

// function movieSort() {
// 	movie.sort();
// }

// movieSort();

// movie.forEach(item, movie => {
// 	item.replaceWith(movies)
// });
