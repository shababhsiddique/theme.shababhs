var $svg = $('svg').drawsvg({

    callback: function () {

         $("#svg3722").load("assets/sign-fill.svg",function(){
              console.log("SVG fetched?");
//              $("#colored-sign").addClass("opa1");
//              $("#colored-sign").removeClass("opa1");
//              $("#colored-sign").addClass("opa1");
              
              $("#colored-sign").delay(200)
                    .queue(function (next) {
                        $(this).addClass("opa1");
                        $(this).removeClass("opa1");
                        next();
                        
                        $(this).addClass("opa1");
                        $(this).addClass("hoverstrokefix");
                    });
         });

    }
});

function animate() {
    $svg.drawsvg('animate');
}

animate();



$(window).on('load', function () {
    console.log("window load occured!");

    $('.preloaded-hidden').css("opacity", 1);
    console.log("test");


});


var wrapperMenu = document.querySelector('.navbar-toggler');

wrapperMenu.addEventListener('click', function () {
    wrapperMenu.classList.toggle('open');
});