/*  Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли  */

'use strict';
const numberOfFilms = prompt('How many films have u watched?', '');

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genders: [],
    private: false
};

const lastFilm = prompt('What was u last film?', ''),
      rate     = prompt('how do u rate it?', ''),
      b        = prompt('What was u last film?', ''),
      c        = prompt('how do u rate it?', '');

personalMovieDB.movies[lastFilm] = rate;
personalMovieDB.movies[b] = c;                           //в квадратных во избежание багов с кирилицей

    //! не использовать через точку personalMovieDB.movies.lastFilm = rate; 