"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genre: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('how many movies have you watched', '');

        while (personalMovieDB.count == 'null' || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('how many films you have already looked', '');
        }
    },
    
    rememberMyFilms: function () {

        for (let i = 0; i < 2; i++) {
            let film = prompt('One of the latest movie viewed?', ''),
                rate = prompt('How much would you rate it?', '');

            if (film != '' && film != null && rate != '' && rate != null && film.length < 50) {
                console.log("done");
                personalMovieDB.movies[film] = rate;

            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {

        if (personalMovieDB.count < 10) {
            console.log('too moderate quantity of films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are a classic viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log('U are a big fun of movies');
        } else {
            console.log('error');
        }

    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let answer = prompt(`Your favorite genre at number ${i} `);

            if (answer === null || answer === '') {
                i--;    
            } else {
                personalMovieDB.genre[i - 1] = answer;
            } 
            while( answer != null || answer != '') {
                personalMovieDB.genre[i - 1] = answer;
            }

/*             let answer = prompt('Enter your favorite commas genres');

            if(answer ==='' || answer === null) {
                console.log ('You introduced incorrectly given or not introduced them at all');
                i--;
            }else {
                personalMovieDB.genre.split(', ');
                personalMovieDB.genre.sort();
            } */
        }
        personalMovieDB.genre.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} - this is ${item}`);
        });
        
    },
};

