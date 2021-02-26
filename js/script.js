"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы посмотрели за последний год?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("На сколько оцените его по 10й шкале?", "");

  if (a != null && b != null
   && a != "" && b != ""
   && b <= 10
   && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("Выполнено");
  } else {
    console.log("Error");
    i--;
  }
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30){
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}


