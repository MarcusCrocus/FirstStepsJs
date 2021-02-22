"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмо вы уже посмотрели', '');

    while (numberOfFilms == 'null' || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмо вы уже посмотрели', '');
    }
}

start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

function rememberMyFilms() {

    for(let i = 0; i < 2; i++) {
        let film = prompt('Один из последних просмотренных фильмов?', ''),
            rate = prompt('На сколько оцените его?', '');
        
        if (film != '' && film != null && rate != '' && rate != null && film.length < 50 ) {
            console.log("done");
            personalMoviesDB.movies[film] = rate;
            
        } else {
            console.log("error");
            i--; 
        }  
    }
}

rememberMyFilms();


function detectPersonalLevel() {

    if (personalMoviesDB.count < 10) {
        console.log('too moderate quantity of films');
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30){
        console.log ('You are a classic viewer');
    } else if (personalMoviesDB.count >= 30) {
        console.log ('U are a big fun of movies');
    } else{
        console.log('error');
    }
    
}

detectPersonalLevel();

console.log(personalMoviesDB);



function showMyDB() {
    if (personalMoviesDB.privat != true) {
        console.log(personalMoviesDB);
    }else{
        console.log('Privat');
    }
}
showMyDB();



function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let answer = prompt(`Ваш любимый жанр под номером ${i} `);
        personalMoviesDB.genders[i - 1] = answer;
    }
}
writeYourGenres();
