/* 1.2) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

а. отменить стандартное поведение перезагрузки браузера
б. обратиться к форме заполнения фильма добавить функционал добавления в DB 

2.2) Если название фильма больше, чем 12 символ - обрезать его и добавить три точки

3.2) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
*/

'use strict';

document.addEventListener('DOMContentLoaded', () => { // ! скрипт будет выполняться когда дерево тегов будет загружено



    const advertisement = document.querySelectorAll('.promo__adv img'),
        changeGenre = document.querySelector('.promo__genre'),
        changeBG = document.querySelector('.promo__bg'),

        movieDB = {
            movies: [
                "Скотт Пилигрим против...",
                "Логан",
                "Лига справедливости",
                "Ла-ла лэнд",
                "Одержимость"

            ]
        },
        listItems = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),               // * получаем элементы с которыми будем работать
        addInput = addForm.querySelector('.adding__input'),        // * получаем INPUT по классу
        checkbox = addForm.querySelector('[type="checkbox"]'); //* находим через атрибут HTML

    addForm.addEventListener('submit', (event) => {           //* обработчик событий, чтобы отстследить отправку формы 
        event.preventDefault();                              //*(прописываем 'еvent' чтобы отменить стандартное поведение reload после нажатия submit )

        let newFilm = addInput.value;                      // узнаем новый фильм и проверяем его value (пустая строка)
        const favorite = checkbox.checked;                  //* узнаем новый фильм и проверяем его value(checked получаем булиновое для определения калочки)



       //// movieDB.movies.push(newFilm);                     //*пушим новый фильм
       //// sortArr(movieDB.movies);

       //? создаём новую базу фильмов

       //// createMovieList(movieDB.movies, listItems);

       if (newFilm) {                                       //* если пустая строка false if true выполняем действия по списку
          
        if(newFilm.length > 12) {
            newFilm = `${newFilm.substring(0, 12)}...`;   //* 2.2) 12 символ - обрезать его и добавить три точки
        }

        movieDB.movies.push(newFilm);                     // *пушим новый фильм
        sortArr(movieDB.movies);

        // todo: создаём новую базу фильмов

        createMovieList(movieDB.movies, listItems);
    }

        ////addForm.reset();                                 //* очистка формы
        event.target.reset();                                 //* очистка формы

    });


    const deleteAdv = (arr) => {
        arr.forEach(item => {                               // * убираем привязку и ставим какойто arr
            item.remove();
        });
    };

    ////deleteAdv(advertisement); //! не забываем вызывать функцию



    const makeChanges = () => { // объединяем 2 действия в функцию
        changeGenre.textContent = 'drama'; //                     //  2) Изменить жанр фильма, поменять "комедия" на "драма"
        changeBG.style.backgroundImage = 'url("img/bg.jpg")'; //   3.1) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
    };

    ////makeChanges();

    //       Реализовать только при помощи JS

    //    4.1) Список фильмов на странице сформировать на основании данных из этого JS файла.
    //       Отсортировать их по алфавиту 
    //      добавить нумерацию

    // Todo: что бы переиспользовать функционал ниже оборачиваем в функциюсоздаем 
/*          listItems.innerHTML = ''; // очистка старой базы фильмов

        movieDB.movies.sort(); //методы массива можно глянуть console.dir(movieDB)

        console.log(changeBG.innerHTML);                // получаем значение этого свойства выводит html в текстовом формате

        movieDB.movies.forEach((film, i) => {
            listItems.innerHTML += `                          
            <li class="promo__interactive-item"> ${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `; // a = a + 1       // a += 1
            // добавляем верстку
    //    }); */

    const sortArr = (arr) => {
        arr.sort();
    };
    
    ////sortArr(movieDB.movies);



    function createMovieList(films, parent) { // !делаем функцию независимой без привязки к верстке parent - родительский  
        parent.innerHTML = ''; // очистка старой базы фильмов

        console.log(changeBG.innerHTML); // получаем значение выводит html в текстовом формате

        films.forEach((film, i) => {
            parent.innerHTML += `                          
            <li class="promo__interactive-item"> ${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `; // a = a + 1       // a += 1
            // добавляем верстку
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {    //3.2) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(movieDB.movies, listItems);  // !рекурсия  перераспределяет нумерацию заново
            });
        });
    }

    // todo: выносим вызовы всех функций вконец

    deleteAdv(advertisement);
    makeChanges();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, listItems);

});