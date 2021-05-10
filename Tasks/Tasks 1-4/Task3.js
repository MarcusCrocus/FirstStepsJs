/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have u watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have u watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    private: false
};

 function rememberMyFilms (){
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
} 

rememberMyFilms ();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('too moderate quantity of films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log ('You are a classic viewer');
    } else if (personalMovieDB.count >=30) {
        console.log ('U are a big fun of movies');
    } else{
        console.log('error');
    }
}

detectPersonalLevel();
// todo my code
/* function showMyDB() {
    if(personalMovieDB.private != false) {
        console.log('it works');
    }else{
        console.log(personalMovieDB);
    }

} */
 function showMyDB (hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
} 

showMyDB(personalMovieDB.private);

function writeYourGenres (){
    for (let i = 0; i < 3; i++){
        personalMovieDB.genders[i] = prompt(`Your favorite genre at number ${i + 1}`);
        
    }
}

writeYourGenres();

// todo option 2 (from course) 
/* function writeYourGenres (){
    for (let i = 1; i <=3; i++){
        const genders = prompt(`Your favorite genre at number ${i}`);
        personalMovieDB.genders[i-1] = genders;
        
    }
    console.log(personalMovieDB);
}

writeYourGenres(); */