/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const advertisement = document.querySelectorAll('.promo__adv img'),
      ////changeGenre   = document.querySelector('.promo__genre'),
      poster       = document.querySelector('.promo__bg'),
      changeGenre       = poster.querySelector('.promo__genre'), // вариант лучше

      movieDB       = {
        movies: [ 
            "Скотт Пилигрим против...",
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость"
            
        ]
    },
    listItems = document.querySelector('.promo__interactive-list');
      
advertisement.forEach(item => {    //                       1) Удалить все рекламные блоки со страницы (правая часть сайта)
    item.remove();
});

changeGenre.textContent = 'drama'; //                       2) Изменить жанр фильма, поменять "комедия" на "драма"



poster.style.backgroundImage = 'url("img/bg.jpg")';   //  3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
                                                        //     Реализовать только при помощи JS

                                                        //    4) Список фильмов на странице сформировать на основании данных из этого JS файла.
                                                        //       Отсортировать их по алфавиту 
                                                        //       добавить нумерацию


listItems.innerHTML = '';                               // очистка старой базы фильмов

movieDB.movies.sort();                                  //методы массива sort можно глянуть console.dir(movieDB)

console.log(poster.innerHTML);                      // получаем значение выводит html в текстовом формате

 movieDB.movies.forEach((film, i) => {
    listItems.innerHTML +=  `                          
        <li class="promo__interactive-item"> ${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;                                                        // a = a + 1       // a += 1
                                                             // добавляем верстку
});
 

