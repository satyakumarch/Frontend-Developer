$document.ready(function($){
    "use strict";
WebGLSampler.registerPlugins(ScrollTrigger);
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

})