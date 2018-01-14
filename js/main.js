$(document).ready(function(){

  $( function() {
    $( "#category" ).selectmenu();
  } );

  $( function() {
    $( "#city" ).selectmenu();
  } );

  $( function() {
    $( "#city2" ).selectmenu();
  } );
  $(".open_catalog").click(function() {
    $('.catalog ul').toggle();
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest(".catalog").length) {
    $('.catalog ul').hide();
    }
    e.stopPropagation();
  });

  $('.slider ul').lightSlider({
    adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:true,
      controls:true,
    });

  $('.test1 .block ul').lightSlider({
      item:4,
      
      loop:true,
      controls:true,
      pager:false,
      responsive : [
        {
          breakpoint:1599,
          settings: {
            item:4,
            slideMove:1,
            slideMargin:12,
            }
        },
        {
          breakpoint:1279,
          settings: {
            item:4,
            slideMove:1,
            slideMargin:12,
            }
        },
        {
          breakpoint:959,
          settings: {
            item:4,
            slideMove:1,
            }
        },
        {
          breakpoint:769,
          settings: {
            item:2,
            slideMove:1,
            }
        },
        {
          breakpoint:601,
          settings: {
            item:2,
            slideMove:1,

            }
        }
      ]
    });

  $('.blocker ul').lightSlider({
      item:4,
      loop:true,
      controls:true,
      pager:false,
      responsive : [
        {
          breakpoint:1599,
          settings: {
            item:4,
            slideMove:1,
            slideMargin:12,
            }
        },
        {
          breakpoint:1279,
          settings: {
            item:4,
            slideMove:1,
            slideMargin:12,
            }
        },
        {
          breakpoint:959,
          settings: {
            item:4,
            slideMove:1,
            }
        },
        {
          breakpoint:769,
          settings: {
            item:2,
            slideMove:1,
            }
        },
        {
          breakpoint:601,
          settings: {
            item:2,
            slideMove:1,
            }
        }
      ]
    }); 

    // hover menu header
    

    


    ////header_prod_slider//////
    ////header_prod_slider//////
    if($(window).width() <= '1099'){
      $('.prod_slider__ul').slick({
        slidesToShow: 12,
        slidesToScroll: 4,
        autoplay:true,
        nextArrow: '<img src="images/prod_slider_ar_right.png" class="slick-next">',
        prevArrow: '<img src="images/prod_slider_ar_left.png" class="slick-prev">',
        responsive: [
          {
            breakpoint: 901,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 2,
              infinite: true
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 2,
              infinite: true
            }
          },
          {
            breakpoint: 501,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true
            }
          },
          {
            breakpoint: 401,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true
            }
          }
        ]
      });
    }

    //////price_slider////
    $('.product_price__slider1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:true,
      nextArrow: '<img src="images/prod_slider_ar_right.png" class="slick-next small_slider_arrow">',
        prevArrow: '<img src="images/prod_slider_ar_left.png" class="slick-prev small_slider_arrow">',
    });

    $('.product_price__slider2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:true,
      nextArrow: '<img src="images/prod_slider_ar_right.png" class="slick-next small_slider_arrow">',
        prevArrow: '<img src="images/prod_slider_ar_left.png" class="slick-prev small_slider_arrow">',
    });


    ////scroll_top///

    $('.top_go_img').click(function(event){
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    $('.brands_wrapper__new_container .brands_wrapper__new_container__main_ul li a').click(function(event){
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    // tabs

    $('.tabs_wrapper li button').on('click', function(event) {
      event.preventDefault();
      $('.tabs_wrapper li').removeClass('active');
      $(this).parent('li').addClass('active');

      if ($('.first').hasClass('active')) {
        $('.product_day').css('display','block');
      }else{
        $('.product_day').css('display','none');
      }

      if ($('.second').hasClass('active')) {
        $('.product_now').css('display','block');
      }else{
        $('.product_now').css('display','none');
      }

      if ($('.third').hasClass('active')) {
        $('.product_now2').css('display','block');
      }else{
        $('.product_now2').css('display','none');
      }

      if ($('.fourth').hasClass('active')) {
        $('.product_price').css('display','block');
        $('.product_price__slider3').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
          nextArrow: '<img src="images/prod_slider_ar_right.png" class="slick-next small_slider_arrow">',
          prevArrow: '<img src="images/prod_slider_ar_left.png" class="slick-prev small_slider_arrow">',
        });
        $('.product_price__slider4').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
          nextArrow: '<img src="images/prod_slider_ar_right.png" class="slick-next small_slider_arrow">',
          prevArrow: '<img src="images/prod_slider_ar_left.png" class="slick-prev small_slider_arrow">',
        });
      }else{
        $('.product_price').css('display','none');
      }

    });

    $('.all_brands').on('click', function(event) {
      event.preventDefault();
      $('.brands_wrapper .brands_wrapper__container_hidden').css('display','flex');
    });

    // gallery

    $('#lightSlider').lightSlider({
      gallery: true,
      item: 1,
      loop: true,
      slideMargin: 0,
      thumbItem: 9,
      controls:false
  });

    $('#lightSlider2').lightSlider({
      gallery: true,
      item: 1,
      loop: true,
      slideMargin: 0,
      thumbItem: 9,
      controls:false
  });


    ///card_select

    $('.card_select').selectric();

    //card tabs

    $('.main_card_wrapper__top_inside_wrapp__tabs_wrapper__ul .first').on('click', function(event) {
      event.preventDefault();
      $('.main_card_wrapper__top_inside_wrapp__tabs_wrapper__ul li a').removeClass('active_tabs_link_status');
      $(this).addClass('active_tabs_link_status');
      $('.main_card_wrapper__top_inside_wrapp__tabs_wrapper_content div').removeClass('visible_tab__block');
      $('.main_card_wrapper__top_inside_wrapp__tabs_wrapper_content .main_card_wrapper__top_inside_wrapp__tabs_wrapper_first').addClass('visible_tab__block');
    });

    $('.main_card_wrapper__top_inside_wrapp__tabs_wrapper__ul .second').on('click', function(event) {
      event.preventDefault();
      $('.main_card_wrapper__top_inside_wrapp__tabs_wrapper__ul li a').removeClass('active_tabs_link_status');
      $(this).addClass('active_tabs_link_status');
      $('.main_card_wrapper__top_inside_wrapp__tabs_wrapper_content div').removeClass('visible_tab__block');
      $('.main_card_wrapper__top_inside_wrapp__tabs_wrapper_content .main_card_wrapper__top_inside_wrapp__tabs_wrapper_second').addClass('visible_tab__block');
    });

    $('.main_card_wrapper__top_inside_wrapp__tabs_wrapper__ul .third').on('click', function(event) {
      event.preventDefault();
      $('.main_card_wrapper__top_inside_wrapp__tabs_wrapper__ul li a').removeClass('active_tabs_link_status');
      $(this).addClass('active_tabs_link_status');
      $('.main_card_wrapper__top_inside_wrapp__tabs_wrapper_content div').removeClass('visible_tab__block');
      $('.main_card_wrapper__top_inside_wrapp__tabs_wrapper_content .main_card_wrapper__top_inside_wrapp__tabs_wrapper_third').addClass('visible_tab__block');
    });

    ////recently_slider

    $('.main_card_wrapper__recently__ul').slick({
       slidesToShow: 7,
      slidesToScroll: 1,
      autoplay:true,
      nextArrow: '<img src="images/prod_slider_ar_right.png" class="slick-next small_slider_arrow">',
      prevArrow: '<img src="images/prod_slider_ar_left.png" class="slick-prev small_slider_arrow">',
      responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 601,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          }
        ]
    })


    //checked goods

    $('.item_input__check').on('change', function(){
      if ($(this).prop('checked')) {
        $(this).siblings('.checked_indicator').children('.non_check').css('display', 'none');
        $(this).siblings('.checked_indicator').children('.checked').css('display', 'block');
        $(this).parent('.item').next('.next_item').slideDown();
      }else if(!($(this).prop('checked'))){
        $(this).siblings('.checked_indicator').children('.checked').css('display', 'none');
        $(this).siblings('.checked_indicator').children('.non_check').css('display', 'block');
        $(this).parent('.item').next('.next_item').slideUp();
      }
    });

    $('.item_input__check2').on('change', function(){
      if ($(this).prop('checked')) {
        $(this).siblings('.checked_indicator').children('.non_check').css('display', 'none');
        $(this).siblings('.checked_indicator').children('.checked').css('display', 'block');
      }else if(!($(this).prop('checked'))){
        $(this).siblings('.checked_indicator').children('.checked').css('display', 'none');
        $(this).siblings('.checked_indicator').children('.non_check').css('display', 'block');
      }
    });


   $('.item_input__check_next').on('change', function(){
      if ($(this).prop('checked')) {
        $(this).siblings('.checked_indicator').children('.non_check').css('display', 'none');
        $(this).siblings('.checked_indicator').children('.checked').css('display', 'block');
      }else if(!($(this).prop('checked'))){
        $(this).siblings('.checked_indicator').children('.checked').css('display', 'none');
        $(this).siblings('.checked_indicator').children('.non_check').css('display', 'block');
      }
    });

    //card slider range

    if ($( "#slider-range" ).length) {
      $( "#slider-range" ).slider({
        range: true,
        min: 20000,
        max: 100000,
        values: [ 35000, 80000 ],
        slide: function( event, ui ) {
          $( "#amount1" ).val( ui.values[ 0 ]);
          $( "#amount2" ).val( ui.values[ 1 ]);
        }
      });
      $( "#amount1" ).val(  $( "#slider-range" ).slider( "values", 0 ));
      $( "#amount2" ).val(  $( "#slider-range" ).slider( "values", 1 ));
  }

    ////sticky////

    $(".main_card_wrapper__top_inside_wrapp__dopoln_sticky_block").stick_in_parent();
    ////footer

    if($(window).width() <= '959'){
        $('.block_ > h3').on('click',function(){
          if (!($(this).parent('div.block_').children('ul').hasClass('telephone_footer__ul'))) {
            $(this).parent('div.block_').children('ul').slideToggle('slow');
            if($(this).hasClass('slide_toggle_h3')){
              $(this).removeClass('slide_toggle_h3');
            }
            else{
              $(this).addClass('slide_toggle_h3');
            }
          }
        })
    }

    //db_content//

    $(".main_mob_content_but__first").on('click',function(){
      $('.main_mob_content_but__first').removeClass('main_mob_content_but_db');
      $('.main_mob_content_but__second').addClass('main_mob_content_but_db');
      $('.item').slideDown(750);
      $('.main_card_wrapper__top_inside_wrapp__dopoln_goods_copy').slideDown(750);
    });
    $(".main_mob_content_but__second").on('click',function(){
      $('.main_mob_content_but__second').removeClass('main_mob_content_but_db');
      $('.main_mob_content_but__first').addClass('main_mob_content_but_db');
       $('.item').slideUp(750);
       $('.main_card_wrapper__top_inside_wrapp__dopoln_goods_copy').slideUp(750);
    });


    //////scroll_top///
    // $(function() {
    //   var blockTop = $('.footer_bottom_block').offset().top;
    //   var $window = $(window);
    //   $window.on('load scroll', function() {
    //       var top = $window.scrollTop();
    //       var height = $window.height();
    //       if (top + height >= blockTop) {
    //           CountUp();
    //       }
    //       else{
    //         CountDown();
    //       }
    //   });
    //   function CountUp() {
    //      $('.under_index_products_cont').addClass('under_index_products_cont__scroll_top');
    //   }
    //   function CountDown() {
    //      $('.under_index_products_cont').removeClass('under_index_products_cont__scroll_top');
    //   }
    // })

    ////mob_menu///

    $('.mob_menu').on('click',function(){
        $('.menu_mob_shop').addClass('shop_db');
    })
    $('.close_menu_mob').on('click',function(){
        $('.menu_mob_shop').removeClass('shop_db');
    })

      $('.why_index__top_block').slick({
        dots:true,
        controls:false,
         slidesToShow: 1,
      slidesToScroll: 1

      });

      //fancybox

        $('.select_link_a').fancybox();
        $('.entrance_modal__link').fancybox();
        $('.check_in_modal__link').fancybox({
            helpers : {
                overlay : {
                    locked : false
                }
            }
        });
        
      //order_select

      $('#order_pay_select').selectric();

      //delivery tabs

      $('.delivery_wrapper_tabs__ul li a').on('click', function(event) {
        event.preventDefault();

        $('.delivery_wrapper_tabs__ul li').removeClass('active_tab_delivery');
        $(this).parent('li').addClass('active_tab_delivery');
        var curTabNumb = $(this).data('tab');

        $('.delivery_wrapper_tabs_content div').removeClass('active_tab_delivery_content')
        $('[data-tab="'+curTabNumb+'"]').addClass('active_tab_delivery_content');

      });

      /////rating/////

      $(function(){
        $('.review_wrap__content_block__form_block__top_ul_rating__rating__ul > li').hover(function(){
          $(this).addClass('rating_hover');
          $(this).prevAll('li').addClass('rating_hover');
        },function(){
          $(this).removeClass('rating_hover');
          $(this).prevAll('li').removeClass('rating_hover');
        })
      })

      $('.review_wrap__content_block__form_block__top_ul_rating__rating__ul > li').on('click',function(){
        $(this).siblings('li').removeClass('rating_click');
        $(this).addClass('rating_click');
        $(this).prevAll('li').addClass('rating_click');
      })

      // закриття блоку при натисненні поза ним

      // $(document).mouseup(function (e) {
      //     var container = $(".phone_icon__ul");
      //     if (container.has(e.target).length === 0){
      //         container.slideUp(400);
      //     }
      // });
        $(function(){
        $(document).click(function(event) {
          var container = $(".phone_icon__ul");
          if ($(event.target).closest(".hover_telephone_icon,.phone_icon__ul").length) return;
          $(".phone_icon__ul").slideUp(400);
          event.stopPropagation();
        });
      });
        $('.info_header .phone img').on('click', function(event) {

          $('.phone_icon__ul').slideToggle(400);
          event.preventDefault();
          /* Act on the event */

          $('.hover_telephone_icon, .hover_telephone_icon__rotate').toggle();
        });


        $(function(){
        $(document).click(function(event) {
          var container = $(".message_icon__ul");
          if ($(event.target).closest(".hover_telephone_email,.message_icon__ul").length) return;
          $(".message_icon__ul").slideUp(400);
          event.stopPropagation();
        });
      });
        $('.info_header .email img').on('click', function(event) {

          $('.message_icon__ul').slideToggle(400);
          event.preventDefault();
          /* Act on the event */

          $('.hover_telephone_email, .hover_telephone_email__rotate').toggle();
          
        });


        // catalogue close icon

        $('.catalogue_item_close_icon').on('click', function(event) {
          event.preventDefault();
          $(this).parent('span').parent('li').css('display','none');
          /* Act on the event */
        });

        /*$('.close_ul_catalogue').on('click', function(event) {
          event.preventDefault();
          $(this).parent('label').siblings('ul').slideToggle(400);
          $(this).children('.down, .up').toggle();
        });*/

        $('.catalogue_wrapper__ul_area_div__first_js .top_ul .top_ul_label').on('change', function(e){
          e.preventDefault();
          $(this).children('.close_ul_catalogue').children('.down, .up').toggle();
          if (($(this).children('.top_ul_input_cont').children('input').prop('checked')) > 0) {
            $(this).siblings('.bottom_ul').slideDown(400);
          }else{
            $(this).siblings('.bottom_ul').slideUp(400);
          }
        });

        $('.catalogue_wrapper__ul_area_div__other .top_ul .top_ul_label').on('change', function(e){
          e.preventDefault();
          $(this).children('.close_ul_catalogue').children('.down, .up').toggle();
          if (($(this).children('.top_ul_input_cont').children('input').prop('checked')) > 0) {
            $(this).siblings('.bottom_ul').slideDown(400);
          }else{
            $(this).siblings('.bottom_ul').slideUp(400);
          }
        });

        $('.catalogue_wrapper__ul_area_div__first_js h4').on('click', function(event) {
          event.preventDefault();
          $('.catalogue_wrapper__ul_area_div__first_js .top_ul').slideToggle(400);  
        });

        // catalogue show block

        $('.catalogue_wrapper__ul_area__under_wrap .search').on('click', function(event) {
          event.preventDefault();
          /* Act on the event */

          if ($('.catalogue_wrapper__ul_area_div .top_ul li').hasClass('catalogue_wrapper__ul_area_div_li__hidden_visible') > 0){
            $('.catalogue_wrapper__ul_area_div_li__hidden').removeClass('catalogue_wrapper__ul_area_div_li__hidden_visible');
            $('.catalogue_wrapper__ul_area_div_li__hidden').css('display','none');
            $('.catalogue_wrapper__ul_area__under_wrap .search').text('Расширенный поиск');
          }else if(!($('.catalogue_wrapper__ul_area_div_li__hidden').hasClass('catalogue_wrapper__ul_area_div_li__hidden_visible'))){
            $('.catalogue_wrapper__ul_area_div_li__hidden').addClass('catalogue_wrapper__ul_area_div_li__hidden_visible');
            $('.catalogue_wrapper__ul_area_div_li__hidden').css('display','flex');
            $('.catalogue_wrapper__ul_area__under_wrap .search').text('Cвернуть');
          }

        
        });

        // filter wrap close

        $('.catalogue_wrapper__your_choise__filter_block_top a').on('click', function(event) {
          event.preventDefault();
          $(this).parent('.catalogue_wrapper__your_choise__filter_block_top').siblings('.catalogue_wrapper__your_choise__filter_block_top_close_content').slideToggle(400);
          $(this).parent('.catalogue_wrapper__your_choise__filter_block_top').parent('.catalogue_wrapper__your_choise').siblings('.catalogue_wrapper__ul_area').slideToggle(400);
          $('.catalogue_wrapper__ul_area__under_wrap').slideToggle(400);
          $('.catalogue_wrapper__ul_area_hidden').slideToggle('fast');
          $('.catalogue_wrapper__your_choise__filter_block_top a .up, .catalogue_wrapper__your_choise__filter_block_top a .down').toggle();
          /* Act on the event */
        });

        //basket calculator

        $('.plus').click(function() {
          $(this).parent('div').children('div.counter').children('span').html(+$(this).parent('div').children('div.counter').children('span').html()+1);
        });
        $('.minus').click(function() {
          if($(this).parent('div').children('div.counter').children('span').html()>0){
          $(this).parent('div').children('div.counter').children('span').html(+$(this).parent('div').children('div.counter').children('span').html()-1);
          }
        });

        //basket div button close

        $('.close_icon_for_basket_div').on('click', function(event) {
          event.preventDefault();
          /* Act on the event */

          $(this).parent('.activity').parent('.basket_wrapper__left_container_div_cont').css('display','none');
        });

      // стилизированный скролл 
      if($(window).width() > '600'){
      if ($('.comparison_wrapper__content__right_container').length) {
        $('.comparison_wrapper__content__right_container').jScrollPane({
          showArrows:true,
          horizontalDragMinWidth: 30,
          horizontalDragMaxWidth: 539
        });
      }
    }
      
      ///categories_tab/////

      $('.categories_wrapper__content_block__main_tabs__ul li a').on('click', function(event) {
        event.preventDefault();

        $('.categories_wrapper__content_block__main_tabs__ul li').removeClass('active_tab_categories');
        $(this).parent('li').addClass('active_tab_categories');
        var curTabNumb = $(this).data('tab');

        $('.categories_wrapper__content_block__main_tabs__content div').removeClass('active_tab_categories_content')
        $('[data-tab="'+curTabNumb+'"]').addClass('active_tab_categories_content');

      });


      $('.main_fav_wrapper__content_block__prod_ul__li_but > img').click(function(e){
        e.preventDefault();
        $(this).parent('button').parent('div').parent('a').parent('li').css('display','none');
      })

      //сравнение адавтив,удаление блока

      $('.delete_btn').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        console.log('okey');
        $(this).parent('.comparison_wrapper__characteristic').parent('.comparison_wrapper__content__right_container__div').css('display','none');
      });


      if($(window).width() < '1099'){
        $('a').on('click',function(event){
          event.preventDefault();
          $(this).children('ul').slideToggle(750);
        })
      }




      $(function () {
        $(".rateYo").rateYo({
          rating: 3.5,
          readOnly: true,
          spacing: "5px",
          starWidth: "18px",
          normalFill: "#fff",
          ratedFill: "#ecbb6e"
        });
       
      });
});

