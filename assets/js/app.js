;((window) => {
  'use strict';

  class App {
    constructor() {
      this.Init();
    }

    Init() {
      this.navigation();
      this.modal();
      this.firstSectionDynamicHeight();
      this.inputDynamicPlaceholder();
      this.dragToResizeSlider();
    }

    navigation() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    }

    modal() {
      const formModal = document.getElementById('formModal');
      
      if (formModal) {
        formModal.addEventListener('shown.bs.modal', () => {});
      }
    }

    firstSectionDynamicHeight() {
      const header = document.getElementById('header');
      const section1 = document.getElementById('section-1');
      const section1Item1 = document.getElementById('section-1-item-1');
      const section1Item2 = document.getElementById('section-1-item-2');

      section1.style.height = `calc(100vh - ${header.offsetHeight}px)`;
      section1Item1.style.height = `calc(100vh - ${header.offsetHeight}px)`;
      section1Item2.style.height = `calc(100vh - ${header.offsetHeight}px)`;
    }

    inputDynamicPlaceholder() {
      const inputCollection = document.getElementsByClassName('input');
      const labelCollection = document.getElementsByClassName('label');

      for (let i = 0; i< inputCollection.length; i++) {
        inputCollection[i].addEventListener('focus', e => {
          if (e.target.getAttribute('id') === labelCollection[i].getAttribute('data-id')) {
            labelCollection[i].style.fontSize = '11px';
            labelCollection[i].style.top = '10px';
          }
        });

        inputCollection[i].addEventListener('blur', e => {
          if (e.target.getAttribute('id') === labelCollection[i].getAttribute('data-id')) {
            if (e.target.value === '') {
              labelCollection[i].style.fontSize = '16px';
              labelCollection[i].style.top = '16px';
            }
          }
        });
      }
    }

    dragToResizeSlider() {
      window.Split({
        columnGutters: [{
          track: 1,
          element: document.querySelector('.gutter-col-1'),
        }],
      });
    }
  };

  new App();
})(window);