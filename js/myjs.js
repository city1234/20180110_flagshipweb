$(document).ready(function() {
    /*niceScroll*/
    //$("html").niceScroll({ cursorwidth: "8px", mousescrollstep: 50, scrollspeed: 50 });
    $("html").niceScroll({ styler: "fb", cursorcolor: "#171717", autohidemode: false, cursorborder: "0px solid #fff", cursorwidth: "8px", zindex: 999 });
    /*endniceScroll*/

    /*allheight*/
    var domminheight = $(window).height() - 35;
    $("body").css("min-height", domminheight);
    /*endallheight*/

    /*animatetop*/
    $(".top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });
    /*endanimatetop*/

    $('#nav').load('common.html #nav');
    $('.copyright').load('common.html .copyright');
    $('.footer').load('common.html .footer');
    $('.leftmenu').load('common.html .leftmenu');
/***********vue**********/
// define
/*
var MyComponent = Vue.extend({
  template: '<div>A custom component!</div>'
})
// register
Vue.component('my-component', MyComponent)
// create a root instance
new Vue({
  el: '#example'
})*/
/***********vue**********/
});
