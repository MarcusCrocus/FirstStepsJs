/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('DOMContentLoaded', () => {
  //todo TABS task
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      //// item.style.display = 'none'; //? заменяем inline стили
      //*классы дописаны в _preview.scss
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    }); //*уберем класс активности у табов

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }
  /* function showTabContent (i) {            //?нужно знать к какому элементу мы обращаемся поэтому передаем аргумент (i)
      tabContent[i].style.display = 'block';
      tabs[i].classList.add('tabheader__item_active');
  } */


  function showTabContent(i = 0) {
    ////tabsContent[i].style.display = 'block';            //? заменяем inline стили
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  /* showTabContent(0); */

  showTabContent();
  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  }); //Todo TIMER task

  const deadLine = '2021-07-20'; //* разница между deadLine и текущей датой

  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          // общее кол-во милисикунд / (милисекунд в сутках) = сколько суток осталось до текущей даты math.округление
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
          // общее кол-во милисикунд / (милисекунд в часе)
    minutes = Math.floor(t / 1000 / 60 % 60),
          seconds = Math.floor(t / 1000 % 60);
    return {
      // https://alligator.io/js/object-property-shorthand-es6/
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  } //* ф-ция установки таймера на страницу


  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    updateClock(); // убирает баг (default date set in HTML) мигания при обновлении страницы

    function updateClock() {
      const t = getTimeRemaining(endTime); // расчет оставшегося времени

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
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
      }
    }
  }

  setClock('.timer', deadLine); //todo Modal window
  //? добавляем attribute "data-modal" к "связаться с нами" & data-close

  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');
  /* modalCloseBtn = document.querySelector('[data-close]'); */
  //!! lesson №54 создается динамический элемент <div class="modal__close" data-close>×</div> поэтому обработчик событий уже не повесить = использовать делегирование

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

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
    /* () => {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden'; // позволяет зафиксировать стр при открытии .modal (scrollOFF)
    }); */
  });

  function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
  }
  /*  modalCloseBtn.addEventListener('click', closeModal); */
  //!! lesson 54 <div class="modal__close" data-close>×</div> поэтому обработчик событий уже не повесить = использовать делегирование

  /* () => {
  modal.classList.toggle('show');
  document.body.style.overflow = ''; 
  }); */
  //! ЕСЛИ ВАШ КОД ПОВТОРЯЕТСЯ, ТО ЕСТЬ СМЫСЛ ВЫНЕСТИ ДАННЫЕ СТРОКИ В ОТДЕЛЬНУЮ ФУНКЦИЮ 
  //todo закрытие modal по клику вне области modal
  //? <div class="modal__close" data-close>×</div> поэтому обработчик событий уже не повесить = использовать делегирование || e.target.getAttribute('data-close') ==''


  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      /* modal.classList.toggle('show');
      document.body.style.overflow = '';  */
      closeModal();
    }
  }); //todo закрытие modal по нажатию ESC https://keycode.info/

  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      // что бы esc срабатовал когда есть класс show
      closeModal();
    }
  }); //todo modal появляется когда пользователь долистал стр до конца либо чере опред промежуток времени

  const modalTimerID = setTimeout(openModal, 50000); // todo если пользователь долистал страницу до конца то выскочит модалка

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
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes; // передается неизвестное кол-во классов, которые могут быть присвоены в будующем

      this.parent = document.querySelector(parentSelector); // родительский селектор

      this.transfer = 27;
      this.changeToUAH(); // можно вызвать этот метот здесь
    } //* потом идут методы


    changeToUAH() {
      this.price = this.price * this.transfer;
    } //* создание структуры <div class="menu__item">
    //? метод changeToUAH(); можно вызывать сразу в конструкторе либо в render


    render() {
      const element = document.createElement('div'); //! когда забыл во второй карточке прописать дефолтный класс menu__item

      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(сlassName => element.classList.add(сlassName));
      } ////this.classes.forEach(ClassName => element.classList.add(ClassName));


      element.innerHTML = `
                
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                
            `;
      this.parent.append(element);
    }

  }
  /* const div = new MenuCard();
     div.render(); */
  // new MenuCard().render();


  new MenuCard("img/tabs/vegy.jpg", "vegy", 'Меню "Фитнес" ', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 9, '.menu .container', // родительский селектор
  'menu__item', 'big').render(); // альтернативная запись при одноразовом использовании

  new MenuCard("img/tabs/elite.jpg", "elite", 'Меню “Премиум” ', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 14, '.menu .container').render();
  new MenuCard("img/tabs/post.jpg", "post", 'Меню "Постное" ', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 21, '.menu .container', 'menu__item', 'big').render(); // todo lesson 53 Forms при помощи XMLHttprequest (устаревший метод)

  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  forms.forEach(item => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault(); // отмена стандартного поведения перезагрузки браузера при клик отправка

      const statusMessage = document.createElement('img'); //statusMessage.classList.add('status'); такого статуса нет

      statusMessage.src = message.loading; //statusMessage.textContent = message.loading;

      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `; //form.append(statusMessage);

      form.insertAdjacentElement('afterend', statusMessage);
      const request = new XMLHttpRequest();
      request.open('POST', 'server.php'); // данный которые введет пользователь в форму получить в js.script и отправить на сервер
      //? #Способ №1 formData (простая отправка данных)

      /* request.setRequestHeader('Contente-type', 'multipart/form-data');
         const formData = new FormData(form); 
         //! что бы все было правильно сформировано в форме modal или импуте должно всегда быть NAME="NAME" NAME="PHONE"
           request.send(formData);
           request.addEventListener('load', () => {
             if (request.status === 200) {
                 console.log(request.response);
                 statusMessage.textContent = message.success;
                 form.reset();
                 setTimeout(() => {
                     statusMessage.remove();
                 }, 2000);
             } else {
                 statusMessage.textContent = message.failure; 
             }
         }); */
      //? #Способ №2 formData ( отправка данных в формате JSON)

      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      const formData = new FormData(form);
      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      const json = JSON.stringify(object);
      request.send(json);
      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
          showThanksModal(message.success);
          statusMessage.remove();
          form.reset();
        } else {
          showThanksModal(message.failure);
        }
      });
    });
  } // TODO Lesson 54 post form


  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog'); // скрываем элемент

    prevModalDialog.classList.add('hide');
    openModal(); // создание контента

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map