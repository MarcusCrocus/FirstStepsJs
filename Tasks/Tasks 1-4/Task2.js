/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 10 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

'use strict';

const numberOfFilms = prompt('How many films have u watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    let lastFilm = prompt('What was u last film?', ''),
          rate     = prompt('how do u rate it?', '');
    
    if (lastFilm != null && lastFilm != '' && rate != null && rate != '' && lastFilm.length < 10) {
        personalMovieDB.movies[lastFilm] = rate;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

     //в квадратных во избежание багов с кирилицей
    //! не использовать через точку personalMovieDB.movies.lastFilm = rate; 
}

if (personalMovieDB.count < 10) {
    console.log('too moderate quantity of films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log ('You are a classic viewer');
} else if (personalMovieDB.count >=30) {
    console.log ('U are a big fun of movies');
} else{
    console.log('error');
}

console.log(personalMovieDB);