/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genders: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films have u watched?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have u watched?', '');
        }
    },

    rememberMyFilms: function() {
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
            //! почему не работает
 /*              if ((lastFilm == null || lastFilm == '') || (( rate == null || rate == '') && lastFilm.length < 10) {
                console.log('error');
                i--;

            } else {
                personalMovieDB.movies[lastFilm] = rate;
                console.log('done');
            } */
        }
        
             //в квадратных во избежание багов с кирилицей
            //! не использовать через точку personalMovieDB.movies.lastFilm = rate; 
        
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('too moderate quantity of films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log ('You are a classic viewer');
        } else if (personalMovieDB.count >=30) {
            console.log ('U are a big fun of movies');
        } else{
            console.log('error');
        }
    },

    showMyDB: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
        personalMovieDB.private = false;
        } else{
        personalMovieDB.private = true;
        }
    },

    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let answer = prompt(`Your favorite genre at number ${i + 1}`);
            
             if(answer == '' || answer == null) {
                console.log('You have entered incorrect data');
                i--;
            } else {
                personalMovieDB.genders[i] = answer;
            }
           
        }
        personalMovieDB.genders.forEach((item, i) => { 
            console.log(` Favorite genre ${i + 1} - это ${item}  `);
        });
    }
};
