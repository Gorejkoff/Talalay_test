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
   const BURGER_BUTTON = document.querySelector('#burger-button');
   const BURGER_MENU = document.querySelector('#burger-menu');
   const HEADER_MENU_ITEM = document.querySelectorAll('.header__menu-item');
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
      FORM_CARD_BUTTON && moveButtonCardSubmit(mediaQuery_1024.matches);
      FILTER_CATALOG && mediaQuery_1024.matches && moveUpCatalog();
      FILTER_CATALOG && !mediaQuery_1024.matches && moveBackCatalog();
      FILTER_CATALOG && !mediaQuery_1024.matches && setTabAttribute(FILTER_CATALOG, FILTER_CATALOG_TITLE, FILTER_CATALOG_CONTENT, FILTER_CATALOG_LIST);
      FILTER_CATALOG && mediaQuery_1024.matches && removeTabAttribute(FILTER_CATALOG, FILTER_CATALOG_TITLE, FILTER_CATALOG_CONTENT, FILTER_CATALOG_LIST);
   });
   BRAND_MISSION_SLIDER && initSlider(mediaQuery_767.matches, BRAND_MISSION_SLIDER, BRAND_MISSION_SLIDER_BODY, BRAND_MISSION_SLIDER_ITEM);
   TEAM_SLIDER && initSlider(mediaQuery_767.matches, TEAM_SLIDER, TEAM_SLIDER_BODY, TEAM_SLIDER_ITEM);
   CARD_SLIDER && initSlider(mediaQuery_1024.matches, CARD_SLIDER, CARD_SLIDER_WRAPPER, CARD_SLIDER_ITEM);
   FORM_CARD_BUTTON && moveButtonCardSubmit(mediaQuery_1024.matches);
   FILTER_CATALOG && mediaQuery_1024.matches && moveUpCatalog();
   FILTER_CATALOG && !mediaQuery_1024.matches && moveBackCatalog();
   FILTER_CATALOG && !mediaQuery_1024.matches && setTabAttribute(FILTER_CATALOG, FILTER_CATALOG_TITLE, FILTER_CATALOG_CONTENT, FILTER_CATALOG_LIST);
   FILTER_CATALOG && mediaQuery_1024.matches && removeTabAttribute(FILTER_CATALOG, FILTER_CATALOG_TITLE, FILTER_CATALOG_CONTENT, FILTER_CATALOG_LIST);


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

   if (document.querySelector('#form-card')) {
      const FORM_CARD = document.forms.form_card;
      FORM_CARD.addEventListener('change', (event => {
         if (event.target.getAttribute('name') == 'card_sise') {
            MEANING_SIZE_TEXT.innerHTML = event.target.dataset.size;
            MEANING_SIZE_TEXT.style.textTransform = "uppercase";
         }
      }))
      FORM_CARD_BUTTON.addEventListener('click', (e) => {
         if (!FORM_CARD.card_sise[0].validity.valid) {
            CARD_SIZE_MENU.scrollIntoView({ block: 'start', behavior: 'smooth' });
            CARD_SIZE_MENU.classList.add('active');
         }
      })
   }
   function stopScrollBody() { document.body.style.overflow = 'hidden' };
   function startScrollBody() { document.body.style.overflow = '' };
   /* ==================== общие события click ================= */
   document.body.addEventListener('click', (event) => {
      if (event.target.closest('#meaning-size') && CARD_SIZE_MENU) {
         CARD_SIZE_MENU.classList.toggle('active');
      } else if (CARD_SIZE_MENU && !event.target.closest('#choice-size') && !event.target.closest('#form-card__button')) {
         CARD_SIZE_MENU.classList.remove('active');
      }
      if (event.target.closest('.card-template__tabs-button')) {
         event.target.closest('.card-template__tabs-item').classList.toggle('active');
         if (event.target.closest('.card-template__tabs-item').classList.contains('active')) {
            event.target.closest('.card-template__tabs-item').querySelector('.card-template__tabs-text').style.height =
               event.target.closest('.card-template__tabs-item').querySelector('.card-template__tabs-text-shell').offsetHeight + 'px'
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

   if (document.querySelector('.slider-version__desktop-style-link')) {
      /* нижний отступ у кнопки в слайдере desktop + планшет */
      const SLIDERS_VERSION = document.querySelectorAll('.slider-version');
      SLIDERS_VERSION.forEach((element) => {
         const SIZE_SWIPER = element.querySelector('.swiper-slide').clientHeight;
         const SIZE_SLIDER = element.querySelector('.slider-card__item-image').clientHeight;
         element.style.setProperty('--padding-button', `${SIZE_SWIPER - SIZE_SLIDER}px`);
         movingButtons(element);
      })
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


   /* управление табами фильтра */
   class TabsOpen {
      constructor(tabs, addFunction) {
         this.tabs = document.querySelector(`[${tabs}]`);
         this.tabsList = this.tabs.querySelectorAll('[tabs]');
         this.addFunction = addFunction;
      }
      init = () => {
         document.body.addEventListener('click', this.examination);
         window.addEventListener('resize', this.externalFunction);
      };
      examination = (event) => {
         if (event.target.closest('[tabs_button]') && !event.target.closest('[tabs]').classList.contains('active')) {
            this.tabsList.forEach((element) => {
               element == event.target.closest('[tabs]') ? this.open(element) : this.close(element);
            })
         } else if (!event.target.closest('[tabs_content]')) {
            this.tabsList.forEach(element => this.close(element));
         }
      }
      open = (element) => {
         element.querySelector('[tabs_content]').style.height = this.getSize(element) + 'px';
         element.classList.add('active');
      };
      close = (element) => {
         element.querySelector('[tabs_content]').style.height = '';
         element.classList.remove('active');
      };
      getSize = (element) => { return element.querySelector('[tabs_content-inner]').clientHeight };
      externalFunction = () => { this.addFunction() };
   }
   /* проверка, изменение состояния filter__catalog */
   FILTER_SORTING && mediaQuery_767.matches && setTabAttribute(FILTER_SORTING, FILTER_SORTING_TITLE, FILTER_SORTING_CONTENT, FILTER_SORTING_LIST);
   FILTER_SORTING && !mediaQuery_767.matches && removeTabAttribute(FILTER_SORTING, FILTER_SORTING_TITLE, FILTER_SORTING_CONTENT, FILTER_SORTING_LIST);

   /* инициализация табов фильтра */
   if (this.document.querySelector('[tabs_filter]')) {
      const FILTER_TABS = new TabsOpen('tabs_filter', changeList).init();
   }
   /* изменение состояния filter__catalog */
   function changeList() {
      mediaQuery_767.matches && setTabAttribute(FILTER_SORTING, FILTER_SORTING_TITLE, FILTER_SORTING_CONTENT, FILTER_SORTING_LIST);
      !mediaQuery_767.matches && removeTabAttribute(FILTER_SORTING, FILTER_SORTING_TITLE, FILTER_SORTING_CONTENT, FILTER_SORTING_LIST);
      this.tabsList = this.tabs.querySelectorAll('[tabs]');
   }
   function setTabAttribute(tabs, tabs_button, tabs_content, tabs_inner) {
      tabs.setAttribute('tabs', '');
      tabs_button.setAttribute('tabs_button', '');
      tabs_content.setAttribute('tabs_content', '');
      tabs_inner.setAttribute('tabs_content-inner', '');
   }
   function removeTabAttribute(tabs, tabs_button, tabs_content, tabs_inner) {
      tabs.removeAttribute('tabs');
      tabs_button.removeAttribute('tabs_button');
      tabs_content.removeAttribute('tabs_content');
      tabs_inner.removeAttribute('tabs_content-inner');
   }


   /* перемещение filter__catalog */
   function moveUpCatalog() { LIST_LEFT.prepend(FILTER_CATALOG) };
   function moveBackCatalog() { FILTER_BLOCK.prepend(FILTER_CATALOG) };

   /* смена картинок в каталоге при наведении на зоны карточки */
   if (document.querySelector('[change-image]')) {
      document.querySelector('[change-image]').addEventListener('mouseover', (event) => {
         if (event.target.closest('.change-img')) {
            let namber = event.target.closest('.change-img').dataset.namber;
            let listImg = event.target.closest('[change_img]').querySelectorAll('img');
            listImg.forEach((e) => {
               e.classList.toggle('hidden', e.dataset.namber !== namber)
            })
         }
      })
   }

   /* запуск видео */
   if (this.document.querySelector('.video')) {
      document.body.addEventListener('touchstart', (event) => {
         if (event.target.closest('.video__element') && !mediaQuery_1024.matches) {
            event.target.closest('.video__element').play();
         }
      })
      const VIDEO_ELEMENT = document.querySelectorAll('.video__element');
      mediaQuery_1024.matches && addAttributeVideo();
      function addAttributeVideo() {
         VIDEO_ELEMENT.forEach((e) => {
            e.play();
         })
      }
   }

})

