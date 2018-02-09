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
    window.history.pushState('page2', 'Title', 'http://localhost/theme.shababhs/');

}


function about() {

//    $(".page-index").hide();
//    $(".page-index").addClass('hidden');

//    $(".page-contact").hide();
//    $(".page-contact").addClass('hidden');

//    $(".page-skills").hide();
//    $(".page-skills").addClass('hidden');


//    $(".page-about").delay(1000).show();
//    $(".page-about").removeClass('hidden');


    $.get("subpages/about.html", function (subpage) {
        $("#domContainer").hide().html(subpage).fadeIn();
    });

//    $("#domContainer").load("subpages/about.html", function () {
//        $("#domContainer").css("opacity",1);
//    });





    window.history.pushState('page2', 'Title', 'http://localhost/theme.shababhs/about');
}


function skills() {

//    $(".page-header").addClass('hidden');
//    $(".page-index").addClass('hidden');

//    $(".page-about").addClass('hidden');
//    $(".page-contact").addClass('hidden');


//    $(".page-skills").removeClass('hidden');
    $.get("subpages/skills.html", function (subpage) {
        $("#domContainer").hide().html(subpage).fadeIn();
        makeSkillCloud();
    });

//    $("#domContainer").load("subpages/skills.html", function () {
//        $("#domContainer").css("opacity", 1);
//        makeSkillCloud();
//    });
    


    window.history.pushState('page2', 'Title', 'http://localhost/theme.shababhs/skills');
}


function contact() {

//    $(".page-header").addClass('hidden');
//    $(".page-index").addClass('hidden');
//
//    $(".page-about").addClass('hidden');
//    $(".page-skills").addClass('hidden');
//
//    $(".page-contact").removeClass('hidden');

    $.get("subpages/contact.html", function (subpage) {
        $("#domContainer").hide().html(subpage).fadeIn();
    });


    window.history.pushState('page2', 'Title', 'http://localhost/theme.shababhs/contact');

}

$(window).on('load', function () {
    console.log("window load occured!");


    if (fn)
        window[fn]();

    $('.preloaded-hidden').css("opacity", 1);
    console.log("test");
});
