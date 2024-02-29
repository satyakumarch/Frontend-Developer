var elem=document.querySelectorAll(".elem")
elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
// val.style.backgroundColor="red";
val.childNodes[3].style.opacity=1
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=4


    })
    val.addEventListener("mousemove",function(){
        val.childNodes[3].style.leftopacity=dets.x+"px"


    })



})
// var elemimage=document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",function(dets){
//     elemimage.style.left=dets.x+"px"
//     elemimage.style.top=dets.y+"px"

// })

// elem1.addEventListener("mouseenter",function(dets){
//     elemimage.style.opacity=1;
//     // elemimage.style.top=dets.y+"px"

// })
// elem1.addEventListener("mouseleave",function(dets){
//     elemimage.style.opacity=0;
//     // elemimage.style.top=dets.y+"px"

// })
// })


