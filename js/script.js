// строгий режим
"use strict"

window.addEventListener('load', function (event) {

   if (typeof isMobile == 'undefined') {
      const isMobile = {
         Android: function () { return navigator.userAgent.match(/Android/i) },
         BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i) },
         iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i) },
         Opera: function () { return navigator.userAgent.match(/Opera Mini/i) },
         Windows: function () { return navigator.userAgent.match(/IEMobile/i) },
         any: function () {
            return (
               isMobile.Android() ||
               isMobile.BlackBerry() ||
               isMobile.iOS() ||
               isMobile.Opera() ||
               isMobile.Windows());
         }
      };
      if (isMobile.any()) { document.body.classList.add('_touch') } else { document.body.classList.add('_pc') };
   }

   const HEADER = document.querySelector('header');
   const BRAND_MISSION_SLIDER = document.querySelector('.brand-mission__slider');
   const BRAND_MISSION_SLIDER_BODY = document.querySelector('.brand-mission__slider-body');
   const BRAND_MISSION_SLIDER_ITEM = document.querySelectorAll('.brand-mission__slider-item');
   const TEAM_SLIDER = document.querySelector('.team__slider');
   const TEAM_SLIDER_BODY = document.querySelector('.team__slider-body');
   const TEAM_SLIDER_ITEM = document.querySelectorAll('.team__slider-item');
   const CARD_SLIDER = document.querySelector('.card-template__slider');
   const CARD_SLIDER_WRAPPER = document.querySelector('.card-template__wrapper');
   const CARD_SLIDER_ITEM = document.querySelectorAll('.card-template__item');
   const BUYERS_SLIDER = document.querySelector('.buyers__swiper');
   const BUYERS_SLIDER_WRAPPER = document.querySelector('.buyers__swiper .slider-version__list');
   const BUYERS_SLIDER_ITEM = document.querySelectorAll('.buyers__swiper .slider-staps__item');
   const BURGER_BUTTON = document.querySelector('#burger-button');
   const BURGER_MENU = document.querySelector('#burger-menu');
   const HEADER_MENU_ITEM = document.querySelectorAll('.header__menu-item');
   const MEANING_SIZE = document.querySelector('#meaning-size');
   const MEANING_SIZE_TEXT = document.querySelector('#meaning-size-text');
   const CARD_SIZE_MENU = document.querySelector('#card-size-menu');
   const FORM_CARD_BUTTON = document.querySelector('#form-card__button');
   const FILTER_SORTING = document.querySelector('.filter__sorting');
   const FILTER_SORTING_TITLE = document.querySelector('.filter__sorting-title');
   const FILTER_SORTING_CONTENT = document.querySelector('.filter__sorting .filter__content');
   const FILTER_SORTING_LIST = document.querySelector('.filter__sorting-list');
   const FILTER_CATALOG = document.querySelector('.filter__catalog');
   const FILTER_CATALOG_TITLE = document.querySelector('.filter__catalog .filter__content-title');
   const FILTER_CATALOG_CONTENT = document.querySelector('.filter__catalog .filter__content');
   const FILTER_CATALOG_LIST = document.querySelector('.filter__catalog-list');
   const LIST_LEFT = document.querySelector('.list-card__left');
   const FILTER_BLOCK = document.querySelector('.filter__block');

   document.body.style.setProperty('--height-header', `${HEADER.clientHeight}px`)
   if (document.querySelector('#banner-sale')) {
      const BANNER_SALE = document.querySelector('#banner-sale');
      const BANNER_SALE_CLOSE = document.querySelector('#banner-sale-close');
      document.body.style.setProperty('--height-banner-sale', `${BANNER_SALE.clientHeight}px`)
      BANNER_SALE_CLOSE.addEventListener('click', (e) => removeBannerSale());
      function removeBannerSale() {
         BANNER_SALE.remove();
         document.body.style.setProperty('--height-banner-sale', `0px`);
      }
   }


   if (document.querySelector('.recently__swiper')) {
      const swiper = new Swiper('.recently__swiper', {
         navigation: {
            nextEl: '.recently__next',
            prevEl: '.recently__prev',
         },
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
         speed: 300,
         slidesPerView: 2,
         spaceBetween: 5,
         breakpoints: {
            768: {
               spaceBetween: 15,
               slidesPerView: 2.6,
            },
            1024: {
               spaceBetween: 15,
               slidesPerView: 5,
            },
         }
      });
   }

   if (document.querySelector('.capsule-product__swiper')) {
      const swiper = new Swiper('.capsule-product__swiper', {
         navigation: {
            nextEl: '.capsule-product__next',
            prevEl: '.capsule-product__prev',
         },
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
         loop: true,
         speed: 300,
         slidesPerView: 2,
         spaceBetween: 10,
         breakpoints: {
            768: {
               spaceBetween: 15,
               slidesPerView: 3,
            },
            1024: {
               spaceBetween: 15,
               slidesPerView: 4,
            },
         }
      });
   }

   if (document.querySelector('.like-it__swiper')) {
      const swiper = new Swiper('.like-it__swiper', {
         navigation: {
            nextEl: '.like-it__next',
            prevEl: '.like-it__prev',
         },
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
         loop: true,
         speed: 300,
         slidesPerView: 2,
         spaceBetween: 10,
         breakpoints: {
            768: {
               spaceBetween: 15,
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 4,
            },
         }
      });
   }

   if (document.querySelector('.things__swiper')) {
      const swiper = new Swiper('.things__swiper', {
         navigation: {
            nextEl: '.things__next',
            prevEl: '.things__prev',
         },
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
         loop: true,
         speed: 300,
         slidesPerView: 2,
         spaceBetween: 10,
         breakpoints: {
            768: {
               spaceBetween: 15,
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 4,
            },
         }
      });
   }

   if (document.querySelector('.brand-mission__slider')) {
      const swiper = new Swiper('.brand-mission__slider', {
         navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
         },
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
         speed: 300,
         slidesPerView: 1.2,
         spaceBetween: 10,
      });
   }
   if (document.querySelector('.team__slider')) {
      const swiper = new Swiper('.team__slider', {
         navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
         },
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
         speed: 300,
         slidesPerView: 1.4,
         spaceBetween: 15,
      });
   }
   if (document.querySelector('.card-template__slider')) {
      const swiper = new Swiper('.card-template__slider', {
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
         autoplay: {
            delay: 5000,
         },
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
         loop: true,
         speed: 300,
         slidesPerView: 1,
         spaceBetween: 10,
      });
   }
   if (document.querySelector('.main-slider')) {
      const swiper = new Swiper('.main-slider', {
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
         autoplay: {
            delay: 5000,
         },
         pagination: {
            el: '.main-slider__pagination-body',
            clickable: true,
         },
         loop: true,
         speed: 700,
         slidesPerView: 1,
         spaceBetween: 10,
      });
   }
   if (document.querySelector('.buyers__swiper')) {
      const swiper = new Swiper('.buyers__swiper', {
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
         loop: true,
         speed: 300,
         slidesPerView: 4,
         spaceBetween: 15,
         navigation: {
            nextEl: '.buyers-next',
            prevEl: '.buyers-prev',
         },
      });
   }

   if (document.querySelector('.interesting__swiper')) {
      const swiper = new Swiper('.interesting__swiper', {
         navigation: {
            nextEl: '.interesting__next',
            prevEl: '.interesting__prev',
         },
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
         speed: 300,
         slidesPerView: 2,
         spaceBetween: 10,
         breakpoints: {
            768: {
               spaceBetween: 15,
               slidesPerView: 2.6,
            },
            1024: {
               spaceBetween: 15,
               slidesPerView: 4,
            },
         }
      });
   }

   function initSlider(media, slider, sliderBody, sliderItem) {
      const hasSwiper = slider.classList.contains('swiper');
      if (!media && !hasSwiper) {
         slider.classList.add('swiper');
         sliderBody.classList.add('swiper-wrapper');
         sliderItem.forEach((e) => {
            e.classList.add('swiper-slide');
         });
      } else if (media && hasSwiper) {
         slider.classList.remove('swiper');
         sliderBody.classList.remove('swiper-wrapper');
         sliderBody.removeAttribute('style');
         sliderItem.forEach((e) => {
            e.classList.remove('swiper-slide');
            e.removeAttribute('style');
         });
      }
   }

   if (document.querySelector('header')) {
      function openMenu() {
         HEADER_MENU_ITEM.forEach((e) => {
            if (e.classList.contains('active')) {
               e.querySelector('.header__submenu-shell').style.height = e.querySelector('.header__submenu-lists').clientHeight + 'px';
               return;
            }
            if (e.querySelector('.header__submenu-shell')) {
               e.querySelector('.header__submenu-shell').style.height = '0px';
            }
         })
      }
      document.body.addEventListener('click', (event) => {
         /* кнопка burger */
         if (event.target.closest('#burger-button')) {
            BURGER_BUTTON.classList.toggle('active');
            BURGER_MENU.classList.toggle('active', BURGER_BUTTON.classList.contains('active'));
            BURGER_BUTTON.classList.contains('active') ?
               document.body.style.overflow = 'hidden' :
               document.body.style.overflow = '';
         }
         /* навигация в меню */
         if (event.target.closest('.header__menu-button')) {
            HEADER_MENU_ITEM.forEach((e) => {
               e.classList.toggle('active',
                  event.target.closest('.header__menu-item') == e &&
                  !event.target.closest('.header__menu-item').classList.contains('active') &&
                  e.querySelector('.header__submenu-shell')
               )
            })
            openMenu()
         } else {
            HEADER_MENU_ITEM.forEach((e) => { e.classList.remove('active') })
            openMenu();
         }
      })
   }

   function moveButtonCardSubmit(media) {
      if (media) {
         document.querySelector('.card-template__size').after(document.querySelector('.form-card__buttons'))
      } else {
         document.querySelector('.wrapper').after(document.querySelector('.form-card__buttons'))
      }
   }

   function checkMediaQuery() {
      BURGER_BUTTON.classList.remove('active');
      BURGER_MENU.classList.remove('active');
      document.body.style.overflow = '';
   }

   const mediaQuery_1024 = window.matchMedia('(min-width: 1024px)');
   const mediaQuery_767 = window.matchMedia('(min-width: 768px)');
   window.addEventListener('resize', () => {
      mediaQuery_1024.matches && checkMediaQuery;
      BRAND_MISSION_SLIDER && initSlider(mediaQuery_767.matches, BRAND_MISSION_SLIDER, BRAND_MISSION_SLIDER_BODY, BRAND_MISSION_SLIDER_ITEM);
      TEAM_SLIDER && initSlider(mediaQuery_767.matches, TEAM_SLIDER, TEAM_SLIDER_BODY, TEAM_SLIDER_ITEM);
      CARD_SLIDER && initSlider(mediaQuery_1024.matches, CARD_SLIDER, CARD_SLIDER_WRAPPER, CARD_SLIDER_ITEM);
      BUYERS_SLIDER && initSlider(!mediaQuery_1024.matches, BUYERS_SLIDER, BUYERS_SLIDER_WRAPPER, BUYERS_SLIDER_ITEM);
      FORM_CARD_BUTTON && moveButtonCardSubmit(mediaQuery_1024.matches);
      FILTER_CATALOG && mediaQuery_1024.matches && moveUpCatalog();
      FILTER_CATALOG && !mediaQuery_1024.matches && moveBackCatalog();
      FILTER_CATALOG && !mediaQuery_1024.matches && addTabClass(FILTER_CATALOG, FILTER_CATALOG_TITLE, FILTER_CATALOG_CONTENT, FILTER_CATALOG_LIST);
      FILTER_CATALOG && mediaQuery_1024.matches && removeTabClass(FILTER_CATALOG, FILTER_CATALOG_TITLE, FILTER_CATALOG_CONTENT, FILTER_CATALOG_LIST);
   });
   BRAND_MISSION_SLIDER && initSlider(mediaQuery_767.matches, BRAND_MISSION_SLIDER, BRAND_MISSION_SLIDER_BODY, BRAND_MISSION_SLIDER_ITEM);
   TEAM_SLIDER && initSlider(mediaQuery_767.matches, TEAM_SLIDER, TEAM_SLIDER_BODY, TEAM_SLIDER_ITEM);
   CARD_SLIDER && initSlider(mediaQuery_1024.matches, CARD_SLIDER, CARD_SLIDER_WRAPPER, CARD_SLIDER_ITEM);
   BUYERS_SLIDER && initSlider(!mediaQuery_1024.matches, BUYERS_SLIDER, BUYERS_SLIDER_WRAPPER, BUYERS_SLIDER_ITEM);
   FORM_CARD_BUTTON && moveButtonCardSubmit(mediaQuery_1024.matches);
   FILTER_CATALOG && mediaQuery_1024.matches && moveUpCatalog();
   FILTER_CATALOG && !mediaQuery_1024.matches && moveBackCatalog();
   FILTER_CATALOG && !mediaQuery_1024.matches && addTabClass(FILTER_CATALOG, FILTER_CATALOG_TITLE, FILTER_CATALOG_CONTENT, FILTER_CATALOG_LIST);
   FILTER_CATALOG && mediaQuery_1024.matches && removeTabClass(FILTER_CATALOG, FILTER_CATALOG_TITLE, FILTER_CATALOG_CONTENT, FILTER_CATALOG_LIST);

   if (document.querySelector('.observer-img')) {
      let callback = function (entries, observer) {
         entries.forEach((e) => {
            if (e.isIntersecting) {
               e.target.style.setProperty('--color-observer', 'transparent')
            } else {
               e.target.style.setProperty('--color-observer', '#010101')
            }
         })
      };
      const observer = new IntersectionObserver(callback, { rootMargin: '-50px 0px' });
      const target = document.querySelectorAll('.observer-img');
      target.forEach(function (event) { observer.observe(event) });
   }

   if (document.querySelector('#press__button')) {
      const PRESS_BUTTON = document.querySelector('#press__button');
      const SECONDARY_GRID = document.querySelector('#secondary-grid');
      PRESS_BUTTON.addEventListener('click', (event) => {
         SECONDARY_GRID.style.display = 'grid';
         PRESS_BUTTON.style.display = 'none';
      })
   }

   function stopScrollBody() { document.body.style.overflow = 'hidden' };
   function startScrollBody() { document.body.style.overflow = '' };
   /* ==================== общие события click ================= */
   document.body.addEventListener('click', (event) => {
      if (event.target.closest('.card-template__tabs-button')) {
         event.target.closest('.card-template__tabs-item').classList.toggle('active');
         if (event.target.closest('.card-template__tabs-item').classList.contains('active')) {
            event.target.closest('.card-template__tabs-item').querySelector('.card-template__tabs-text').style.height =
               event.target.closest('.card-template__tabs-item').querySelector('.card-template__tabs-text-shell').offsetHeight + 1 + 'px'
         } else {
            event.target.closest('.card-template__tabs-item').querySelector('.card-template__tabs-text').style.height = '';
         }
      }
      if (event.target.closest('.button-favorites')) {
         event.target.closest('.button-favorites').classList.toggle('active');
      }
      if (event.target.closest('.filter__open')) {
         document.querySelector('.filter__body').style.left = '0';
         stopScrollBody();
      }
      if (event.target.closest('.filter__close')) {
         document.querySelector('.filter__body').style.left = '';
         startScrollBody()
      }
      if (event.target.closest('.video__element') && mediaQuery_1024.matches) {
         event.target.closest('.video__element').muted = false;
      }
      if (event.target.closest('.forms__password-visible')) {
         event.target.closest('.forms__shell').querySelector('.forms__password').type = 'text';
         event.target.closest('.forms__shell').querySelector('.forms__password-hidden').classList.remove('hidden');
         event.target.closest('.forms__shell').querySelector('.forms__password-visible').classList.add('hidden');
      }
      if (event.target.closest('.forms__password-hidden')) {
         event.target.closest('.forms__shell').querySelector('.forms__password').type = 'password';
         event.target.closest('.forms__shell').querySelector('.forms__password-visible').classList.remove('hidden');
         event.target.closest('.forms__shell').querySelector('.forms__password-hidden').classList.add('hidden');
      }
      if (event.target.closest('.header__search-open')) { HEADER.classList.add("search-active") };
      if (event.target.closest('.header__search-close')) { HEADER.classList.remove("search-active") };
   })

   if (document.querySelector('.capsules-template__product-availability')) {
      document.querySelectorAll('.capsules-template__product-availability').forEach((e) => {
         if (!e.querySelector('.capsules-template__product-item')) {
            e.style.display = 'none'
         }
      })
   }
   /* zoom картинок в Product Card Template */
   if (document.querySelector('.scale-image')) {
      let sizeY;
      let sizeX;
      let coordinatesX;
      let coordinatesY;
      let eventTarget;
      let eventTargetClone;
      document.body.addEventListener('click', (event) => {
         if (event.target.closest('.scale-image') && window.innerWidth >= 1024) {
            if (!document.querySelector('.scale-image-style')) {
               eventTarget = event.target.closest('.scale-body');
               eventTargetClone = eventTarget.cloneNode(true);
               getSise(eventTarget);
               document.body.classList.add('overflow');
               document.body.append(eventTargetClone);
               addStyle(eventTargetClone);
               eventTargetClone.classList.add('scale-image-style');
               window.requestAnimationFrame(() => { addNewStyle(eventTargetClone) });
               return;
            }
            addStyle(eventTargetClone);
            setTimeout(() => {
               document.querySelector('.scale-image-style') &&
                  document.querySelector('.scale-image-style').remove()
            }, 500)
            document.body.classList.remove('overflow');
         }
      })

      function getSise(eventTarget) {
         sizeY = eventTarget.offsetHeight;
         sizeX = eventTarget.offsetWidth;
         coordinatesX = eventTarget.getBoundingClientRect().left;
         coordinatesY = eventTarget.getBoundingClientRect().top;
      }
      function addStyle(eventTargetClone) {
         eventTargetClone.style.width = sizeX + 'px';
         eventTargetClone.style.height = sizeY + 'px';
         eventTargetClone.style.left = coordinatesX + 'px';
         eventTargetClone.style.top = coordinatesY + 'px';
         eventTargetClone.style.opacity = '0';
      }
      function addNewStyle(eventTargetClone) {
         eventTargetClone.style.width = '100vw';
         eventTargetClone.style.height = '100vh';
         eventTargetClone.style.left = '0px';
         eventTargetClone.style.top = '0px';
         eventTargetClone.style.opacity = '1';
      }
   }

   if (document.querySelector('.capsules-template__product-shell')) {
      const PRODUCT = Array.from(document.querySelectorAll('.capsules-template__product-shell'));
      const PRODUCT_LIST = PRODUCT.filter(element => !!element.querySelector('li'));
      setPosition();
      function setPosition() {
         let windowWidth = document.body.clientWidth;
         PRODUCT_LIST.forEach((e) => {
            e.style.left = '';
            let positionRight = e.clientWidth + e.getBoundingClientRect().left;
            if (0 < (-windowWidth + positionRight + 15)) {
               e.style.left = windowWidth - positionRight - 15 + 'px';
            }
         })
      }
      window.addEventListener('resize', () => setPosition());
   }

   if (document.querySelector('.slider-version')) {
      const SLIDERS_VERSION = document.querySelectorAll('.slider-version');
      SLIDERS_VERSION.forEach((element) => {
         if (element.querySelector('.slider-card__item-image')) { addMarginButtonSwiper(element) };
         if (element.querySelector('.slider-version__desktop-style-buttons')) { movingButtons(element) };
      })
      /* нижний отступ у кнопки в слайдере desktop + планшет */
      function addMarginButtonSwiper(element) {
         const SIZE_SWIPER = element.querySelector('.swiper-slide').clientHeight;
         const SIZE_SLIDER = element.querySelector('.slider-card__item-image').clientHeight;
         if (document.querySelector('.slider-version__desktop-style-link')) {
            element.style.setProperty('--padding-button', `${SIZE_SWIPER - SIZE_SLIDER}px`);
         }
      }
      /* эффект следование стрелок слайдера за курсором */
      function movingButtons(element) {
         element.addEventListener('mousemove', (event) => {
            const SLIDER_DESKTOP_BUTTONS = element.querySelector('.slider-version__desktop-style-buttons');
            const GET_OFFSET_BUTTONS_TOP = SLIDER_DESKTOP_BUTTONS.offsetTop + 15;
            const GET_OFFSET_BUTTONS_BOTTOM = GET_OFFSET_BUTTONS_TOP + SLIDER_DESKTOP_BUTTONS.offsetHeight - 50;
            if (event.layerY > GET_OFFSET_BUTTONS_TOP && event.layerY < GET_OFFSET_BUTTONS_BOTTOM) {
               SLIDER_DESKTOP_BUTTONS.style.setProperty('--top', `${event.layerY - GET_OFFSET_BUTTONS_TOP}px`)
            }
         })
      }
   }

   /* управление табами */
   class TabsOpen {
      constructor(tabs, addFunctionResize, addFunctionAction) {
         this.tabs = document.querySelector(`${tabs}`);
         this.tabsList = this.tabs.querySelectorAll('.tabs');
         this.addFunctionResize = addFunctionResize;
         this.addFunctionAction = addFunctionAction;
      }
      init = () => {
         document.body.addEventListener('click', this.examination);
         this.addFunctionResize && window.addEventListener('resize', this.externalFunction);
      };
      examination = (event) => {
         if (event.target.closest('.tabs-button') && !event.target.closest('.tabs').classList.contains('active')) {
            this.tabsList.forEach((element) => {
               element == event.target.closest('.tabs') ? this.open(element) : this.close(element);
            })
         } else if (!event.target.closest('.tabs-content')) {
            this.tabsList.forEach(element => this.close(element));
         }
         if (event.target.closest('.tabs-content-inner') &&
            this.addFunctionAction &&
            event.target.closest('.tabs-content-inner').querySelector('.get-data')) {
            this.addFunctionAction(event)
         }
      }
      open = (element) => {
         element.querySelector('.tabs-content').style.height = this.getSize(element) + 'px';
         element.classList.add('active');
      };
      close = (element) => {
         element.querySelector('.tabs-content').style.height = '';
         element.classList.remove('active');
      };
      getSize = (element) => { return element.querySelector('.tabs-content-inner').clientHeight + 3 };
      externalFunction = () => { this.addFunctionResize() };
   }
   /* проверка, изменение состояния filter__catalog */
   FILTER_SORTING && mediaQuery_767.matches && addTabClass(FILTER_SORTING, FILTER_SORTING_TITLE, FILTER_SORTING_CONTENT, FILTER_SORTING_LIST);
   FILTER_SORTING && !mediaQuery_767.matches && removeTabClass(FILTER_SORTING, FILTER_SORTING_TITLE, FILTER_SORTING_CONTENT, FILTER_SORTING_LIST);

   /* инициализация табов фильтра */
   if (document.querySelector('.tabs-filter')) {
      const FILTER_TABS = new TabsOpen('.tabs-filter', changeList).init();
   }
   /* корзина, показать выбранные товары в мобильном */
   if (!document.querySelector('.tabs-filter') && document.querySelector('.tabs')) {
      const TABS = new TabsOpen('main', false, changeData).init();
   }

   /* изменение состояния filter__catalog */
   function changeList() {
      mediaQuery_767.matches && addTabClass(FILTER_SORTING, FILTER_SORTING_TITLE, FILTER_SORTING_CONTENT, FILTER_SORTING_LIST);
      !mediaQuery_767.matches && removeTabClass(FILTER_SORTING, FILTER_SORTING_TITLE, FILTER_SORTING_CONTENT, FILTER_SORTING_LIST);
      this.tabsList = this.tabs.querySelectorAll('.tabs');
   }
   function addTabClass(tabs, tabs_button, tabs_content, tabs_inner) {
      tabs.classList.add('tabs');
      tabs_button.classList.add('tabs-button');
      tabs_content.classList.add('tabs-content');
      tabs_inner.classList.add('tabs-content-inner');
   }
   function removeTabClass(tabs, tabs_button, tabs_content, tabs_inner) {
      tabs.classList.remove('tabs');
      tabs_button.classList.remove('tabs-button');
      tabs_content.classList.remove('tabs-content');
      tabs_inner.classList.remove('tabs-content-inner');
   }
   /* запись выбранного заначения поле выбора */
   function changeData(event) {
      if (event.target.closest('.filter__item')) {
         event.target.closest('.tabs').querySelector('.show-data').innerHTML
            = event.target.closest('.filter__item').querySelector('.get-data').innerHTML;
      }
   }
   /* запись выбранного заначения поле выбора размера card*/
   if (document.querySelector('#form-card')) {
      const FORM_CARD = document.forms.form_card;
      FORM_CARD.addEventListener('change', (event => {
         if (event.target.getAttribute('name') == 'card_sise') {
            MEANING_SIZE_TEXT.innerHTML = event.target.dataset.size;
            MEANING_SIZE_TEXT.style.textTransform = "uppercase";
         }
      }))
      FORM_CARD_BUTTON.addEventListener('click', (event) => {
         if (!FORM_CARD.card_sise[0].validity.valid) {
            event.preventDefault();
            !mediaQuery_1024.matches && CARD_SIZE_MENU.scrollIntoView({ block: 'start', behavior: 'smooth' });
            setTimeout(() => MEANING_SIZE.click(), 100)
         }
      })
   }

   /* перемещение filter__catalog */
   function moveUpCatalog() { LIST_LEFT.prepend(FILTER_CATALOG) };
   function moveBackCatalog() { FILTER_BLOCK.prepend(FILTER_CATALOG) };

   /* смена картинок при наведении на зоны карточки */
   if (document.querySelector('.change_img')) {
      document.body.addEventListener('mouseover', (event) => {
         if (event.target.closest('.change_img')) { changeImg(event) }
      })
      document.body.addEventListener('mouseout', (event) => {
         if (event.target.closest('.change_img') &&
            event.target.closest('.change_img') !==
            (event.relatedTarget !== null && event.relatedTarget.closest('.change_img'))) { returnImg(event) }
      })
      function changeImg(event) {
         if (!event.target.closest('.slider-card__favorites') &&
            !event.target.closest('.button-capsules-more')) {
            let number = event.target.closest('.change-img').dataset.slide;
            let listImg = event.target.closest('.change_img').querySelectorAll('img');
            listImg.forEach((e) => {
               e.classList.toggle('hidden', e.dataset.slide !== number)
            })
         }
      }
      function returnImg(event) {
         let listImg = event.target.closest('.change_img').querySelectorAll('img');
         listImg.forEach((e) => { e.classList.toggle('hidden', e.dataset.slide !== '1') })
      }
   }


   /* запуск видео */
   if (this.document.querySelector('.video')) {
      document.body.addEventListener('click', (event) => {
         if (event.target.closest('.video__button')) {
            let video = event.target.closest('.video__item').querySelector('video');
            video.setAttribute('controls', '');
            video.currentTime = 0;
            video.muted = false;
            video.load();
            video.play();
            event.target.closest('.video__button').remove();
         }
      })
   }

   /* счётчик */
   if (document.querySelectorAll('.counter').length > 0) {
      document.querySelectorAll('.counter').forEach((e) => {
         let number = e.dataset.counter;
         decrement(number, e);
      })
      function decrement(number, e) {
         setTimeout(() => {
            number--;
            e.innerHTML = number;
            number > 0 && decrement(number, e);
         }, 1000)
      }
   }

   /* календарь */
   if (this.document.querySelector('#calendar')) {
      const calendarDate = this.document.querySelector('#calendar_date');
      const calendar = new VanillaCalendar('#calendar', {
         settings: {
            lang: 'ru',
            range: {
               disablePast: true,
            },
            visibility: {
               theme: 'light',
            },
         },
         input: true,
         actions: {
            clickDay(e, dates) {
               let [year, month, dey] = dates[0].split('-');
               setDate(dey, month, year)
            },
         },
      });
      calendar.init();
      /* отображение даты */
      function setDate(day, month, year) {
         calendarDate.innerHTML = day + '.' + month + '.' + year;
      }
      // calendar.selectedDates; - массив выбранной даты 
   }

   if (document.querySelector('#date_birth')) {
      const calendarDate = document.querySelector('#date_birth');
      const calendar = new VanillaCalendar('#date_birth', {
         settings: {
            lang: 'ru',
            visibility: {
               theme: 'light',
            },
         },
         input: true,
         actions: {
            clickDay(e, dates) {
               let [year, month, dey] = dates[0].split('-');
               setDate(dey, month, year)
            },
         },
      });
      calendar.init();
      /* отображение даты */
      function setDate(day, month, year) {
         calendarDate.innerHTML = day + '.' + month + '.' + year;
      }
      // calendar.selectedDates; - массив выбранной даты
   }
})

// Socials Widget
/* -- START -- */
const socialsWidget = document.querySelector('#socials-widget');
const socialsWidgetOpenButton = document.querySelector('.socials__button_open');
const socialsWidgetCloseButton = document.querySelector('.socials__button_close');

const openSocialsWidget = () => {
   socialsWidget.classList.remove('socials_hidden');
};

const closeSocialsWidget = () => {
   socialsWidget.classList.add('socials_hidden');
};

if (socialsWidget) {
   socialsWidgetOpenButton.addEventListener('click', openSocialsWidget);
   socialsWidgetCloseButton.addEventListener('click', closeSocialsWidget);
}
/* -- END -- */

class TabsSwitching {
   constructor(body__buttons, button, tab, execute) {
      this.name_button = button;
      this.body__buttons = document.querySelector(body__buttons);
      this.button = document.querySelectorAll(button);
      this.tab = document.querySelectorAll(tab);
      this.execute = execute;
   }
   eventClick = () => {
      this.body__buttons.addEventListener('click', (event) => {
         if (event.target.closest(this.name_button)) {
            let n = event.target.closest(this.name_button).dataset.button;
            this.button.forEach((e) => { e.classList.toggle('active', e.dataset.button == n) });
            if (this.tab.length > 0) { this.tab.forEach((e) => { e.classList.toggle('active', e.dataset.tab == n) }) }
            if (this.execute) { this.execute() };
         }
      })
   }
}
/* инициалицауия табов поиска адреса доставки */
if (document.querySelector('.get-address__buttons')) {
   const TABS_ADD_ADDRESS = new TabsSwitching('.get-address__buttons', '.get-address__button', '.get-address__explanation').eventClick();
}

/* открывает, закрывает модальные окна. */
if (document.querySelector('.modal-open') || document.querySelector('.modal-close')) {
   document.addEventListener('click', (event) => {
      if (event.target.closest('.modal-close')) { testModalStopClose(event) }
      if (event.target.closest('.modal-open')) { openModal(event) }
   })
}
function openModal(event) {
   let modalElement = event.target.closest('.modal-open').dataset.modal_open;
   if (typeof modalElement !== "undefined") {
      document.querySelector(`#${modalElement}`).classList.add('modal-visible');
      document.body.classList.add('body-overflow')
   }
}
function testModalStopClose(event) {
   if (event.target.closest('.modal-stop-close') &&
      !event.target.closest('.modal-close').closest('.modal-stop-close')) {
      return
   }
   closeModal(event);
}
function closeModal(event) {
   event.target.closest('.modal-hidden').classList.remove('modal-visible');
   if (!document.querySelector('.modal-visible')) {
      document.body.classList.remove('body-overflow');
   }
}

/* ===== mailings ===== */
/* выбор рассылки */
if (document.forms.mailings_email && document.forms.mailings_sms) {
   document.forms.mailings_email.addEventListener('change', initEvents);
   document.forms.mailings_sms.addEventListener('change', initEvents);
   function initEvents(event) {
      if (event.target.closest('.mailings__item')) { choiceSomething(event.target) }
      if (event.target.closest('.mailings__item-off')) { deselectAll(event.target) }
   }
   function deselectAll(eventItem) {
      let nameInput = eventItem.form.querySelector('.mailings__item input').name;
      eventItem.form[nameInput].forEach((e) => e.checked = false);
   }
   function choiceSomething(eventItem) {
      let nameInput = eventItem.form.querySelector('.mailings__item input').name;
      let nameInputOff = eventItem.form.querySelector('.mailings__item-off input').name;
      let hasChecked = nameInput && Array.from(eventItem.form[nameInput]).findIndex((element) => {
         return element.checked == true;
      })
      if (hasChecked !== -1) {
         eventItem.form[nameInputOff].checked = false;
      } else {
         eventItem.form[nameInputOff].checked = true;
      }
   }
}


/* показать модалку modal-cashback */
if (document.querySelector('#modal-cashback')) {
   window.addEventListener('load', showModalCashback);
}
function showModalCashback() {
   setTimeout(() => {
      document.querySelector('#modal-cashback').classList.add('modal-visible')
      document.body.classList.add('body-overflow')
   }, 4000)
}
