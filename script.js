
"use strict";
/* //                                            #1

/*1) Create a variable numberOfFilms and put the answer from the user to the question in it:
'How many films have you watched?'  */

/* const numberOfFilms = prompt('How many films have u watched?', ''); */
    

/* 2) Create a personalMovieDB object and put the following properties in it:
    - count - the answer to the first question is passed here
    - movies - put an empty object in this property
    - actors - also place an empty object
    - genres - put an empty array here
    - privat - put boolean (boolean) value false in this property */

/* const personalMoviesDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genders: [],
    privat: false
}; */

/* 3) Ask user each of questions twice:
    - 'One of the last movies you watched?'
    - 'How much would you rate it?'
Answers should be placed in separate variables
Write responses to the movies object in the format:
    movies: {
        'logan': '8.1'
    } */

/*  const lastFilm = prompt('What was u last film?', ''),
    rate     = prompt('how do u rate it?', ''),
    b        = prompt('What was u last film?', ''),
    c        = prompt('how do u rate it?', '');

personalMoviesDB.movies[lastFilm] = rate;
personalMoviesDB.movies[b] = c;   //в квадратных во избежание багов с кирилицей
                                 // не использовать через точку personalMoviesDB.movies.lastFilm = rate; 

console.log(personalMoviesDB);  */

                                 // #2

/* 1) Automate questions to the user about films using a loop */

/*  for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('What was u last film?', ''),
          rate     = prompt('how do u rate it?', '');

    personalMoviesDB.movies[lastFilm] = rate;
}

console.log(personalMoviesDB);  */


/* 2) Make it so that the user cannot leave a response as an empty line,
cancel reply or movie title longer than 50 characters. If this happens -
return the user to the questions again */

/* for (let i = 0; i < 2; i++) {
    let lastFilm = prompt('What was u last film?', ''),
        rate     = prompt('how do u rate it?', '');

    if (lastFilm != null && rate != null && lastFilm != '' && rate != '' && lastFilm.length < 50) {
    personalMoviesDB.movies[lastFilm] = rate; 
    console.log('done');
    }else{
        console.log('error');
        i--;
    }

}
 console.log(personalMoviesDB); */

/* 3) Using conditions, check personalMovieDB.count, and if it is less than 10 - display a message
"Quite a few films have been watched", if from 10 to 30 - "You are a classic spectator", and if more -
"You are a movie fan." And if it did not fit any option - "An error occurred" */ 

/* const numberOfFilms = prompt('How many films have u watched?', ''); */

/* const personalMoviesDB = {
        count: numberOfFilms, 
        movies: {},
        actors: {},
        genders: [],
        privat: false
};
 */

/* for (let i = 0; i < 2; i++) {
    let lastFilm = prompt('What was u last film?', ''),
        rate     = prompt('how do u rate it?', '');

    if (lastFilm != null && rate != null && lastFilm != '' && rate != '' && lastFilm.length < 50) {
        personalMoviesDB.movies[lastFilm] = rate; 
        console.log('done');
    }else{
        console.log('error');
        i--;
    }

} */

/* if (personalMoviesDB.count < 10) {
    console.log('too moderate quantity of films');
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30){
    console.log ('You are a classic viewer');
} else if (personalMoviesDB.count >=30) {
    console.log ('U are a big fun of movies');
} else{
    console.log('error');
}

console.log(personalMoviesDB); */

                        // #3

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('How many films have u watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have u watched?', '');
    }
}

//start();

let personalMoviesDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genders: [],
    privat: false
};



function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    }
}

showMyDB(personalMoviesDB.privat); // эта херня передает false из базы данных

          // option 2
          
/* function showMyDB() {
    if (personalMoviesDB.privat != true) {
        console.log(personalMoviesDB);
    }else{
        console.log('Privat');
    }
}
showMyDB(); */


/* 3) Create a writeYourGenres function, in which the user will answer the question 3 times
"Your favorite genre is $ {sequential number}". Each answer is written to a data array
genres */

function writeYourGenders () {
    
    for (let i = 1; i <= 3; i++) {
        //const answer = prompt(`your number ${i} favourite gender of film is `);
        //personalMoviesDB.genders[i - 1] = answer;
        
        personalMoviesDB.genders[i - 1] = prompt(`your number ${i} favourite gender of film is `);
    }
}

writeYourGenders();
