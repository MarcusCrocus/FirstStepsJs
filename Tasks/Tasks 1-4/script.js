
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
    - private - put boolean (boolean) value false in this property */

/* const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genders: [],
    private: false
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

personalMovieDB.movies[lastFilm] = rate;
personalMovieDB.movies[b] = c;   //в квадратных во избежание багов с кирилицей
    // не использовать через точку personalMovieDB.movies.lastFilm = rate; 

console.log(personalMovieDB);  */

                                 // #2

/* 1) Automate questions to the user about films using a loop */

/*  for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('What was u last film?', ''),
          rate     = prompt('how do u rate it?', '');

    personalMovieDB.movies[lastFilm] = rate;
}

console.log(personalMovieDB);  */


/* 2) Make it so that the user cannot leave a response as an empty line,
cancel reply or movie title longer than 50 characters. If this happens -
return the user to the questions again */

/* for (let i = 0; i < 2; i++) {
    let lastFilm = prompt('What was u last film?', ''),
        rate     = prompt('how do u rate it?', '');

    if (lastFilm != null && rate != null && lastFilm != '' && rate != '' && lastFilm.length < 50) {
    personalMovieDB.movies[lastFilm] = rate; 
    console.log('done');
    }else{
        console.log('error');
        i--;
    }

}
 console.log(personalMovieDB); */

/* 3) Using conditions, check personalMovieDB.count, and if it is less than 10 - display a message
"Quite a few films have been watched", if from 10 to 30 - "You are a classic spectator", and if more -
"You are a movie fan." And if it did not fit any option - "An error occurred" */ 

/* const numberOfFilms = prompt('How many films have u watched?', ''); */

/* const personalMovieDB = {
        count: numberOfFilms, 
        movies: {},
        actors: {},
        genders: [],
        private: false
};
 */

/* for (let i = 0; i < 2; i++) {
    let lastFilm = prompt('What was u last film?', ''),
        rate     = prompt('how do u rate it?', '');

    if (lastFilm != null && rate != null && lastFilm != '' && rate != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = rate; 
        console.log('done');
    }else{
        console.log('error');
        i--;
    }

} */

/* if (personalMovieDB.count < 10) {
    console.log('too moderate quantity of films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log ('You are a classic viewer');
} else if (personalMovieDB.count >=30) {
    console.log ('U are a big fun of movies');
} else{
    console.log('error');
}

console.log(personalMovieDB); */

                        // #3

/* let numberOfFilms;

function start () {
    numberOfFilms = +prompt('How many films have u watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have u watched?', '');
    }
}

//start(); */

/* let personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genders: [],
    private: false
};



function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

/* showMyDB(personalMovieDB.private); */ // эта херня передает false из базы данных

          // option 2
          
/* function showMyDB() {
    if (personalMovieDB.private != true) {
        console.log(personalMovieDB);
    }else{
        console.log('Private');
    }
}
        // option 3
    if(personalMovieDB.private == false){
        console.log(personalMovieDB);
    }
showMyDB(); */


/* 3) Create a writeYourGenres function, in which the user will answer the question 3 times
"Your favorite genre is $ {sequential number}". Each answer is written to a data array
genres */

/* function writeYourGenders () {
    
    for (let i = 1; i <= 3; i++) {
        //const answer = prompt(`your number ${i} favorite gender of film is `);
        //personalMovieDB.genders[i - 1] = answer;
        
        personalMovieDB.genders[i - 1] = prompt(`your number ${i} favorite gender of film is `);
    }
                            option 2
                            
        for (let i = 0; i < 3; i++) {
        let question = prompt(`What is u favorite genre ${i + 1}`, '');

        personalMovieDB.genres[i] = question;
    }
}

writeYourGenders(); */

                           //   #4
/* 1) We already have a working application consisting of separate functions.Imagine that your task is to rewrite it so that all functions become methods of the personalMovieDB object
This happens in real products when changing technologies or approach to program architecture. */

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genre: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('how many movies have you watched', '');
    
        while (personalMovieDB.count == 'null' || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('how many films you have already looked', '');
        }
    },
    rememberMyFilms: function() {

        for(let i = 0; i < 2; i++) {
            let film = prompt('One of the latest movie viewed?', ''),
                rate = prompt('How much would you rate it?', '');
            
            if (film != '' && film != null && rate != '' && rate != null && film.length < 50 ) {
                console.log("done");
                personalMovieDB.movies[film] = rate;
                
            } else {
                console.log("error");
                i--; 
            }  
        }
    },
    detectPersonalLevel: function() {

        if (personalMovieDB.count < 10) {
            console.log('too moderate quantity of films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log ('You are a classic viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log ('U are a big fun of movies');
        } else{
            console.log('error');
        }
        
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

            /*2) Create a ToggleVisibleMyDB method, which will check the Private property when calling.If it is false - he Switches it to True if true - switches to FALSE.Test with ShowMyDB. */

    toggleVisibleMyDB: function() {
        if(personalMovieDB.private) {
            personalMovieDB.private = false;
        }else{
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let answer = prompt(`Your favorite genre at number ${i} `);
            personalMovieDB.genre[i - 1] = answer;
        }
    }


};


