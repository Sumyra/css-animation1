$(function(){

let nav = $('nav')
let navFixed = $('navFixed')
$(window).scroll(function(){
    let scrTop = $(window).scrTop()
    if(scrTop >200){
        nav.addClass('navFixed')
    }else(scrTop<200){
        nav.removeClass('navFixed')
    }
})



})
