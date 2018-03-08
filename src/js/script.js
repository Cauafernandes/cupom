console.log('Javascript Iniciado.');

//---------------------------------------------
// SLICK DOS FILTROS

$('.filtroslk').slick({
    arrows: true,
    dots:false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 3,
    centerMode: false,
    variableWidth: true,
    cssEase: 'linear',
    prevArrow: $('.prev'),
    nextArrow: $('.next')
});

//---------------------------------------------
// JSON CUPONS + FILTROS

$.get({
    url: "cupons.json",
    dataType: "json",
    success:function(data) {
        var list = $(".cupons-pR");
        $.each(data, function(idx, obj) {
            $("<li class='cupom-pR' data-type=" + obj.type + "><h2>" + obj.titulo + "</h2><figure><img src='" + obj.image + "'/></figure><p>" + obj.desc + "</p><button class='vroft'>Ver Oferta</button></li>").appendTo(list);
        });

        $('.filtro-es[data-action]').on("click",data, function(idx, obj){
            var type = $(this).prop('id');
            $('#rmvflt').show();
            console.log("ESSE CLICK:" ,data)

            if (this.id == type) {
                $('.fltnt').hide();
                $('#vmr').parent().hide();
                $(".cupom-pR").hide();
                $(".cupom-pR[data-type='" + type + "']").show();
                $(".cupom-pR:nth-child(3n+1)[data-type='" + type + "']").css("clear", "none");

                if($("li.cupom-pR").is(":visible") == false){
                    $('.fltnt').show();
                    $('.fltnt').html('Nenhum cupom foi encontrado.');
                }
                
            } else{
                $("li").show();
                console.log('ERROR');
            }
        });

        $('#rmvflt').on("click", function(){
                $('.fltnt').hide();
                $('#vmr').parent().show();
                $(".cupom-pR").show();
                $(".cupom-pR:nth-child(1n+7)").hide();
                $(".cupom-pR:nth-child(3n+1)").css("clear", "both");
                $('#rmvflt').hide();
        });
        cupomoft();
    }
});


// BACKUP
// $.get({
//     url: "cupons.json",
//     dataType: "json",
//     success:function(data) {
//         var list = $(".cupons-pR");
//         $.each(data, function(idx, obj) {
//             $("<li class='cupom-pR' data-type=" + obj.type + "><h2>" + obj.titulo + "</h2><figure><img src='" + obj.image + "'/></figure><p>" + obj.desc + "</p><button class='vroft'>Ver Oferta</button></li>").appendTo(list);
//         });

//         $('.filtro-es[data-action]').on("click",data, function(idx, obj){
//             var type = $(this).prop('id');
//             $('#rmvflt').show();
//             console.log("ESSE CLICK:" ,data)

//             if (this.id == type) {
//                 $('.fltnt').hide();
//                 $('#vmr').parent().hide();
//                 $(".cupom-pR").hide();
//                 $(".cupom-pR[data-type='" + type + "']").show();
//                 $(".cupom-pR:nth-child(3n+1)").css("clear", "none");

//                 if($("li.cupom-pR").is(":visible") == false){
//                     $('.fltnt').show();
//                     $('.fltnt').html('Nenhum cupom foi encontrado.');
//                 }
//             } else{
//                 $("li").show();
//                 console.log('ERROR');
//             }
//         });

//         $('#rmvflt').on("click", function(){
//                 $('.fltnt').hide();
//                 $('#vmr').parent().show();
//                 $(".cupom-pR").show();
//                 $(".cupom-pR:nth-child(1n+7)").hide();
//                 $(".cupom-pR:nth-child(3n+1)").css("clear", "both");
//                 $('#rmvflt').hide();
//         });
//         cupomoft();
//     }
// });

//---------------------------------------------
// VERIFICAÇÃO BOTÃO CUPONS

$(document).ready(function() {
    if ($(".cupom-pR").length <= 6){
        $('#vmr').hide();
    } else {
        $('#vmr').show();
    }
});

//---------------------------------------------
// MOSTRAR OS CUPONS

$(document).ready(function() {
    $('#vmr').on('click', function(){
        $('.cupom-pR:nth-child(1n+7)').css('display', 'table');
        $(this).parent().hide();
    });
});

//---------------------------------------------
// JANELA DO FACEBOOK

var cupomoft = function(){
    $('.vroft').on('click', function(){
        var timer = setInterval(function(){
            FB.getLoginStatus(function(response){
                if($('#fblgn').hasClass('fblgn-active') && response.authResponse || response.authResponse){
                    window.location.replace("http://www.graodegente.com.br/?utm_source=cupomgraodegente");
                    clearInterval(timer);
                } else {
                    $('.fblgn').addClass('fblgn-active');
                    $('.closelgn').on('click',function(){
                        $('.fblgn').removeClass('fblgn-active');
                        clearInterval(timer);
                    });
                }
            });
        }, 500);
    });
}

// FACEBOOK SCRIPT

FB.init({
    appId: '504091833259869',
    xfbml: true,
    version: 'v2.5'
  });

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/pt_BR/all.js#xfbml=1&version=v2.5&appId=504091833259869&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
        console.log(response)
    });
}

// PEGANDO USUÁRIO NO LOAD DA PAGE
FB.getLoginStatus(function(response){
    console.log('Verificando conexão');
    if (response.authResponse) {
        FB.api('/me', function(response) {
            console.log('Bem vindo, ' + response.name + '.')
        }); 
    } else {
        console.log('Não houve uma conexão.')
        return;
    }
});

//---------------------------------------------


