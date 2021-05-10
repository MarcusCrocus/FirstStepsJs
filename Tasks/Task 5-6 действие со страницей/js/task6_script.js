/* 1.2) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

а. отменить стандартное поведение перезагрузки браузера
б. обратиться к форме заполнения фильма добавить функционал добавления в DB 

2.2) Если название фильма больше, чем 12 символ - обрезать его и добавить три точки

3.2) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4.2 ) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 

5) Фильмы должны быть отсортированы по алфавиту
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
        addForm = document.querySelector('form.add'), //  получаем элементы с которыми будем работать
        addInput = addForm.querySelector('.adding__input'), //  получаем INPUT по классу
        checkbox = addForm.querySelector('[type="checkbox"]'); // находим через атрибут HTML (выделется та галочка внутри формы чекбокс)


    addForm.addEventListener('submit', (event) => { // обработчик событий, чтобы отстследить отправку формы 
        event.preventDefault(); //(прописываем 'еvent' чтобы отменить стандартное поведение reload после нажатия submit )

        let newFilm = addInput.value; // узнаем новый фильм и проверяем его value (пустая строка)
        const favorite = checkbox.checked; // true\false проверяем его value(checked получаем булиновое для определения галочки)


        //? убираем пустые строки в DB

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 12)}...`; //todo 2.2) Если название фильма больше, чем 12 символ - обрезать его и добавить три точки
            }
            
            if(favorite) {
                console.log('добавляем любимый фильм');  //todo 4.2 ) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
            }

            movieDB.movies.push(newFilm);                   // пушим новый фильм (приходит в форме строки)
            sortArr(movieDB.movies);                        //* из функции
            createMovieList(movieDB.movies, listItems);     //* из функции
        }
        ////movieDB.movies.push(newFilm);                          // пушим новый фильм (приходит в форме строки)
        ////movieDB.movies.sort(); //сортируем
        ////sortArr(movieDB.movies);                              //* из функции
        ////createMovieList(movieDB.movies, listItems);            //* из функции
        event.target.reset(); // очистка формы

    });


    const deleteAdv = (arr) => {
        arr.forEach(item => { // что бы не привязываться жестко к элементам
            item.remove();
        });
    };
    deleteAdv(advertisement);


    const makeChanges = () => {
        changeGenre.textContent = 'drama';
        changeBG.style.backgroundImage = 'url("img/bg.jpg")';
    };
    makeChanges();


    const sortArr = (arr) => {
        arr.sort();
    };
    ////sortArr(movieDB.movies);


    function createMovieList(films, parent) {  // заменяем на аргументы а и передаем в функцию createMovieList(movieDB.movies, listItems);

        parent.innerHTML = '';
        sortArr(films);                            //todo 5) Фильмы должны быть отсортированы по алфавиту перенос (сортировка при удалении лучше)
        films.forEach((film, i) => {
            parent.innerHTML += `                          
                <li class="promo__interactive-item"> ${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });



        //todo 3.2) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);                    // удаляем элемент и массив под этим номером
                createMovieList(films, parent);     // перестраиваем список по-порядку заново
            });
        });

    }
    createMovieList(movieDB.movies, listItems);




});