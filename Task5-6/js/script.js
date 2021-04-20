'use strict';
document.addEventListener('DOMContentLoaded', ()=>  {

    const   adv         = document.querySelectorAll('.promo__adv img'), // убрать постеры
            poster      = document.querySelector('.promo__bg'), // изменить bg.jpg
            changeBG    = poster.querySelector('.promo__genre'), // изменить жанр фильмов
            movieList   = document.querySelector('.promo__interactive-list'), //удаляем старую базу
            addNewFilm  = document.querySelectorAll('.adding__input'),

            movieDB     = {
                movies: [
                    "Логан",
                    "Лига справедливости",
                    "Ла-ла лэнд",
                    "Одержимость",
                    "Скотт Пилигрим против..."
                ]
            };

    movieDB.movies.sort(); // сортирую по алфавиту

    adv.forEach(item => {
        item.style.display = 'none';
        //item.remove();
    }),

    changeBG.textContent = 'Драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    movieList.innerHTML = "";
                    

    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    /* 1) implement the functionality that after filling out the form and press the "Confirm" button -
    The new film is added to the list.Page should not reboot.
    The new film should be added to Moviedb.movies.
    To access the INPUT value - appeal to it as input.Value;
    P.S.There are several options for solving the problem, any, but working.*/

    console.log(addNewFilm);


});