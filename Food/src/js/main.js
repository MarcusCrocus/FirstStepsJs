"use strict";

window.addEventListener('DOMContentLoaded', () => {

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

/*     function showTabContent (i) {            //?нужно знать к какому элементу мы обращаемся поэтому передаем аргумент (i)
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

});