"use strict";

window.addEventListener('DOMContentLoaded', () => {
        //todo TABS task
   const tabs       = document.querySelectorAll('.tabheader__item'),
         tabsContent = document.querySelectorAll('.tabcontent'),
         tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabContent() {
        tabsContent.forEach(item => {
           //// item.style.display = 'none'; //? заменяем inline стили
            //*классы дописаны в _preview.scss

           item.classList.add('hide');
           item.classList.remove('show', 'fade');
        });

            //*уберем класс активности у табов

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    /* function showTabContent (i) {            //?нужно знать к какому элементу мы обращаемся поэтому передаем аргумент (i)
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    } */

    function showTabContent (i = 0) {           
        ////tabsContent[i].style.display = 'block';            //? заменяем inline стили
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');   


    }

    hideTabContent();
    /* showTabContent(0); */
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Todo TIMER task

    const deadLine = '2021-06-15';

    //* разница между deadLine и текущей датой

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000 * 60 * 60 * 24)) ),      // общее кол-во милисикунд / (милисекунд в сутках) = сколько суток осталось до текущей даты math.округление
            hours = Math.floor( (t/(1000*60*60) % 24) ),  // общее кол-во милисикунд / (милисекунд в часе)
            minutes = Math.floor( (t/1000/60) % 60 ),
            seconds = Math.floor( (t/1000) % 60 );

        return {
            // https://alligator.io/js/object-property-shorthand-es6/
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero (num) {
        if(num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);

        updateClock(); // убирает баг (default date set in HTML) мигания при обновлении страницы

        function updateClock () {
            const t = getTimeRemaining (endTime); // расчет оставшегося времени

         /* days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds; */
            
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);


            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadLine);

    //todo Modal window
    //? добавляем attribute "data-modal" к "связаться с нами" & data-close

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

        /*     modalTrigger.addEventListener('click', () => {
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden'; // позволяет зафиксировать стр при открытии .modal (scrollOFF)
            }); 

            modalCloseBtn.addEventListener('click', () => {
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = ''; 
            }); */

//? вариант решения задичи с toggle 
//? изначально <div class="modal"> изначально у нас .modal display: none

//! ЕСЛИ ВАШ КОД ПОВТОРЯЕТСЯ, ТО ЕСТЬ СМЫСЛ ВЫНЕСТИ ДАННЫЕ СТРОКИ В ОТДЕЛЬНУЮ ФУНКЦИЮ

    function openModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden'; // позволяет зафиксировать стр при открытии .modal (scrollOFF)
        clearInterval(modalTimerID); // если пользователь сам открыл modal то интервал открытия сбростся
    }

    modalTrigger.forEach(btn  => {
        btn.addEventListener('click', openModal); 
        
            /* () => {
            modal.classList.toggle('show');
            document.body.style.overflow = 'hidden'; // позволяет зафиксировать стр при открытии .modal (scrollOFF)
            }); */

    }); 

    function closeModal () {
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);
            
                    /* () => {
                    modal.classList.toggle('show');
                    document.body.style.overflow = ''; 
            }); */

 
//! ЕСЛИ ВАШ КОД ПОВТОРЯЕТСЯ, ТО ЕСТЬ СМЫСЛ ВЫНЕСТИ ДАННЫЕ СТРОКИ В ОТДЕЛЬНУЮ ФУНКЦИЮ 

    //todo закрытие modal по клику вне области modal

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            /* modal.classList.toggle('show');
            document.body.style.overflow = '';  */
            closeModal();
        }
    });

     //todo закрытие modal по нажатию ESC https://keycode.info/

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { // что бы esc срабатовал когда есть класс show
            closeModal();
        }
    });

    //todo modal появляется когда пользователь долистал стр до конца либо чере опред промежуток времени

    //const modalTimerID = setTimeout(openModal, 5000);

    // todo если пользователь долистал страницу до конца то выскочит модалка

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

            /*  () => {
                if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                    openModal();
                }
            },  {once: true} ); */

    //todo использование классов для карточек

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
        //* потом идут методы

        changeToUAH()  {
            this.price = this.price * this.transfer;
        }
            //* создание структуры <div class="menu__item">

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    /* const div = new MenuCard();
       div.render(); */

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес" ',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
    ).render(); // альтернативная запись при одноразовом использовании

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум” ',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное" ',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container'
    ).render(); 
});