// 'use strict';

// function throttle(fn, delay) {
//   var last = undefined;
//   var timer = undefined;

//   return function () {
//     var now = +new Date();

//     if (last && now < last + delay) {
//       clearTimeout(timer);

//       timer = setTimeout(function () {
//         last = now;
//         fn();
//       }, delay);
//     } else {
//       last = now;
//       fn();
//     }
//   };
// }

// function onScroll() {
//   if (window.pageYOffset) {
//     $$header.classList.add('is-active');
//   } else {
//     $$header.classList.remove('is-active');
//   }
// }

// var $$header = document.querySelector('.js-header');

// window.addEventListener('scroll', throttle(onScroll, 25));

// Cache selectors
// var lastId,
//  topMenu = $("#mainNav"),
//  topMenuHeight = topMenu.outerHeight()+1,
//  // All list items
//  menuItems = topMenu.find("a"),
//  // Anchors corresponding to menu items
//  scrollItems = menuItems.map(function(){
//    var item = $($(this).attr("href"));
//     if (item.length) { return item; }
//  });

// // Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//   $('html, body').stop().animate({ 
//       scrollTop: offsetTop
//   }, 850);
//   e.preventDefault();
// });

// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;
   
//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
   
//    if (lastId !== id) {
//        lastId = id;
//        // Set/remove active class
//        menuItems
//          .parent().removeClass("active")
//          .end().filter("[href=#"+id+"]").parent().addClass("active");
//    }                   
// });


const sections = document.querySelectorAll('main')