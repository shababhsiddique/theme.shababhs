var $svg = $('svg').drawsvg({

    callback: function () {

        $("#svg3722").load("assets/sign-fill.svg", function () {
            console.log("SVG fetched?");

            $("#colored-sign").delay(200)
                    .queue(function (next) {
                        $(this).addClass("opa1");
                        $(this).removeClass("opa1");
                        next();

                        $(this).addClass("opa1");
                        $(this).addClass("hoverstrokefix");
                        
                        $("path.hvr-rotate").mouseover(function(){
                            $("path.hvr-rotate").parent().addClass("hvrtransitionfix");
                        });
                        
                    });
        });

    }
});

function animate() {
    $svg.drawsvg('animate');
}

animate();


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
}


function skill() {

//    $(".page-header").addClass('hidden');
    $(".page-index").addClass('hidden');

    $(".page-about").addClass('hidden');
    $(".page-contact").addClass('hidden');


    $(".page-skills").removeClass('hidden');
    makeSkillCloud();
}


function contact() {

//    $(".page-header").addClass('hidden');
    $(".page-index").addClass('hidden');

    $(".page-about").addClass('hidden');
    $(".page-skills").addClass('hidden');

    $(".page-contact").removeClass('hidden');

}

$(window).on('load', function () {
    console.log("window load occured!");

    $('.preloaded-hidden').css("opacity", 1);
    console.log("test");
});
