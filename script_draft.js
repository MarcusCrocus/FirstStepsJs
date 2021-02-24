"use strict";

let numberOfFilms;

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    private: false
    start: function() {
        numberOfFilms = +prompt('how many movies have you watched', '');
    
        while (numberOfFilms == 'null' || numberOfFilms == '' || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('how many films you have already looked', '');
        }
    }
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
    if (personalMoviesDB.private != true) {
        console.log(personalMoviesDB);
    }else{
        console.log('Private');
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

