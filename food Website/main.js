$document.ready(function($){
    "use strict";

    jQuery(".menu-toggle").click(function(){
        jQuery(".main-navigation").toggleClass("toggle");
    });
    jQuery(".header-menu ul li a").click(function(){
        jQuery(".main-navigation").removeClass("toggle")
    })
gsap.registerPlugins(ScrollTrigger);

var elementFirst=document.querySelector('.site-header');
ScrollTrigger.create({
    trigger:"body",
    start:"30px top",
    end:"bottom bottom",

    onEnter:()=>myfunction(),
    onLeaveBack:()=>myfunction(),
});

function myfunction(){
    elementFirst.classList.toggle('sticky_head');
}

var scene=$(".js-parallax-scene").get(0);
var parallaxInstance=new Parallax(scene);

})

