

//function home() {
//
////    $(".page-about").hide();
//    $(".page-about").addClass('hidden');
//
//    $(".page-contact").addClass('hidden');
//    $(".page-skills").addClass('hidden');
//
//    $(".page-index").removeClass('hidden');
////    $(".page-header").removeClass('.hidden');
//    window.history.pushState('page2', 'Title', 'http://localhost/theme.shababhs/');
//
//}


function about() {

    $.get("subpages/about.html", function (subpage) {
        $("#domContainer").hide().html(subpage).fadeIn();
    });

    window.history.pushState('Dev ShababHS | About', 'Title', 'http://localhost/theme.shababhs/about');
}

function skills() {

    $.get("subpages/skills.html", function (subpage) {
        $("#domContainer").hide().html(subpage).fadeIn();
        makeSkillCloud();
    });

    window.history.pushState('Dev ShababHS | Skills', 'Title', 'http://localhost/theme.shababhs/skills');
}


function contact() {

    $.get("subpages/contact.html", function (subpage) {
        $("#domContainer").hide().html(subpage).fadeIn();
    });

    window.history.pushState('Dev ShababHS | Contact', 'Title', 'http://localhost/theme.shababhs/contact');
}

$(window).on('load', function () {

    var wrapperMenu = document.querySelector('.navbar-toggler');

    wrapperMenu.addEventListener('click', function () {
        console.log("SOmeone clicked me");
        wrapperMenu.classList.toggle('open');
        setTimeout(
                function () {
                    console.log("bodyclick event added");
                    $("#bodyClick").click(function () {
                        console.log("yo clicked me");
                        wrapperMenu.classList.toggle('open');
                    });
                },
                500);

    });



    console.log("window load occured!");

    if (fn) {
        window[fn]();
    }


    $('.preloaded-hidden').css("opacity", 1);
    console.log("test");
});