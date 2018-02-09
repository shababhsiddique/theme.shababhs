//svg code here

var wrapperMenu = document.querySelector('.navbar-toggler');

wrapperMenu.addEventListener('click', function () {
    wrapperMenu.classList.toggle('open');
});


function home() {
    
//    $(".page-about").hide();
    $(".page-about").addClass('hidden');
    
    $(".page-contact").addClass('hidden');
    $(".page-skills").addClass('hidden');

    $(".page-index").removeClass('hidden');
//    $(".page-header").removeClass('.hidden');
    window.history.pushState('page2', 'Title', 'http://localhost/theme.shababhs');

}


function about() {


//    $(".page-index").hide();
    $(".page-index").addClass('hidden');

//    $(".page-contact").hide();
    $(".page-contact").addClass('hidden');

//    $(".page-skills").hide();
    $(".page-skills").addClass('hidden');


//    $(".page-about").delay(1000).show();
    $(".page-about").removeClass('hidden');
    
    $(".page-about").css("opacity",1);
    
    window.history.pushState('page2', 'Title', 'http://localhost/theme.shababhs/about');
}


function skills() {

//    $(".page-header").addClass('hidden');
    $(".page-index").addClass('hidden');

    $(".page-about").addClass('hidden');
    $(".page-contact").addClass('hidden');


    $(".page-skills").removeClass('hidden');
    makeSkillCloud();
    
    window.history.pushState('page2', 'Title', 'http://localhost/theme.shababhs/skills');
}


function contact() {

//    $(".page-header").addClass('hidden');
    $(".page-index").addClass('hidden');

    $(".page-about").addClass('hidden');
    $(".page-skills").addClass('hidden');

    $(".page-contact").removeClass('hidden');
    
    window.history.pushState('page2', 'Title', 'http://localhost/theme.shababhs/contact');

}

$(window).on('load', function () {
    console.log("window load occured!");
    
    urlString = window.location.href;
    var urlarray = urlString.split('/');
    
    var fn = urlarray[urlarray.length-1];
    
    if(fn)
    window[fn]();
    
    $('.preloaded-hidden').css("opacity", 1);
    console.log("test");
});
