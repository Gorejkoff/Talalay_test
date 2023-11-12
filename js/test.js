function scrollSideRegistration() {
   var e = $(".section1__content-right-wrap").offset().top;
   $(window).on("scroll", function () {
      if (880 > $(window).width())
         ;
      else {
         var t = $(".section1__content-right-wrap").height()
            , i = $(window).scrollTop()
            , o = $("footer").offset().top;
         i + 90 > e ? ($(".section1__content-right-wrap").css("position", "fixed"),
            $(".section1__content-right-wrap").css("top", "90px"),
            t + i + 90 > o - 100 && ($(".section1__content-right-wrap").css("position", "relative"),
               $(".section1__content-right-wrap").css("top", "0px"),
               $(".section1__content-right-wrap").parent().css("align-self", "flex-end"))) : ($(".section1__content-right-wrap").css("position", "relative"),
                  $(".section1__content-right-wrap").css("top", "0px"),
                  $(".section1__content-right-wrap").parent().css("align-self", "flex-start"))
      }
   })
}
function changeElRegistration() {
   $(".section1__content-el").find(".section1__content-description-dynamick").each(function (e) {
      var t = $(this).attr("id");
      $(this).find(".section1__content-description-dynamick-size input").attr("name", t + "-size"),
         $(this).find(".section1__content-description-dynamick-color input").attr("name", t + "-color")
   }),
      $("body").on("click", ".section1__content-description-change", function () {
         if ($(this).hasClass("cancel"))
            $(this).removeClass("cancel"),
               $(this).text("Изменить"),
               $(this).siblings(".section1__content-description-save").hide(0),
               $(this).parents(".section1__content-description").find(".section1__content-description-statick").show(0),
               $(this).parents(".section1__content-el").find(".section1__content-mobile-description-statick").show(0),
               $(this).parents(".section1__content-description").find(".section1__content-description-dynamick").hide(0),
               $(this).parents(".section1__content-description").find(".section1__content-description-dynamick-color label").removeClass("active"),
               $(this).parents(".section1__content-description").find(".section1__content-description-dynamick-size label").removeClass("active");
         else {
            $(this).addClass("cancel"),
               $(this).text("Отменить"),
               $(this).siblings(".section1__content-description-save").show(0),
               $(this).parents(".section1__content-description").find(".section1__content-description-statick").hide(0),
               $(this).parents(".section1__content-el").find(".section1__content-mobile-description-statick").hide(0),
               $(this).parents(".section1__content-description").find(".section1__content-description-dynamick").show(0);
            var e = $(this).parents(".section1__content-description").find(".section1__content-description-statick .color").text()
               , t = $(this).parents(".section1__content-description").find(".section1__content-description-statick .size").text()
               , i = parseInt($(this).parents(".section1__content-description").find(".section1__content-description-statick .number").text());
            $(this).parents(".section1__content-description").find('.section1__content-description-dynamick-color input[value="' + e + '"]').prop("checked", !0).parent().addClass("active"),
               $(this).parents(".section1__content-description").find('.section1__content-description-dynamick-size input[value="' + t + '"]').prop("checked", !0).parent().addClass("active"),
               $(this).parents(".section1__content-description").find(".section1__content-description-dynamick-number input").val(i)
         }
      }),
      $(".section1__content-description-dynamick-color .input-block").each(function () {
         $(this).find("label").css("background-color", $(this).attr("data-color"))
      }),
      $("body").on("click", ".section1__content-description-dynamick-color .input-block label", function () {
         $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
            $(this).addClass("active")
      }),
      $("body").on("click", ".section1__content-description-dynamick-size .input-block label", function () {
         $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
            $(this).addClass("active")
      })
}
function deleteEl() { }
function countTotal() {
   var e = 0
      , t = 0;
   $(".section1__content-el").each(function (i) {
      var o = parseInt($(this).find(".section1__content-price span").text().replace(/\s/g, ""));
      e += o,
         t = i + 1
   }),
      e = e.toLocaleString(),
      $(".section1__content-formalize-summ h2 span").text(e),
      $(".section1__content-formalize-count h2 span").text(t)
}
if ($(function () {
   $(document).on("keyup", ".fn_search", function () {
      $(".autocomplete-suggestion").each(function (e) {
         0 === e && console.log($(this).find("a").text())
      })
   });
   function e(e, t, i, o) {
      var s, n, a, l = isFinite(+(e = (e + "").replace(/[^0-9+\-Ee.]/g, ""))) ? +e : 0, c = isFinite(+t) ? Math.abs(t) : 0, r = "";
      return (r = (c ? (s = l,
         "" + (Math.round(s * (a = Math.pow(10, n = c))) / a).toFixed(n)) : "" + Math.round(l)).split("."))[0].length > 3 && (r[0] = r[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, void 0 === o ? "," : o)),
         (r[1] || "").length < c && (r[1] = r[1] || "",
            r[1] += Array(c - r[1].length + 1).join("0")),
         r.join(void 0 === i ? "." : i)
   }
}),
   $("main").hasClass("cart-page") && ($(".section1__content-toogle-top").on("click", function () {
      $(this).find(".section1__content-toogle-top-plus").toggleClass("active"),
         $(this).siblings(".section1__content-toogle-bottom").slideToggle()
   }),
      scrollSideRegistration(),
      changeElRegistration(),
      catalogNumberProduct(),
      deleteEl(),
      countTotal(),
      $(window).on("load resize", function () {
         880 > $(window).width() && ($(".section1__content-right-wrap").css("position", "relative"),
            $(".section1__content-right-wrap").css("top", "0px"),
            $(".section1__content-right-wrap").parent().css("align-self", "flex-start"))
      })),
   $("main").hasClass("catalog-page")) {
   function e() {
      $(".section1__filters-el-wrap_color .input-block").each(function () {
         $(this).find("label").css("background-color", $(this).attr("data-color"))
      }),
         $(".section1__filters-el-wrap_size .input-block label").on("click", function () {
            $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
               $(this).addClass("active")
         }),
         $(".section1__filters-el-wrap_color .input-block label").on("click", function () {
            $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
               $(this).addClass("active")
         }),
         $("body").on("change", '.section1__filters-el.fitch_link input[type="radio"]', function (e) {
            n($(this).parents(".section1__filters-el-wrap").find('input[type="radio"]:checked').val())
         }),
         $("body").on("change", '.section1__filters-el.fitch_link input[type="checkbox"]', function (e) {
            n($(this).val())
         }),
         $("body").on("change", ".section1__filters-el-wrap.section1__filters-el-wrap_prise input", function (e) {
            $.ajax({
               url: document.location,
               type: "GET",
               data: {
                  ajax: 1,
                  p: {
                     min: $(".section1__filters-el-wrap.section1__filters-el-wrap_prise .section1__filters-el-wrap_prise-min").val(),
                     max: $(".section1__filters-el-wrap.section1__filters-el-wrap_prise .section1__filters-el-wrap_prise-max").val()
                  }
               },
               dataType: "json",
               success: function (e) {
                  $(".fn_products_content").data("page", e.current_page),
                     $(".fn_products_content").data("pages", e.pages_num),
                     $(".fn_products_content").html(e.products_content),
                     $(".fn_features").html(e.features),
                     $(".fn_selected_features").html(e.selected_features),
                     $(".fn_pagination").html(e.products_pagination),
                     $(".fn_products_count").html(e.products_count),
                     $(".fn_features .section1__filters-el_color .input-block, .fn_section_color .input-block").not(".color_first").each(function () {
                        $(this).find("label").css("background-color", $(this).attr("data-color"))
                     }),
                     e.is_filter_page ? $(".section1__filters-top .filters-mobile-delete").addClass("active") : $(".section1__filters-top .filters-mobile-delete").removeClass("active")
               }
            })
         }),
         $(document).mouseup(function (e) {
            var t = $(".section1__filters-top")
               , i = $(".section1__filters-top>p")
               , o = $(".section1__filters-top>svg")
               , s = $(".section1__filters-top .filters-mobile-delete")
               , a = $(".section1__filters-top-wrap p")
               , l = $(".section1__filters-top-wrap svg");
            if (t.is(e.target) || i.is(e.target) || o.is(e.target))
               t.siblings(".section1__filters-content").slideToggle(300),
                  t.toggleClass("active");
            else if (a.is(e.target)) {
               let c = $(e.target).parent();
               c.hasClass("price_fields") && c.hasClass("min") ? ($(".section1__filters-el-wrap_prise-min").val("").trigger("change"),
                  console.debug("dell min price")) : c.hasClass("price_fields") && c.hasClass("max") ? ($(".section1__filters-el-wrap_prise-max").val("").trigger("change"),
                     console.debug("dell max price")) : c.hasClass("price_fields") ? $.ajax({
                        url: document.location.href,
                        type: "GET",
                        data: {
                           ajax: 1,
                           forget_prices: 1
                        },
                        dataType: "json",
                        success: function (e) {
                           $(".fn_products_content").data("page", e.current_page),
                              $(".fn_products_content").data("pages", e.pages_num),
                              $(".fn_products_content").html(e.products_content),
                              $(".fn_features").html(e.features),
                              $(".fn_selected_features").html(e.selected_features),
                              $(".fn_pagination").html(e.products_pagination),
                              $(".fn_products_count").html(e.products_count),
                              $(".fn_features .section1__filters-el_color .input-block, .fn_section_color .input-block").not(".color_first").each(function () {
                                 $(this).find("label").css("background-color", $(this).attr("data-color"))
                              }),
                              e.is_filter_page ? $(".section1__filters-top .filters-mobile-delete").addClass("active") : $(".section1__filters-top .filters-mobile-delete").removeClass("active")
                        }
                     }) : (n(c.data("link")),
                        c.remove())
            } else if (l.is(e.target)) {
               let r = $(e.target).parent().parent();
               r.hasClass("price_fields") && r.hasClass("min") ? ($(".section1__filters-el-wrap_prise-min").val("").trigger("change"),
                  console.debug("dell min price")) : r.hasClass("price_fields") && r.hasClass("max") ? ($(".section1__filters-el-wrap_prise-max").val("").trigger("change"),
                     console.debug("dell max price")) : r.hasClass("price_fields") ? $.ajax({
                        url: document.location.href,
                        type: "GET",
                        data: {
                           ajax: 1,
                           forget_prices: 1
                        },
                        dataType: "json",
                        success: function (e) {
                           $(".fn_products_content").data("page", e.current_page),
                              $(".fn_products_content").data("pages", e.pages_num),
                              $(".fn_products_content").html(e.products_content),
                              $(".fn_features").html(e.features),
                              $(".fn_selected_features").html(e.selected_features),
                              $(".fn_pagination").html(e.products_pagination),
                              $(".fn_products_count").html(e.products_count),
                              $(".fn_features .section1__filters-el_color .input-block, .fn_section_color .input-block").not(".color_first").each(function () {
                                 $(this).find("label").css("background-color", $(this).attr("data-color"))
                              }),
                              e.is_filter_page ? $(".section1__filters-top .filters-mobile-delete").addClass("active") : $(".section1__filters-top .filters-mobile-delete").removeClass("active")
                        }
                     }) : (n(r.data("link")),
                        r.remove())
            } else if (s.is(e.target)) {
               $(e.target).removeClass("active");
               let p = $(e.target);
               n(p.data("link"), !0)
            }
         })
   }
   function t() {
      $(".section1__el-top").each(function () {
         "none" != $(this).attr("data-unique") && $(this).html("<span>" + $(this).attr("data-unique") + "</span>")
      }),
         $(".section1__el-follow-color .input-block").each(function () {
            $(this).find("label").css("background-color", $(this).attr("data-color"))
         }),
         $("body").on("click", ".section1__el-follow-size .input-block label", function () {
            $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
               $(this).addClass("active")
         }),
         $(".section1__tabs-content-el-bottom-size").each(function () {
            1 == $(this).find(".input-block").length && ($(this).find("input").prop("checked", !0),
               $(this).find("label").addClass("active"))
         }),
         $("body").on("click", ".section1__el-follow-color .input-block label", function () {
            $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
               $(this).addClass("active")
         }),
         $(".section1__el-follow-color .input-block input").each(function () {
            $(this).is(":checked") && $(this).parent().addClass("active")
         })
   }
   function i() {
      var e, t;
      if (!$(".section1__side").length)
         return !1;
      e = $(".section1__side").offset().top,
         t = $(".section1__side").height(),
         $(".section1__side").length,
         $(window).on("scroll", function () {
            var i = $(window).scrollTop()
               , o = $("footer").offset().top;
            i + 90 > e ? ($(".section1__side").css("position", "fixed"),
               $(".section1__side").css("top", "90px"),
               t + i + 90 > o - 105 && ($(".section1__side").css("position", "relative"),
                  $(".section1__side").css("top", "0px"),
                  $(".section1__side").parent().css("align-self", "flex-end"))) : ($(".section1__side").css("position", "relative"),
                     $(".section1__side").css("top", "0px"),
                     $(".section1__side").parent().css("align-self", "flex-start"))
         })
   }
   function o() {
      $(".section1__el").each(function (e) {
         var t = $(this).attr("data-name");
         $(this).find(".section1__el-follow-size input").attr("name", t + "-size"),
            $(this).find(".section1__el-follow-color input").attr("name", t + "-color")
      })
   }
   function s() {
      $(".section1__el-follow").on("submit", function (e) {
         e.preventDefault();
         var t = $(this);
         t.find(".section1__el-follow-size .input-block input").is(":checked") ? (t.find("button").addClass("active"),
            t.find("button").text("Оформить заказ"),
            setTimeout(function () {
               t.find("button").removeClass("active"),
                  t.find("button").text("Добавить в корзину")
            }, 1e4)) : (t.find("button").text("Выберите размер"),
               t.find("button").attr("disabled", "disabled"),
               t.find("button").css("background-color", "#8F8F8F"),
               t.find(".section1__el-follow-size .input-block label").on("click", function () {
                  t.find("button").text("Добавить в корзину"),
                     t.find("button").removeAttr("disabled"),
                     t.find("button").removeAttr("style")
               }))
      })
   }
   function n(e, t = !1) {
      let i = {
         ajax: 1
      };
      t && (i.forget_prices = 1),
         $.ajax({
            url: e,
            type: "GET",
            data: i,
            dataType: "json",
            success: function (t) {
               $(".fn_products_content").data("page", t.current_page),
                  $(".fn_products_content").data("pages", t.pages_num),
                  $(".fn_products_content").html(t.products_content),
                  $(".fn_features").html(t.features),
                  $(".fn_selected_features").html(t.selected_features),
                  $(".fn_pagination").html(t.products_pagination),
                  $(".fn_products_count").html(t.products_count),
                  $(".fn_features .section1__filters-el_color .input-block, .fn_section_color .input-block").not(".color_first").each(function () {
                     $(this).find("label").css("background-color", $(this).attr("data-color"))
                  }),
                  t.is_filter_page ? $(".section1__filters-top .filters-mobile-delete").addClass("active") : $(".section1__filters-top .filters-mobile-delete").removeClass("active"),
                  history.pushState(t, "", e)
            }
         })
   }
   window.onpopstate = function (e) {
      console.debug(e),
         e.state ? ($(".fn_products_content").html(e.state.products_content),
            $(".fn_features").html(e.state.features),
            $(".fn_selected_features").html(e.state.selected_features),
            $(".fn_pagination").html(e.state.products_pagination),
            $(".fn_products_count").html(e.state.products_count),
            $(".fn_features .section1__filters-el_color .input-block, .fn_section_color .input-block").not(".color_first").each(function () {
               $(this).find("label").css("background-color", $(this).attr("data-color"))
            })) : document.location.reload()
   }
      ,
      e(),
      t(),
      i()
}
if ($("main").hasClass("catalog-item")) {
   if (b(),
      catalogNumberProduct(),
      f(),
      $(".section1__item-description-toogle-top").on("click", function () {
         $(this).find(".section1__item-description-toogle-top-plus").toggleClass("active"),
            $(this).siblings(".section1__item-description-toogle-bottom").slideToggle()
      }),
      $(".section1__item-galery-preview img").on("mouseover", function () {
         var e = $(this).attr("src");
         $(".section1__item-galery-main img").attr("src", e)
      }),
      $(".section1__item-description-size-table").on("click", function () {
         $("#modalSize").arcticmodal()
      }),
      $(".section2__tabs-content-wrap").slideUp(0),
      $(".section2__tabs-top-el").on("click", function () {
         $(this).toggleClass("active"),
            $(this).siblings(".section2__tabs-top-el").removeClass("active");
         var e = $(this).attr("data-tab");
         if ($(this).hasClass("active")) {
            $(this).parents(".section2__tabs").find(".section2__tabs-content-wrap").slideUp(300),
               $(this).parents(".section2__tabs").find(".section2__tabs-content-wrap[data-tab=" + e + "]").slideDown(300);
            var t = $(this).parents(".section2__tabs").find(".section2__tabs-top").offset().top + $(this).parents(".section2__tabs").find(".section2__tabs-top").height() / 2;
            $("html").animate({
               scrollTop: t
            }, 500)
         } else {
            $(this).parents(".section2__tabs").find(".section2__tabs-content-wrap").slideUp(300);
            var t = $(this).parents(".section2__tabs").find(".section2__tabs-top").offset().top;
            $("html").animate({
               scrollTop: t - 100
            }, 500)
         }
      }),
      $(".section2__tabs-content-el-bottom-color .input-block, .section3__tabs-content-el-bottom-color .input-block, .section4__tabs-content-el-bottom-color .input-block").each(function () {
         $(this).find("label").css("background-color", $(this).attr("data-color"))
      }),
      $(".section2__tabs-content-el-bottom-size .input-block label, .section3__tabs-content-el-bottom-size .input-block label, .section4__tabs-content-el-bottom-size .input-block label").on("click", function () {
         $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
            $(this).addClass("active")
      }),
      $(".section2__tabs-content-el-bottom-color .input-block label, .section3__tabs-content-el-bottom-color .input-block label, .section4__tabs-content-el-bottom-color .input-block label").on("click", function () {
         $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
            $(this).addClass("active")
      }),
      $(".section2__tabs-content-el-bottom-color .input-block input, .section3__tabs-content-el-bottom-color .input-block input, .section4__tabs-content-el-bottom-color .input-block input").each(function () {
         $(this).is(":checked") && $(this).parent().addClass("active")
      }),
      $(".section2__tabs-content-el-bottom-size, .section3__tabs-content-el-bottom-size, .section4__tabs-content-el-bottom-size").each(function () {
         1 == $(this).find(".input-block").length && ($(this).find("input").prop("checked", !0),
            $(this).find("label").addClass("active"))
      }),
      d(),
      -1 !== getInternetExplorerVersion()) {
      if ($(window).width() > 1380)
         var a = new Swiper(".section2__tabs-top", {
            speed: 400,
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
               nextEl: ".button-next",
               prevEl: ".button-prev"
            }
         })
            , l = new Swiper(".section3__container", {
               speed: 400,
               slidesPerView: 4,
               spaceBetween: 30,
               navigation: {
                  nextEl: ".button-next-same",
                  prevEl: ".button-prev-same"
               }
            })
            , c = new Swiper(".section4__container", {
               speed: 400,
               slidesPerView: 4,
               spaceBetween: 30,
               navigation: {
                  nextEl: ".button-next-looked",
                  prevEl: ".button-prev-looked"
               }
            });
      else if ($(window).width() > 850 && 1380 >= $(window).width())
         var a = new Swiper(".section2__tabs-top", {
            speed: 400,
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
               nextEl: ".button-next",
               prevEl: ".button-prev"
            }
         })
            , l = new Swiper(".section3__container", {
               speed: 400,
               slidesPerView: 3,
               spaceBetween: 30,
               navigation: {
                  nextEl: ".button-next-same",
                  prevEl: ".button-prev-same"
               }
            })
            , c = new Swiper(".section4__container", {
               speed: 400,
               slidesPerView: 3,
               spaceBetween: 30,
               navigation: {
                  nextEl: ".button-next-looked",
                  prevEl: ".button-prev-looked"
               }
            });
      else if ($(window).width() > 650 && 850 >= $(window).width())
         var a = new Swiper(".section2__tabs-top", {
            speed: 400,
            slidesPerView: 1,
            width: 245,
            spaceBetween: 30,
            navigation: {
               nextEl: ".button-next",
               prevEl: ".button-prev"
            }
         })
            , l = new Swiper(".section3__container", {
               speed: 400,
               slidesPerView: 1,
               width: 245,
               spaceBetween: 30,
               navigation: {
                  nextEl: ".button-next-same",
                  prevEl: ".button-prev-same"
               }
            })
            , c = new Swiper(".section4__container", {
               speed: 400,
               slidesPerView: 1,
               width: 245,
               spaceBetween: 30,
               navigation: {
                  nextEl: ".button-next-looked",
                  prevEl: ".button-prev-looked"
               }
            });
      else if (650 > $(window).width())
         var a = new Swiper(".section2__tabs-top", {
            speed: 400,
            slidesPerView: 1,
            width: 245,
            spaceBetween: 30,
            navigation: {
               nextEl: ".button-next",
               prevEl: ".button-prev"
            }
         })
            , l = new Swiper(".section3__container", {
               speed: 400,
               slidesPerView: 1,
               width: 245,
               spaceBetween: 30,
               navigation: {
                  nextEl: ".button-next-same",
                  prevEl: ".button-prev-same"
               }
            })
            , c = new Swiper(".section4__container", {
               speed: 400,
               slidesPerView: 1,
               width: 245,
               spaceBetween: 30,
               navigation: {
                  nextEl: ".button-next-looked",
                  prevEl: ".button-prev-looked"
               }
            })
   } else
      var a = new Swiper(".section2__tabs-top", {
         speed: 400,
         slidesPerView: 3,
         spaceBetween: 30,
         navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev"
         },
         breakpoints: {
            300: {
               slidesPerView: 1,
               width: 245,
               spaceBetween: 10
            },
            650: {
               slidesPerView: 1,
               width: 245,
               spaceBetween: 10
            },
            850: {
               slidesPerView: 3,
               width: void 0,
               spaceBetween: 30
            }
         }
      })
         , l = new Swiper(".section3__container", {
            speed: 400,
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
               nextEl: ".button-next-same",
               prevEl: ".button-prev-same"
            },
            breakpoints: {
               300: {
                  slidesPerView: 1,
                  width: 245,
                  spaceBetween: 10
               },
               650: {
                  slidesPerView: 1,
                  width: 245,
                  spaceBetween: 10
               },
               850: {
                  slidesPerView: 3,
                  width: void 0,
                  spaceBetween: 30
               },
               1380: {
                  slidesPerView: 4,
                  spaceBetween: 30
               }
            }
         })
         , c = new Swiper(".section4__container", {
            speed: 400,
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
               nextEl: ".button-next-looked",
               prevEl: ".button-prev-looked"
            },
            breakpoints: {
               300: {
                  slidesPerView: 1,
                  width: 245,
                  spaceBetween: 10
               },
               650: {
                  slidesPerView: 1,
                  width: 245,
                  spaceBetween: 10
               },
               850: {
                  slidesPerView: 3,
                  width: void 0,
                  spaceBetween: 30
               },
               1380: {
                  slidesPerView: 4,
                  spaceBetween: 30
               }
            }
         });
   $(window).on("resize", function () {
      850 > $(window).width() && (l && l.slidePrev(),
         c && c.slidePrev())
   });
   var r = void 0;
   function p() {
      var e = $(window).outerWidth();
      e <= 850 && void 0 == r ? ($(".section1__item-galery").addClass("swiper-container"),
         $(".section1__item-galery").append('<div class="swiper-pagination"></div>'),
         $(".section1__item-galery-preview").addClass("swiper-wrapper"),
         $(".section1__item-galery-preview img").addClass("swiper-slide"),
         r = new Swiper(".section1__item-galery", {
            speed: 400,
            slidesPerView: 1,
            pagination: {
               el: ".swiper-pagination",
               type: "bullets"
            }
         })) : e > 850 && void 0 != r && (r.destroy(),
            r = void 0,
            $(".section1__item-galery").removeClass("swiper-container"),
            $(".section1__item-galery-preview").removeClass("swiper-wrapper"),
            $(".section1__item-galery-preview img").removeClass("swiper-slide"),
            $(".section1__item-galery .swiper-pagination").remove())
   }
   function d() {
      $(".section2__tabs-content-el, .section3__tabs-content-el, .section4__tabs-content-el").each(function (e) {
         var t = $(this).attr("data-name");
         $(this).find(".section2__tabs-content-el-bottom-size input, .section3__tabs-content-el-bottom-size input, .section4__tabs-content-el-bottom-size input").attr("name", t + "-size"),
            $(this).find(".section2__tabs-content-el-bottom-color input, .section3__tabs-content-el-bottom-color input, .section4__tabs-content-el-bottom-color input").attr("name", t + "-color")
      })
   }
   function u() {
      $(".section2__tabs-content-el-bottom, .section3__tabs-content-el-bottom, .section4__tabs-content-el-bottom").on("submit", function (e) {
         e.preventDefault();
         var t = $(this);
         t.find(".section2__tabs-content-el-bottom-size .input-block input, .section3__tabs-content-el-bottom-size .input-block input, .section4__tabs-content-el-bottom-size .input-block input").is(":checked") ? (t.find("button").addClass("active"),
            t.find("button").text("Оформить заказ"),
            setTimeout(function () {
               t.find("button").removeClass("active"),
                  t.find("button").text("Добавить в корзину")
            }, 1e4)) : (t.find("button").text("Выберите размер"),
               t.find("button").attr("disabled", "disabled"),
               t.find("button").css({
                  "background-color": "#8F8F8F",
                  cursor: "default"
               }),
               t.find(".section2__tabs-content-el-bottom-size .input-block label, .section3__tabs-content-el-bottom-size .input-block label, .section4__tabs-content-el-bottom-size .input-block label").on("click", function () {
                  t.find("button").text("Добавить в корзину"),
                     t.find("button").removeAttr("disabled"),
                     t.find("button").removeAttr("style")
               }))
      })
   }
   function f() {
      $(".section1__contacts-form").on("submit", function (e) {
         e.preventDefault();
         var t = $(this);
         $(t[0]).find(".error").html(""),
            $(t[0]).find(".sucsess").html("");
         var i = $("#name").val()
            , o = $("#email").val()
            , s = $("#text").val()
            , n = !1;
         0 !== i.length ? ($("#name").removeClass("wrong"),
            $("#name").addClass("success"),
            $("#name").siblings(".input-block-message").text("")) : ($("#name").addClass("wrong"),
               $("#name").removeClass("success"),
               $("#name").siblings(".input-block-message").text(lang_string.form_enter_name)),
            0 !== o.length ? ($("#email").removeClass("wrong"),
               $("#email").siblings(".input-block-message").text(""),
               0 == o.search(/^[\.a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i) ? ($("#email").removeClass("wrong"),
                  $("#email").addClass("success"),
                  $("#email").siblings(".input-block-message").text(""),
                  n = !0) : ($("#email").addClass("wrong"),
                     $("#email").removeClass("success"),
                     $("#email").siblings(".input-block-message").text(lang_string.form_enter_email))) : ($("#email").addClass("wrong"),
                        $("#email").removeClass("success"),
                        $("#email").siblings(".input-block-message").text(lang_string.form_enter_email)),
            0 !== s.length ? ($("#text").removeClass("wrong"),
               $("#text").addClass("success"),
               $("#text").siblings(".input-block-message").text("")) : ($("#text").addClass("wrong"),
                  $("#text").removeClass("success"),
                  $("#text").siblings(".input-block-message").text(lang_string.form_enter_message)),
            0 !== i.length && !0 == n && 0 !== s.length && ($(t[0]).find("button").attr("disabled", "disabled"),
               $.ajax({
                  url: "/ajax/product_question_send.php",
                  type: "GET",
                  data: t.serialize(),
                  dataType: "JSON",
                  success: function (e) {
                     e.result ? (t[0].reset(),
                        $(t[0]).find("button").attr("disabled", "disabled"),
                        $(t[0]).find("button").addClass("sended"),
                        $(t[0]).find("button").html(lang_string.form_sended),
                        setTimeout(function () {
                           $(t[0]).find("button").removeAttr("disabled"),
                              $(t[0]).find("button").removeClass("sended"),
                              $(t[0]).find("button").html(lang_string.form_send)
                        }, 5e3),
                        $(t[0]).find("input, textarea").val(""),
                        $(t[0]).find("input, textarea").removeClass("success")) : console.debug(e.error),
                        $(t[0]).find("button").removeAttr("disabled")
                  }
               }))
      })
   }
   function h() {
      $("#product-form").on("submit", function (e) {
         e.preventDefault();
         var t = $(this)
            , i = !1;
         $(".section1__item-description-size .input-block").each(function () {
            $(this).find("label").hasClass("active") && (i = !0)
         }),
            !0 == i ? t[0].reset() : (t.find("button").text("Выберите размер"),
               t.find("button").attr("disabled", "disabled"),
               t.find("button").css({
                  "background-color": "#8F8F8F",
                  cursor: "default"
               }),
               t.find(".section1__item-description-size .input-block label").on("click", function () {
                  t.find("button").text("Добавить в корзину"),
                     t.find("button").removeAttr("disabled"),
                     t.find("button").removeAttr("style")
               }))
      })
   }
   function b() {
      $(".section1__item-description-size .input-block label").on("click", function () {
         $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
            $(this).addClass("active")
      }),
         $(".section1__item-description-color .input-block label").on("click", function () {
            $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
               $(this).addClass("active")
         }),
         $(".section1__item-description-color .input-block input").each(function () {
            $(this).is(":checked") && $(this).parent().addClass("active")
         }),
         $(".section1__item-description-color .input-block").each(function () {
            $(this).find("label").css("background-color", $(this).attr("data-color"))
         })
   }
   $(window).on("load resize", function () {
      p()
   }),
      $(".section1__item-description-buttons-follow").on("click", function () {
         640 >= $(window).outerWidth() ? $(this).siblings(".section1__item-description-buttons-follow-desktop").addClass("active") : copyToClipboard()
      }),
      $(window).resize(function () {
         $(window).width() > 600 && $(".section1__item-description-buttons-follow-desktop").removeClass("active")
      }),
      $(".copylink").on("click", function () {
         copyToClipboard()
      }),
      $(document).mouseup(function (e) {
         var t = $(".section1__item-description-buttons-follow-desktop");
         t.is(e.target) || 0 !== t.has(e.target).length || t.removeClass("active")
      })
}
if ($("main").hasClass("catalog-page") || $("main").hasClass("soon-page") || $("main").hasClass("search-page")) {
   var m = $(".footer").height()
      , v = !1;
   function _() {
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - m && !v) {
         let e = $(".fn_products_content").data("page")
            , t = $(".fn_products_content").data("pages");
         e < t && (v = !0,
            $.ajax({
               type: "GET",
               data: {
                  ajax: 1,
                  page: e + 1
               },
               dataType: "json",
               complete: function () {
                  v = !1,
                     _()
               },
               success: function (e) {
                  $(".fn_products_content").data("page", e.current_page),
                     $(".fn_products_content").data("pages", e.pages_num),
                     $(".fn_products_content").append(e.products_content),
                     $(".fn_features").html(e.features),
                     $(".fn_selected_features").html(e.selected_features),
                     $(".fn_pagination").html(e.products_pagination),
                     $(".fn_products_count").html(e.products_count),
                     $(".fn_features .section1__filters-el_color .input-block, .fn_section_color .input-block").not(".color_first").each(function () {
                        $(this).find("label").css("background-color", $(this).attr("data-color"))
                     }),
                     e.is_filter_page ? $(".section1__filters-top .filters-mobile-delete").addClass("active") : $(".section1__filters-top .filters-mobile-delete").removeClass("active")
               }
            }))
      }
   }
   m += .5 * m,
      $(window).scroll(_),
      $(".section1__el").on("mouseover", function () {
         $(".section1__el").css("z-index", "1"),
            $(this).css("z-index", "10")
      })
}
function catalogNumberProduct() {
   $(".down").click(function () {
      var e = $(this).parent().find("input")
         , t = parseInt(e.val()) - 1;
      return t = t < 1 ? 1 : t,
         e.val(t),
         e.change(),
         t > 1 ? $(this).find("line").css("stroke", "#424242") : $(this).find("line").css("stroke", "#8F8F8F"),
         !1
   }),
      $(".up").click(function () {
         var e = $(this).parent().find("input")
            , t = parseInt(e.val()) + 1;
         return e.val(parseInt(e.val()) + 1),
            e.change(),
            t > 1 ? $(".down").find("line").css("stroke", "#424242") : $(".down").find("line").css("stroke", "#8F8F8F"),
            !1
      })
}
function copyToClipboard() {
   var e = document.createElement("input");
   e.classList.add("copiclick"),
      e.value = document.location.href,
      document.body.appendChild(e),
      e.select(),
      document.execCommand("copy"),
      document.body.removeChild(e),
      $(".section1__item-description-buttons-follow-desktop-copied").addClass("active"),
      setTimeout(function () {
         $(".section1__item-description-buttons-follow-desktop-copied").removeClass("active")
      }, 2e3)
}
function heder_cart_innit() {
   $(".header__cart-content").mCustomScrollbar({
      callbacks: {
         onScrollStart: function () {
            $(".header__cart-content").find(".white-shadow").removeClass("active")
         },
         onTotalScrollBack: function () {
            $(".header__cart-content").find(".white-shadow").addClass("active")
         }
      }
   })
}
function resizeImg(e) {
   $(e).each(function () {
      $(this).height($(this).width())
   })
}
function purch_cart_innit() {
   $("#section1__content-right-card-wrap").mCustomScrollbar({
      callbacks: {
         onScrollStart: function () {
            $("#section1__content-right-card-wrap").find(".white-shadow").removeClass("active")
         },
         onTotalScrollBack: function () {
            $("#section1__content-right-card-wrap").find(".white-shadow").addClass("active")
         }
      }
   })
}
if ($("main").hasClass("contacts-page") && (phone_mask(),
   $(".section1__form").on("submit", function (e) {
      e.preventDefault(),
         $(this),
         $("#name").val(),
         $("#email").val(),
         $("#phone").val(),
         $("#text").val(),
         $(".input_captcha").val();
      var t = !1
         , i = !1;
      $("#name").removeClass("wrong"),
         $("#name").addClass("success"),
         $("#name").siblings(".input-block-message").text(""),
         $(".input_captcha").removeAttr("style"),
         $(".input_captcha").css("border-bottom", "1px solid #007c5e"),
         $(".input_captcha").siblings(".form_placeholder").removeAttr("style"),
         $(".input_captcha").parents(".input-block").find("p").text(""),
         $("#email").removeClass("wrong"),
         $("#email").addClass("success"),
         $("#email").siblings(".input-block-message").text(""),
         t = !0,
         $("#phone").removeClass("wrong"),
         $("#phone").addClass("success"),
         $("#phone").parents(".input-block").find("p").text(""),
         $("#phone").inputmask("isComplete") && (i = !0),
         $("#text").removeClass("wrong"),
         $("#text").addClass("success"),
         $("#text").siblings(".input-block-message").text("");
      var o = new FormData(this);
      i || o.delete("phone"),
         $.ajax({
            url: "/ajax/feedback.php",
            type: "POST",
            dataType: "json",
            processData: !1,
            contentType: !1,
            data: o,
            success: function (e) {
               console.debug(e),
                  e.result ? ($(".section1__form button").attr("disabled", "disabled"),
                     $(".section1__form button").text("Отправлено"),
                     $(".section1__form button").addClass("sended"),
                     setTimeout(function () {
                        $(".section1__form button").removeAttr("disabled"),
                           $(".section1__form button").text("Отправить"),
                           $(".section1__form button").removeClass("sended")
                     }, 5e3)) : (e.errors.name && ($("#name").addClass("wrong"),
                        $("#name").removeClass("success"),
                        $("#name").siblings(".input-block-message").text(e.errors.name)),
                        e.errors.email && ($("#email").addClass("wrong"),
                           $("#email").removeClass("success"),
                           $("#email").siblings(".input-block-message").text(e.errors.email)),
                        e.errors.phone && ($("#phone").addClass("wrong"),
                           $("#phone").removeClass("success"),
                           $("#phone").parents(".input-block").find("p").text(e.errors.phone)),
                        e.errors.message && ($("#text").addClass("wrong"),
                           $("#text").removeClass("success"),
                           $("#text").siblings(".input-block-message").text(e.errors.message)),
                        e.errors.captcha && ($(".input_captcha").removeAttr("style"),
                           $(".input_captcha").css("border-bottom", "1px solid #eb5757"),
                           $(".input_captcha").siblings(".form_placeholder").css("color", "#eb5757"),
                           $(".input_captcha").parents(".input-block").find("p").text(e.errors.captcha))),
                  "undefined" != typeof grecaptcha && grecaptcha.reset()
            }
         })
   })),
   $(".footer-menu-slide-top").on("click", function () {
      $(this).toggleClass("active"),
         $(this).parent(".footer-menu-slide").find(".footer-menu-slide-menu").slideToggle()
   }),
   $(".footer-menu-title").on("click", function (e) {
      968 >= $(window).width() && ($(".footer-menu-block>.footer-menu-link, .footer-menu-block>.footer-menu-slide ").slideUp(),
         "block" !== $(this).next(".footer-menu-link").css("display") && $(this).nextAll(".footer-menu-link, .footer-menu-slide").slideToggle())
   }),
   $(window).on("load resize", function () {
      $(window).width() > 968 ? $(".footer-menu-block>.footer-menu-link, .footer-menu-block>.footer-menu-slide").slideDown(0) : $(".footer-menu-block>.footer-menu-link, .footer-menu-block>.footer-menu-slide").slideUp(0)
   }),
   $(".search-form-footer input").on("input", function () {
      0 != $(this).val().length ? ($(this).addClass("active"),
         $(".search-form-footer .input-icon-remove").css("display", "block"),
         $(".search-form-footer .input-icon-search").css("display", "none"),
         $(".search-form-footer button").css("display", "block")) : ($(this).removeClass("active"),
            $(".search-form-footer .input-icon-remove").css("display", "none"),
            $(".search-form-footer .input-icon-search").css("display", "block"),
            $(".search-form-footer button").css("display", "none"))
   }),
   $(".search-form-footer .input-icon-remove").on("click", function () {
      $(".search-form-footer input").val(""),
         $(".search-form-footer input").removeClass("active"),
         $(".search-form-footer .input-icon-remove").css("display", "none"),
         $(".search-form-footer .input-icon-search").css("display", "block"),
         $(".search-form-footer button").css("display", "none")
   }),
   $(function () {
      function e() {
         return $(document).height() > $(window).height()
      }
      function t() {
         var e = document.createElement("div");
         e.style.visibility = "hidden",
            e.style.width = "100px",
            e.style.msOverflowStyle = "scrollbar",
            document.body.appendChild(e);
         var t = e.offsetWidth;
         e.style.overflow = "scroll";
         var i = document.createElement("div");
         i.style.width = "100%",
            e.appendChild(i);
         var o = i.offsetWidth;
         return e.parentNode.removeChild(e),
            t - o
      }
      function i(e) {
         var t;
         e.parents(".header__cart-el").remove(),
            $(".header__cart-content-empty").addClass("active"),
            $(".header__cart-content").removeClass("active"),
            $(".header__cart-summ").removeClass("active"),
            $(".header__buttons-cart .small-text").text(""),
            $(".header__cart-top-cart span").text(""),
            t = 0,
            $(".header__cart-el-prise-curent span").each(function () {
               var e = $(this)[0].innerText;
               t += parseInt(e = e.replace(/\s/g, ""))
            }),
            t = t.toLocaleString(),
            $(".header__cart-summ-title .num").text(t + " ₽"),
            $(".header__cart-el").each(function (e) {
               $(".header__cart-content-empty").removeClass("active"),
                  $(".header__cart-content").addClass("active"),
                  $(".header__cart-summ").addClass("active"),
                  e > 1 ? ($(".white-shadow").addClass("active"),
                     $(".header__cart-top-cart span").text(e + 1),
                     $(".header__buttons-cart .small-text").text(e + 1)) : ($(".white-shadow").removeClass("active"),
                        $(".header__cart-top-cart span").text(e + 1),
                        $(".header__buttons-cart .small-text").text(e + 1))
            })
      }
      $(window).on("load", function () {
         $(".header-hover-menu").css("display", "flex"),
            $(".header-burger-menu").css("display", "flex")
      }),
         $("select").niceSelect(),
         $(".header__container .header-hover-menu").on("mouseenter", function (e) {
            let t = $(this).data("category");
            $(this).addClass("active"),
               $(".header__container").addClass("dark-theme"),
               $(".header__menu .header__menu-cat_button, .header__menu .header__menu-link").not(".cat_" + t).addClass("hover-color")
         }),
         $(".header__container .header-hover-menu").on("mouseleave", function (e) {
            $(this).data("category"),
               $(this).removeClass("active"),
               $(".header__container").removeClass("dark-theme"),
               $(".header__menu .header__menu-cat_button, .header__menu .header__menu-link").removeClass("hover-color")
         }),
         $(".header__menu .header__menu-cat_button").on("mouseenter", function () {
            let e = $(this).data("category");
            $(".header__container .header-hover-menu.cat_" + e).addClass("active"),
               $(".header__container").addClass("dark-theme"),
               $(".header__menu .header__menu-cat_button, .header__menu .header__menu-link").not(".cat_" + e).addClass("hover-color")
         }),
         $(".header__menu .header__menu-cat_button").on("mouseleave", function () {
            let e = $(this).data("category");
            $(".header__container .header-hover-menu.cat_" + e).removeClass("active"),
               $(".header__container").removeClass("dark-theme"),
               $(".header__menu .header__menu-cat_button, .header__menu .header__menu-link").removeClass("hover-color")
         }),
         $("body").on("click", ".header__buttons-cart", function (e) {
            $(window).width() > 750 && (e.preventDefault(),
               $(".header__cart").addClass("active"),
               $(".header__cart-el").each(function (e) {
                  e > 1 ? $(".white-shadow").addClass("active") : $(".white-shadow").removeClass("active")
               }))
         }),
         $("body").on("click", ".header__cart-top-close svg", function (e) {
            $(".header__cart").removeClass("active")
         }),
         heder_cart_innit(),
         $(".search-form-header input").on("input", function () {
            0 != $(this).val().length ? ($(this).addClass("active"),
               $(".search-form-header .input-icon-remove").css("display", "block"),
               $(".search-form-header .input-icon-search").css("display", "none"),
               $(".search-form-header button").css("display", "block")) : ($(this).removeClass("active"),
                  $(".search-form-header .input-icon-remove").css("display", "none"),
                  $(".search-form-header .input-icon-search").css("display", "block"),
                  $(".search-form-header button").css("display", "none"))
         }),
         $(".search-form-header .input-icon-remove").on("click", function () {
            $(".search-form-header input").val(""),
               $(".search-form-header input").removeClass("active"),
               $(".search-form-header .input-icon-remove").css("display", "none"),
               $(".search-form-header .input-icon-search").css("display", "block"),
               $(".search-form-header button").css("display", "none")
         })
   }),
   $(window).on("load resize", function () {
      resizeImg(".capsules__item, .sales__item_sm .sales__item-img, .insta__item, .catalog-item .section2__tabs-top-el-img")
   }),
   $(window).on("load resize", function () {
      $("#main-capsules").hasClass("extended") || (600 >= $(window).width() && $(".capsules").children().length > 1 ? ($(".capsules").children(".capsules__item").slice(1).hide(),
         $("#main-capsules .show-more").show()) : $(window).width() > 600 && $(".capsules").children().length > 3 ? ($(".capsules").children(".capsules__item").slice(3).hide(),
            $("#main-capsules .show-more").show()) : ($(".capsules").children(".capsules__item").slice(1).show(),
               $("#main-capsules .show-more").hide()))
   }),
   $("#main-capsules .show-more").on("click", function (e) {
      e.preventDefault(),
         $(this).fadeOut(500),
         setTimeout(() => {
            $("#main-capsules .show-less").fadeIn(500)
         }
            , 500),
         $("#main-capsules").addClass("extended"),
         $(".capsules").children(".capsules__item").slice($(window).width() > 600 ? 3 : 1).css("opacity", 0).slideDown("slow").animate({
            opacity: 1
         }, {
            queue: !1,
            duration: "slow"
         })
   }),
   $("#main-capsules .show-less").on("click", function (e) {
      e.preventDefault(),
         $(this).fadeOut(500),
         setTimeout(() => {
            $("#main-capsules .show-more").fadeIn(500)
         }
            , 500),
         $("#main-capsules").removeClass("extended"),
         $(".capsules").children(".capsules__item").slice($(window).width() > 600 ? 3 : 1).css("opacity", 1).slideUp("slow").animate({
            opacity: 0
         }, {
            queue: !1,
            duration: "slow"
         })
   }),
   $(window).on("load", function () {
      768 > $(window).width() && new Swiper(".insta__all", {
         init: !0,
         width: 153,
         speed: 500,
         slidesPerView: "auto",
         initialSlide: 0,
         direction: "horizontal"
      })
   }),
   $(window).on("load resize", function () {
      600 > $(window).width() ? $(".section1__look-small").slice(3).hide(0) : $(".section1__look-small").slice(3).show(0)
   }),
   $("main").hasClass("look-page") && (-1 !== getInternetExplorerVersion() && $(".section1__tabs-top-el-img img").each(function () {
      var e = $(this).attr("src");
      $(this).parent().append('<div class="ie-img" style="background-image: url(' + e + ')"></div>'),
         $(this).css("opacity", "0")
   }),
      $(".section1__tabs-top-el").on("click", function () {
         $(this).toggleClass("active"),
            $(this).siblings(".section1__tabs-top-el").removeClass("active");
         var e = $(this).attr("data-tab");
         if ($(this).hasClass("active")) {
            $(this).parents(".section1__tabs").find(".section1__tabs-content-wrap").slideUp(300),
               $(this).parents(".section1__tabs").find(".section1__tabs-content-wrap[data-tab=" + e + "]").slideDown(300);
            var t = $(this).parents(".section1__tabs").find(".section1__tabs-top").offset().top + $(this).parents(".section1__tabs").find(".section1__tabs-top").height() / 2;
            $("html").animate({
               scrollTop: t
            }, 500)
         } else {
            $(this).parents(".section1__tabs").find(".section1__tabs-content-wrap").slideUp(300);
            var t = $(this).parents(".section1__tabs").find(".section1__tabs-top").offset().top;
            $("html").animate({
               scrollTop: t - 100
            }, 500)
         }
      }),
      $(".section1__tabs-content-wrap").slideUp(0),
      $(".section1__tabs-content-el-top").each(function () {
         "none" != $(this).attr("data-unique") && $(this).html("<span>" + $(this).attr("data-unique") + "</span>")
      }),
      $(".section1__tabs-content-el-bottom-color .input-block").each(function () {
         $(this).find("label").css("background-color", $(this).attr("data-color"))
      }),
      $(".section1__tabs-content-el-bottom-size .input-block label").on("click", function () {
         $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
            $(this).addClass("active")
      }),
      $(".section1__tabs-content-el-bottom-color .input-block label").on("click", function () {
         $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
            $(this).addClass("active")
      }),
      $(".section1__tabs-content-el-bottom-color .input-block input").each(function () {
         $(this).is(":checked") && $(this).parent().addClass("active")
      }),
      $(".section1__tabs-content-el-bottom-size").each(function () {
         1 == $(this).find(".input-block").length && ($(this).find("input").prop("checked", !0),
            $(this).find("label").addClass("active"))
      }),
      changeNameLookPage()),
   $("main").hasClass("registration-page")) {
   function g() {
      var e = 0;
      $(".section1__content-right-el-prise-curent span").each(function () {
         var t = $(this)[0].innerText;
         e += parseInt(t = t.replace(/\s/g, ""))
      });
      var t = $(".section1__content-right-price .delivery")[0].innerText;
      t = parseInt(t = t.replace(/\s/g, ""));
      var i = e + t;
      e = e.toLocaleString(),
         $(".section1__content-right-price .price").text(e),
         i = i.toLocaleString(),
         $(".section1__content-right-summ h3 p span").text(i)
   }
   function w() { }
   $.datepicker.regional.ru = {
      closeText: "Закрыть",
      prevText: "Предыдущий",
      nextText: "Следующий",
      currentText: "Сегодня",
      monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
      dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      weekHeader: "Не",
      dateFormat: "dd.mm.yy",
      firstDay: 1,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
   },
      $.datepicker.setDefaults($.datepicker.regional.ru),
      $(function () {
         var e = new Date;
         e.setDate(e.getDate() + 1),
            $("#data-courier").datepicker({
               minDate: e
            }),
            $("#data-courier").datepicker("setDate", e)
      }),
      $(".section1__content-right-el").each(function (e) {
         e > 1 ? $(".section1__content-right-el").siblings(".white-shadow").addClass("active") : $(".section1__content-right-el").siblings(".white-shadow").removeClass("active")
      }),
      $("select").niceSelect(),
      phone_mask(),
      $(".section1__content-toogle-top").on("click", function () {
         $(this).find(".section1__content-toogle-top-plus").toggleClass("active"),
            $(this).siblings(".section1__content-toogle-bottom").slideToggle()
      }),
      $("#data-courier").on("focus", function () {
         $(this).parent().addClass("active")
      }),
      $("#data-courier").on("focusout", function () {
         $(this).parent().removeClass("active")
      }),
      scrollSideRegistration(),
      $("body").on("click", ".delivery-block .radio-block", function (e) {
         $(".delivery-block .radio-block").each(function () {
            if ($(this).find("input").is(":checked")) {
               var e = $(this).attr("data-delivery");
               "0" == $(this).find("input").data("type") || "4" == $(this).find("input").data("type") || "7" == $(this).find("input").data("type") ? $(".adress-block").show() : $(".adress-block").hide(),
                  update_cart_purchises(),
                  $(".tab").hide(0),
                  $('.tab[data-delivery="' + e + '"]').show(0);
               let t = $('[name="payment_method_id"]:checked').val()
                  , i = !1;
               (i = $('.tab[data-delivery="' + e + '"] [name="payment_method_id"][value="' + t + '"]').length > 0 && "2" != $(this).find("input").data("type") ? $('.tab[data-delivery="' + e + '"] [name="payment_method_id"][value="' + t + '"]') : $('.tab[data-delivery="' + e + '"] [name="payment_method_id"]:first')).click(),
                  i.closest(".radio-block").click()
            }
         })
      }),
      $("body").on("click", ".payment-block .radio-block", function () {
         $(this).find("input").is(":checked") && ("null" != $(this).find("input").attr("data-module") ? $(".section1__content-right-card button").text(lang_string.cart_order_pay) : $(".section1__content-right-card button").text(lang_string.cart_order_confirm))
      }),
      $(window).on("load resize", function () {
         880 > $(window).width() && ($(".section1__content-right-wrap").css("position", "relative"),
            $(".section1__content-right-wrap").css("top", "0px"),
            $(".section1__content-right-wrap").parent().css("align-self", "flex-start"))
      }),
      $("body").on("click", ".section1__content-right-mobile-title", function (e) {
         $(e.currentTarget).toggleClass("active"),
            $(".section1__content-right-card-wrap").slideToggle()
      }),
      $(window).on("load resize", function () {
         $(window).width() > 780 ? $(".section1__content-right-card-wrap").slideDown(0) : $(".section1__content-right-card-wrap").slideUp(0)
      }),
      $(window).on("load", function () {
         setTimeout(function () {
            purch_cart_innit()
         }, 100)
      }),
      w()
}
function phone_mask() {
   0 != $("input[name=phone],input.phone").length && ($("input[name=phone],input.phone").intlTelInput({
      initialCountry: "ru",
      autoHideDialCode: !1,
      autoPlaceholder: "aggressive",
      placeholderNumberType: "MOBILE",
      preferredCountries: ["ru", "ua", "kz"],
      separateDialCode: !0,
      utilsScript: "utils.js",
      nationalMode: !1,
      customPlaceholder: function (e, t) {
         return console.log("+" + t.dialCode + " " + e.replace(/[0-9]/g, "_")),
            "+" + t.dialCode + " " + e.replace(/[0-9]/g, "_")
      }
   }),
      $("input[name=phone],input.phone").inputmask($("input[name=phone],input.phone").attr("placeholder").replace(/[_]/g, "9")),
      $("input[name=phone],input.phone").click(),
      $("input[name=phone],input.phone").on("close:countrydropdown", function (e, t) {
         $(this).val(""),
            $(this).inputmask($(this).attr("placeholder").replace(/[9]/g, "\\9").replace(/[_]/g, "9")),
            $(this).click()
      }))
}
function changeNameLookPage() {
   $(".section1__tabs-content-el").each(function (e) {
      var t = $(this).attr("data-name");
      $(this).find(".section1__tabs-content-el-bottom-size input").attr("name", t + "-size"),
         $(this).find(".section1__tabs-content-el-bottom-color input").attr("name", t + "-color")
   })
}
function validCardLookPage() {
   $(".section1__tabs-content-el-bottom").on("submit", function (e) {
      e.preventDefault();
      var t = $(this);
      t.find(".section1__tabs-content-el-bottom-size .input-block input").is(":checked") ? (t.find("button").addClass("active"),
         t.find("button").text("Оформить заказ"),
         setTimeout(function () {
            t.find("button").removeClass("active"),
               t.find("button").text("Добавить в корзину")
         }, 1e4)) : (t.find("button").text("Выберите размер"),
            t.find("button").css("cursor", "default"),
            t.find("button").attr("disabled", "disabled"),
            t.find("button").css("background-color", "#8F8F8F"),
            t.find(".section1__tabs-content-el-bottom-size .input-block label").on("click", function () {
               t.find("button").text("Добавить в корзину"),
                  t.find("button").css("cursor", "pointer"),
                  t.find("button").removeAttr("disabled"),
                  t.find("button").removeAttr("style")
            }))
   })
}
function getInternetExplorerVersion() {
   var e = -1;
   if ("Microsoft Internet Explorer" == navigator.appName) {
      var t = navigator.userAgent
         , i = RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
      null != i.exec(t) && (e = parseFloat(RegExp.$1))
   } else if ("Netscape" == navigator.appName) {
      var t = navigator.userAgent
         , i = RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
      null != i.exec(t) && (e = parseFloat(RegExp.$1))
   }
   return e
}
if ($("main").hasClass("search-page") && ($(".section1__filters-content").slideUp(0),
   $(".section1__filters-el-wrap_color .input-block").each(function () {
      $(this).find("label").css("background-color", $(this).attr("data-color"))
   }),
   $(".section1__filters-el-wrap_size .input-block label").on("click", function () {
      $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
         $(this).addClass("active")
   }),
   $(".section1__filters-el-wrap_color .input-block label").on("click", function () {
      $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
         $(this).addClass("active")
   }),
   $(".search-form input").on("input", function () {
      0 != $(this).val().length ? ($(this).addClass("active"),
         $(".input-icon-remove").css("display", "block"),
         $(".input-icon-search").css("display", "none"),
         $(".search-form button").css("display", "block")) : ($(this).removeClass("active"),
            $(".input-icon-remove").css("display", "none"),
            $(".input-icon-search").css("display", "block"),
            $(".search-form button").css("display", "none"))
   }),
   $(".input-icon-remove").on("click", function () {
      $(".search-form input").val(""),
         $(".search-form input").removeClass("active"),
         $(".input-icon-remove").css("display", "none"),
         $(".input-icon-search").css("display", "block"),
         $(".search-form button").css("display", "none")
   }),
   $(".section1__filters-el-wrap_size .input-block input").on("change", function () {
      var e = $(this).val();
      "" != e ? ($(".section1__filters-top-wrap-size").html("<p>Размер: " + e + '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.633933 0.34436L14.2609 13.9713" stroke="#8F8F8F" stroke-width="0.852632"></path><path d="M0.633933 13.9713L14.2609 0.34436" stroke="#8F8F8F" stroke-width="0.852632"></path></svg></p>'),
         $(".filters-mobile-delete").addClass("active")) : $(".section1__filters-top-wrap-size p").remove()
   }),
   $(".section1__filters-el-wrap_color .input-block input").on("change", function () {
      var e = $(this).val();
      "" != e ? ($(".section1__filters-top-wrap-color").html("<p>" + e + '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.633933 0.34436L14.2609 13.9713" stroke="#8F8F8F" stroke-width="0.852632"></path><path d="M0.633933 13.9713L14.2609 0.34436" stroke="#8F8F8F" stroke-width="0.852632"></path></svg></p>'),
         $(".filters-mobile-delete").addClass("active")) : $(".section1__filters-top-wrap-color p").remove()
   }),
   $(".section1__filters-el-wrap_sex .input-block input").on("change", function () {
      if ($(this).is(":checked")) {
         var e = $(this).val();
         $(".section1__filters-top-wrap-sex").append("<p>" + e + '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.633933 0.34436L14.2609 13.9713" stroke="#8F8F8F" stroke-width="0.852632"></path><path d="M0.633933 13.9713L14.2609 0.34436" stroke="#8F8F8F" stroke-width="0.852632"></path></svg></p>'),
            $(".filters-mobile-delete").addClass("active")
      } else {
         var e = $(this).val();
         $(".section1__filters-top-wrap-sex p").each(function () {
            $(this).text() === e && $(this).remove()
         })
      }
   }),
   $(document).mouseup(function (e) {
      var t = $(".section1__filters-top")
         , i = $(".section1__filters-top>p")
         , o = $(".section1__filters-top>svg")
         , s = $(".section1__filters-top .filters-mobile-delete")
         , n = $(".section1__filters-top-wrap p")
         , a = $(".section1__filters-top-wrap svg");
      if (t.is(e.target) || i.is(e.target) || o.is(e.target))
         t.siblings(".section1__filters-content").slideToggle(300),
            t.toggleClass("active");
      else if (n.is(e.target)) {
         var l = $(e.target).parent().attr("class");
         if ($(e.target).remove(),
            "section1__filters-top-wrap-prise-min" == l)
            $(".section1__filters-el-wrap_prise-min").val("");
         else if ("section1__filters-top-wrap-prise-max" == l)
            $(".section1__filters-el-wrap_prise-max").val("");
         else if ("section1__filters-top-wrap-color" == l)
            $(".section1__filters-el-wrap_color input").prop("checked", !1),
               $(".section1__filters-el-wrap_color label").removeClass("active");
         else if ("section1__filters-top-wrap-size" == l)
            $(".section1__filters-el-wrap_size input").prop("checked", !1),
               $(".section1__filters-el-wrap_size label").removeClass("active");
         else if ("section1__filters-top-wrap-sex" == l) {
            var c = $(e.target)[0]
               , r = $(c).text();
            $(".section1__filters-el-wrap_sex label").each(function () {
               $(this).text() === r && ($(this).siblings("input").prop("checked", !1),
                  $(this).removeClass("active"))
            })
         }
      } else if (a.is(e.target)) {
         var p = $(e.target).parent().parent().attr("class");
         if ($(e.target).parent().remove(),
            "section1__filters-top-wrap-prise-min" == p)
            $(".section1__filters-el-wrap_prise-min").val("");
         else if ("section1__filters-top-wrap-prise-max" == p)
            $(".section1__filters-el-wrap_prise-max").val("");
         else if ("section1__filters-top-wrap-color" == p)
            $(".section1__filters-el-wrap_color input").prop("checked", !1),
               $(".section1__filters-el-wrap_color label").removeClass("active");
         else if ("section1__filters-top-wrap-size" == p)
            $(".section1__filters-el-wrap_size input").prop("checked", !1),
               $(".section1__filters-el-wrap_size label").removeClass("active");
         else if ("section1__filters-top-wrap-sex" == p) {
            var d = $(e.target)[0].parentNode
               , u = $(d).text();
            $(".section1__filters-el-wrap_sex label").each(function () {
               $(this).text() === u && ($(this).siblings("input").prop("checked", !1),
                  $(this).removeClass("active"))
            })
         }
      } else
         s.is(e.target) && ($(e.target).removeClass("active"),
            $(".section1__filters-content input").prop("checked", !1),
            $(".section1__filters-el-wrap_prise-min").val(""),
            $(".section1__filters-el-wrap_prise-max").val(""),
            $(".section1__filters-content label.active").removeClass("active"),
            $(".section1__filters-top-wrap p").remove())
   }),
   $(".section1__el-follow-color-el").each(function () {
      var e = $(this).attr("data-color");
      $(this).css("background-color", e)
   }),
   $(".section1__el-follow-size .section1__el-follow-size-el").on("click", function () {
      $(this).parent(".section1__el-follow-size").find(".section1__el-follow-size-el").removeClass("active"),
         $(this).addClass("active"),
         $(this).parent(".section1__el-follow-size").siblings(".section1__el-follow-btn").find("button").text("Узнать о поступлении"),
         $(this).parent(".section1__el-follow-size").siblings(".section1__el-follow-btn").find("button").removeAttr("style")
   }),
   $(".section1__el-follow-color .section1__el-follow-color-el").on("click", function () {
      $(this).parent(".section1__el-follow-color").find(".section1__el-follow-color-el").removeClass("active"),
         $(this).addClass("active")
   }),
   $(".section1__el-follow-btn button").on("click", function () {
      if ($(this).parents(".section1__el-follow").find(".section1__el-follow-size-el").hasClass("active")) {
         $(".input-block__radio_size").find("label").remove(),
            $(".input-block__radio_color").find("label").remove();
         var e = $(this).parents(".section1__el-follow").find(".section1__el-follow-size-el.active").attr("data-size")
            , t = $(this).parents(".section1__el-follow").find(".section1__el-follow-color-el.active").attr("data-color");
         $(this).parents(".section1__el-follow").find(".section1__el-follow-size-el").each(function () {
            $(".input-block__radio_size").append("<label>" + $(this).attr("data-size") + '<input type="radio" name="size" value="' + $(this).attr("data-size") + '"></label>')
         }),
            $(this).parents(".section1__el-follow").find(".section1__el-follow-color-el").each(function () {
               $(".input-block__radio_color").append('<label><input type="radio" name="color" value="' + $(this).attr("data-color") + '"></label>')
            }),
            $(".input-block__radio_color input").each(function () {
               var e = $(this).attr("value");
               $(this).parent().css("background-color", e)
            }),
            $(".input-block__radio_size label").removeClass("active"),
            $('.input-block__radio_size input[value="' + e + '"]').prop("checked", !0),
            $('.input-block__radio_size input[value="' + e + '"]').parent().addClass("active"),
            $(".input-block__radio_color label").removeClass("active"),
            $('.input-block__radio_color input[value="' + t + '"]').prop("checked", !0),
            $('.input-block__radio_color input[value="' + t + '"]').parent().addClass("active"),
            $("#followModal").arcticmodal({
               afterOpen: function (e, t) {
                  phone_mask(),
                     $(".input-block__radio_size label").on("click", function () {
                        $(".input-block__radio_size label").removeClass("active"),
                           $(this).addClass("active"),
                           $(this).find("input").prop("checked", !0)
                     }),
                     $(".input-block__radio_color label").on("click", function () {
                        $(".input-block__radio_color label").removeClass("active"),
                           $(this).addClass("active"),
                           $(this).find("input").prop("checked", !0)
                     })
               },
               afterClose: function (e, t) {
                  $("#followModal").find("input").removeClass("wrong"),
                     $("#followModal").find(".input-block p").text("")
               }
            })
      } else
         $(this).text("Выберите размер"),
            $(this).css("background-color", "#8F8F8F")
   }),
   $(".mobile-btn").on("click", function () {
      $(".input-block__radio_size").find("label").remove(),
         $(".input-block__radio_color").find("label").remove();
      var e = $(this).siblings(".section1__el-follow").find(".section1__el-follow-size-el.active").attr("data-size")
         , t = $(this).siblings(".section1__el-follow").find(".section1__el-follow-color-el.active").attr("data-color");
      $(this).siblings(".section1__el-follow").find(".section1__el-follow-size-el").each(function () {
         $(".input-block__radio_size").append("<label>" + $(this).attr("data-size") + '<input type="radio" name="size" value="' + $(this).attr("data-size") + '"></label>')
      }),
         $(this).siblings(".section1__el-follow").find(".section1__el-follow-color-el").each(function () {
            $(".input-block__radio_color").append('<label><input type="radio" name="color" value="' + $(this).attr("data-color") + '"></label>')
         }),
         $(".input-block__radio_color input").each(function () {
            var e = $(this).attr("value");
            $(this).parent().css("background-color", e)
         }),
         $(".input-block__radio_size label").removeClass("active"),
         $('.input-block__radio_size input[value="' + e + '"]').prop("checked", !0),
         $('.input-block__radio_size input[value="' + e + '"]').parent().addClass("active"),
         $(".input-block__radio_color label").removeClass("active"),
         $('.input-block__radio_color input[value="' + t + '"]').prop("checked", !0),
         $('.input-block__radio_color input[value="' + t + '"]').parent().addClass("active"),
         $("#followModal").arcticmodal({
            afterOpen: function (e, t) {
               $(".input-block__radio_size label").on("click", function () {
                  $(".input-block__radio_size label").removeClass("active"),
                     $(this).addClass("active"),
                     $(this).find("input").prop("checked", !0)
               }),
                  $(".input-block__radio_color label").on("click", function () {
                     $(".input-block__radio_color label").removeClass("active"),
                        $(this).addClass("active"),
                        $(this).find("input").prop("checked", !0)
                  })
            },
            afterClose: function (e, t) {
               $("#followModal").find("input").removeClass("wrong"),
                  $("#followModal").find(".input-block p").text("")
            }
         })
   }),
   $("#followModal").on("submit", function (e) {
      e.preventDefault();
      var t = $(this)
         , i = $("#name").val()
         , o = $("#email").val()
         , s = $("#phone").val()
         , n = !1;
      0 !== i.length ? ($("#name").removeClass("wrong"),
         $("#name").siblings("p").text("")) : ($("#name").addClass("wrong"),
            $("#name").siblings("p").text("Введите ваше имя")),
         0 !== o.length ? 0 == o.search(/^[\.a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i) ? ($("#email").removeClass("wrong"),
            $("#email").siblings("p").text(""),
            n = !0) : ($("#email").addClass("wrong"),
               $("#email").siblings("p").text("Введите корректный E-mail")) : ($("#email").addClass("wrong"),
                  $("#email").siblings("p").text("Введите ваш E-mail")),
         0 !== s.length ? $("#phone").inputmask("isComplete") ? ($("#phone").removeClass("wrong"),
            $("#phone").addClass("success"),
            $("#phone").parents(".input-block").find("p").text("")) : ($("#phone").addClass("wrong"),
               $("#phone").removeClass("success"),
               $("#phone").parents(".input-block").find("p").text("Введите корректный номер телефона")) : ($("#phone").addClass("wrong"),
                  $("#phone").removeClass("success"),
                  $("#phone").parents(".input-block").find("p").text("Введите номер телефона для связи")),
         0 !== i.length && !0 == successPhone && !0 == n && (t.find("input").removeClass("wrong"),
            t.find("button").css("background-color", "#6FCF97").text("Подписаны на товар"),
            setTimeout(function () {
               $("#followModal").arcticmodal("close"),
                  $("#followModal").find("button").removeAttr("style").text("Ожидать поступление")
            }, 5e3))
   }),
   $(".section1__el").on("mouseover", function () {
      $(".section1__el").css("z-index", "1"),
         $(this).css("z-index", "10")
   }),
   $(".section1__el-follow-color .input-block").each(function () {
      $(this).find("label").css("background-color", $(this).attr("data-color"))
   }),
   $("body").on("click", ".section1__el-follow-size .input-block label", function () {
      $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
         $(this).addClass("active")
   }),
   $(".section1__tabs-content-el-bottom-size").each(function () {
      1 == $(this).find(".input-block").length && ($(this).find("input").prop("checked", !0),
         $(this).find("label").addClass("active"))
   }),
   $("body").on("click", ".section1__el-follow-color .input-block label", function () {
      $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
         $(this).addClass("active")
   }),
   $(".section1__el-follow-color .input-block input").each(function () {
      $(this).is(":checked") && $(this).parent().addClass("active")
   })),
   $("main").hasClass("soon-page")) {
   $(".section1__el-top").length && $(".section1__el-top").each(function () {
      "none" != $(this).attr("data-unique") && $(this).html("<span>" + $(this).attr("data-unique") + "</span>")
   });
   var k = !1;
   $(".section1__filters-content").slideUp(0),
      $(".section1__filters-el-wrap_color .input-block, .fn_section_color .input-block").each(function () {
         $(this).find("label").css("background-color", $(this).attr("data-color"))
      }),
      $(".section1__filters-el-wrap_size .input-block label").on("click", function () {
         $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
            $(this).addClass("active")
      }),
      $(".section1__filters-el-wrap_color .input-block label").on("click", function () {
         $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
            $(this).addClass("active")
      }),
      $(".section1__filters-el-wrap_prise .section1__filters-el-wrap_prise-min").on("change", function () {
         var e = +$(this).val()
            , t = +$(".section1__filters-el-wrap_prise-max").val();
         e >= 1300 ? e < t ? ($(".section1__filters-top-wrap-prise-min").html("<p>от " + e + ' ₽<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.633933 0.34436L14.2609 13.9713" stroke="#8F8F8F" stroke-width="0.852632"></path><path d="M0.633933 13.9713L14.2609 0.34436" stroke="#8F8F8F" stroke-width="0.852632"></path></svg></p>'),
            $(".filters-mobile-delete").addClass("active")) : 0 == t && (e < 453e3 ? ($(".section1__filters-top-wrap-prise-min").html("<p>от " + e + ' ₽<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.633933 0.34436L14.2609 13.9713" stroke="#8F8F8F" stroke-width="0.852632"></path><path d="M0.633933 13.9713L14.2609 0.34436" stroke="#8F8F8F" stroke-width="0.852632"></path></svg></p>'),
               $(".filters-mobile-delete").addClass("active")) : ($(".section1__filters-top-wrap-prise-min p").remove(),
                  $(".section1__filters-el-wrap_prise-min").val(""))) : ($(".section1__filters-top-wrap-prise-min p").remove(),
                     $(".section1__filters-el-wrap_prise-min").val(""))
      }),
      $(".section1__filters-el-wrap_prise .section1__filters-el-wrap_prise-max").on("change", function () {
         var e = +$(".section1__filters-el-wrap_prise-min").val()
            , t = +$(this).val();
         t <= 453e3 && 0 != t && t > e ? t > e && 0 != e ? ($(".section1__filters-top-wrap-prise-max").html("<p>до " + t + ' ₽<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.633933 0.34436L14.2609 13.9713" stroke="#8F8F8F" stroke-width="0.852632"></path><path d="M0.633933 13.9713L14.2609 0.34436" stroke="#8F8F8F" stroke-width="0.852632"></path></svg></p>'),
            $(".filters-mobile-delete").addClass("active")) : 0 == e && (t > 1300 ? ($(".section1__filters-top-wrap-prise-max").html("<p>до " + t + ' ₽<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.633933 0.34436L14.2609 13.9713" stroke="#8F8F8F" stroke-width="0.852632"></path><path d="M0.633933 13.9713L14.2609 0.34436" stroke="#8F8F8F" stroke-width="0.852632"></path></svg></p>'),
               $(".filters-mobile-delete").addClass("active")) : ($(".section1__filters-top-wrap-prise-max p").remove(),
                  $(".section1__filters-el-wrap_prise-max").val(""))) : ($(".section1__filters-top-wrap-prise-max p").remove(),
                     $(".section1__filters-el-wrap_prise-max").val(""))
      }),
      $(".section1__filters-el-wrap_size .input-block input").on("change", function () {
         var e = $(this).val();
         "" != e ? ($(".section1__filters-top-wrap-size").html("<p>Размер: " + e + '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.633933 0.34436L14.2609 13.9713" stroke="#8F8F8F" stroke-width="0.852632"></path><path d="M0.633933 13.9713L14.2609 0.34436" stroke="#8F8F8F" stroke-width="0.852632"></path></svg></p>'),
            $(".filters-mobile-delete").addClass("active")) : $(".section1__filters-top-wrap-size p").remove()
      }),
      $(".section1__filters-el-wrap_color .input-block input").on("change", function () {
         var e = $(this).val();
         "" != e ? ($(".section1__filters-top-wrap-color").html("<p>" + e + '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.633933 0.34436L14.2609 13.9713" stroke="#8F8F8F" stroke-width="0.852632"></path><path d="M0.633933 13.9713L14.2609 0.34436" stroke="#8F8F8F" stroke-width="0.852632"></path></svg></p>'),
            $(".filters-mobile-delete").addClass("active")) : $(".section1__filters-top-wrap-color p").remove()
      }),
      $(".section1__filters-el-wrap_sex .input-block input").on("change", function () {
         if ($(this).is(":checked")) {
            var e = $(this).val();
            $(".section1__filters-top-wrap-sex").append("<p>" + e + '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.633933 0.34436L14.2609 13.9713" stroke="#8F8F8F" stroke-width="0.852632"></path><path d="M0.633933 13.9713L14.2609 0.34436" stroke="#8F8F8F" stroke-width="0.852632"></path></svg></p>'),
               $(".filters-mobile-delete").addClass("active")
         } else {
            var e = $(this).val();
            $(".section1__filters-top-wrap-sex p").each(function () {
               $(this).text() === e && $(this).remove()
            })
         }
      }),
      $(document).mouseup(function (e) {
         var t = $(".section1__filters-top")
            , i = $(".section1__filters-top>p")
            , o = $(".section1__filters-top>svg")
            , s = $(".section1__filters-top .filters-mobile-delete")
            , n = $(".section1__filters-top-wrap p")
            , a = $(".section1__filters-top-wrap svg");
         if (t.is(e.target) || i.is(e.target) || o.is(e.target))
            t.siblings(".section1__filters-content").slideToggle(300),
               t.toggleClass("active");
         else if (n.is(e.target)) {
            var l = $(e.target).parent().attr("class");
            if ($(e.target).remove(),
               "section1__filters-top-wrap-prise-min" == l)
               $(".section1__filters-el-wrap_prise-min").val("");
            else if ("section1__filters-top-wrap-prise-max" == l)
               $(".section1__filters-el-wrap_prise-max").val("");
            else if ("section1__filters-top-wrap-color" == l)
               $(".section1__filters-el-wrap_color input").prop("checked", !1),
                  $(".section1__filters-el-wrap_color label").removeClass("active");
            else if ("section1__filters-top-wrap-size" == l)
               $(".section1__filters-el-wrap_size input").prop("checked", !1),
                  $(".section1__filters-el-wrap_size label").removeClass("active");
            else if ("section1__filters-top-wrap-sex" == l) {
               var c = $(e.target)[0]
                  , r = $(c).text();
               $(".section1__filters-el-wrap_sex label").each(function () {
                  $(this).text() === r && ($(this).siblings("input").prop("checked", !1),
                     $(this).removeClass("active"))
               })
            }
         } else if (a.is(e.target)) {
            var p = $(e.target).parent().parent().attr("class");
            if ($(e.target).parent().remove(),
               "section1__filters-top-wrap-prise-min" == p)
               $(".section1__filters-el-wrap_prise-min").val("");
            else if ("section1__filters-top-wrap-prise-max" == p)
               $(".section1__filters-el-wrap_prise-max").val("");
            else if ("section1__filters-top-wrap-color" == p)
               $(".section1__filters-el-wrap_color input").prop("checked", !1),
                  $(".section1__filters-el-wrap_color label").removeClass("active");
            else if ("section1__filters-top-wrap-size" == p)
               $(".section1__filters-el-wrap_size input").prop("checked", !1),
                  $(".section1__filters-el-wrap_size label").removeClass("active");
            else if ("section1__filters-top-wrap-sex" == p) {
               var d = $(e.target)[0].parentNode
                  , u = $(d).text();
               $(".section1__filters-el-wrap_sex label").each(function () {
                  $(this).text() === u && ($(this).siblings("input").prop("checked", !1),
                     $(this).removeClass("active"))
               })
            }
         } else
            s.is(e.target) && ($(e.target).removeClass("active"),
               $(".section1__filters-content input").prop("checked", !1),
               $(".section1__filters-el-wrap_prise-min").val(""),
               $(".section1__filters-el-wrap_prise-max").val(""),
               $(".section1__filters-content label.active").removeClass("active"),
               $(".section1__filters-top-wrap p").remove())
      }),
      $(".section1__el-follow-color-el").each(function () {
         var e = $(this).attr("data-color");
         $(this).css("background-color", e)
      }),
      $(".section1__el-follow-size .section1__el-follow-size-el").on("click", function () {
         $(this).parent(".section1__el-follow-size").find(".section1__el-follow-size-el").removeClass("active"),
            $(this).addClass("active"),
            $(this).parent(".section1__el-follow-size").siblings(".section1__el-follow-btn").find("button").text("Узнать о поступлении"),
            $(this).parent(".section1__el-follow-size").siblings(".section1__el-follow-btn").find("button").removeAttr("style")
      }),
      $(".section1__el-follow-color .section1__el-follow-color-el").on("click", function () {
         $(this).parent(".section1__el-follow-color").find(".section1__el-follow-color-el").removeClass("active"),
            $(this).addClass("active")
      }),
      $(".mobile-btn").on("click", function () {
         $(".input-block__radio_size").find("label").remove(),
            $(".input-block__radio_color").find("label").remove();
         var e = $(this).siblings(".section1__el-follow").find(".section1__el-follow-size-el.active").attr("data-size")
            , t = $(this).siblings(".section1__el-follow").find(".section1__el-follow-color-el.active").attr("data-color");
         $(this).siblings(".section1__el-follow").find(".section1__el-follow-size-el").each(function () {
            $(".input-block__radio_size").append("<label>" + $(this).attr("data-size") + '<input type="radio" name="size" value="' + $(this).attr("data-size") + '"></label>')
         }),
            $(this).siblings(".section1__el-follow").find(".section1__el-follow-color-el").each(function () {
               $(".input-block__radio_color").append('<label><input type="radio" name="color" value="' + $(this).attr("data-color") + '"></label>')
            }),
            $(".input-block__radio_color input").each(function () {
               var e = $(this).attr("value");
               $(this).parent().css("background-color", e)
            }),
            $(".input-block__radio_size label").removeClass("active"),
            $('.input-block__radio_size input[value="' + e + '"]').prop("checked", !0),
            $('.input-block__radio_size input[value="' + e + '"]').parent().addClass("active"),
            $(".input-block__radio_color label").removeClass("active"),
            $('.input-block__radio_color input[value="' + t + '"]').prop("checked", !0),
            $('.input-block__radio_color input[value="' + t + '"]').parent().addClass("active"),
            $("#followModal").arcticmodal({
               afterOpen: function (e, t) {
                  alert("afterClose"),
                     phone_mask(),
                     $(".input-block__radio_size label").on("click", function () {
                        $(".input-block__radio_size label").removeClass("active"),
                           $(this).addClass("active"),
                           $(this).find("input").prop("checked", !0)
                     }),
                     $(".input-block__radio_color label").on("click", function () {
                        $(".input-block__radio_color label").removeClass("active"),
                           $(this).addClass("active"),
                           $(this).find("input").prop("checked", !0)
                     })
               },
               afterClose: function (e, t) {
                  $("#followModal").find("input").removeClass("wrong"),
                     $("#followModal").find(".input-block p").text(""),
                     $("#followModal").find("button").removeAttr("style").text("Ожидать поступление"),
                     $("#followModal")[0].reset(),
                     k = !0
               }
            })
      }),
      $(".section1__el").on("mouseover", function () {
         $(".section1__el").css("z-index", "1"),
            $(this).css("z-index", "10")
      }),
      $(".section1__el-follow-color .input-block").each(function () {
         $(this).find("label").css("background-color", $(this).attr("data-color"))
      }),
      $("body").on("click", ".section1__el-follow-size .input-block label", function () {
         $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
            $(this).addClass("active")
      }),
      $(".section1__tabs-content-el-bottom-size").each(function () {
         1 == $(this).find(".input-block").length && ($(this).find("input").prop("checked", !0),
            $(this).find("label").addClass("active"))
      }),
      $("body").on("click", ".section1__el-follow-color .input-block label", function () {
         $(this).parent(".input-block").siblings(".input-block").find("label").removeClass("active"),
            $(this).addClass("active")
      }),
      $(".section1__el-follow-color .input-block input").each(function () {
         $(this).is(":checked") && $(this).parent().addClass("active")
      })
}
$(".section1__item-video").on("click", function () {
   $(this).find(".section1__item-video-preview").hide(200);
   var e = $(this).find("iframe");
   $(e)[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
}),
   $("iframe").each(function () {
      var e = $(this).attr("src");
      e += "?enablejsapi=1&wmode=transparent",
         $(this).attr("src", e)
   }),
   $("main").hasClass("look") && ($(".section1__look-img img").height($(".section1__look-img img").width()),
      $(window).resize(function () {
         $(".section1__look-img img").height($(".section1__look-img img").width())
      })),
   $("main").hasClass("look-page") && ($(".look-page .section1__tabs-top-el-img img").height($(".look-page .section1__tabs-top-el-img img").width()),
      $(window).resize(function () {
         $(".look-page .section1__tabs-top-el-img img").height($(".look-page .section1__tabs-top-el-img img").width())
      }));
const isRegistrationPage = document.querySelector(".registration-page");
ymaps.ready(function () {
   var e = []
      , t = [];
   $(".section2__el-block-map").each(function (i) {
      var o = $(this).attr("data-x")
         , s = $(this).attr("data-y");
      e[i] = new ymaps.Map($(this).attr("id"), {
         center: [o, s],
         zoom: 15
      }),
         t[i] = new ymaps.Placemark(e[i].getCenter([o, s]), {
            hintContent: "Собственный значок метки",
            balloonContent: "Это красивая метка"
         }, {
            iconLayout: "default#image",
            iconImageHref: "/design/talalay/img/pin.svg",
            iconImageSize: [30, 42],
            iconImageOffset: [-5, -38]
         }),
         e[i].behaviors.disable("scrollZoom"),
         e[i].geoObjects.add(t[i])
   })
});
