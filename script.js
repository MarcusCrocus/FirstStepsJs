
"use strict";

/*1) Create a variable numberOfFilms and put the answer from the user to the question in it:
'How many films have you watched?'  */

let numberOfFilms = prompt('How many films have u watched?', '');
    

/* 2) Create a personalMovieDB object and put the following properties in it:
    - count - the answer to the first question is passed here
    - movies - put an empty object in this property
    - actors - also place an empty object
    - genres - put an empty array here
    - privat - put boolean (boolean) value false in this property */

let personalMoviesDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

/* 3) Ask user each of questions twice:
    - 'One of the last movies you watched?'
    - 'How much would you rate it?'
Answers should be placed in separate variables
Write responses to the movies object in the format:
    movies: {
        'logan': '8.1'
    } */

let lastFilm = prompt('What was u last film?', ''),
    rate     = prompt('how do u rate it?', ''),
    b        = prompt('What was u last film?', ''),
    c        = prompt('how do u rate it?', '');

personalMoviesDB.movies[lastFilm] = rate;
personalMoviesDB.movies[b] = c;   //в квадратных во избежание багов с кирилицей

console.log(personalMoviesDB);


