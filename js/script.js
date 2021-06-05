'use strict';

// DOMContentLoaded чтобы скрипты выполнялись когда загружено ДОМ дерево
document.addEventListener('DOMContentLoaded', () => {
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
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');
  // btn = document.querySelector('button');

  addForm.addEventListener('submit', (event) => {
    // отменяем стандартное поведение (перезагрузка стр)
    event.preventDefault();
    // получаем то что введено в инпут
    let newFilm = addInput.value;
    // получаем чекнут ли чекбокс
    const favorite = checkbox.checked;

    // условие чтобы если в инпуте пустая строка, код не выполнялся
    if (newFilm) {
      // условие чтобы если длина строки более 21то обрезалась +  ...
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 21)}...`;
      }

      // условие если галочка чекнута то сообщ в консоль
      if (favorite) {
        console.log('Добавляем любимый фильм');
      }

      // в объект пушим новый фильм
      movieDB.movies.push(newFilm);
      // сортируем объект с фильмами
      sortArr(movieDB.movies);

      // вызываем функцию создания фильмов
      createMovieList(movieDB.movies, movieList);
    }

    // очищаем форму
    // addForm.reset();
    // альтернатива так как указали аргумент event на котором происходит событие
    event.target.reset();
  });

  const deleteAdv = (arr) => {
    // с помощью перебора удаляю разом все 3 рекламы
    arr.forEach((item) => {
      item.remove();
    });
    // альтернатива с обычн функцией
    // adv.forEach(function(item){
    //   item.remove();
    // });
  };

  const makeChanges = () => {
    // задал текст диву
    genre.textContent = 'драма';
    // genre2.innerHTML = 'ДРАМА';

    // меняю фоновое изображение
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    // poster.style.background = 'url(../img/bg.jpg) top center/cover no-repeat';
    // poster.style.cssText = `background: url(../img/bg.jpg) top center/cover no-repeat`;
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = '';
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
				<li class="promo__interactive-item">${i + 1} ${film}
					<div class="delete"></div>
				</li>
			`;
    });

    // удаление фильма при клике на корзину
    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        // рекурсия (функция вызывает сама себя) чтобы заново перестраивался список (нумерация)
        createMovieList(films, parent);
      });
    });
  }

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});
