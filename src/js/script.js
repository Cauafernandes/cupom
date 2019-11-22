console.log('Javascript Iniciado.');

//---------------------------------------------
// VERIFICAÇÃO BOTÃO CUPONS

$(document).ready(function() {
    var cupoms;
    var filters = $(".filtros--list");
    var list = $(".cupons--list");

    $.get({
        url: "cupons.json",
        dataType: "json",
        success: function(data) {
            cupoms = data;
            Cupom.Loaders.loadFilters();
            Cupom.Loaders.loadDefaultCupom();
        },
        error: function(error) {
            $('#cupons--messages').show();
            $('#cupons--messages-error').html('Não foi possível carregar os cupons.');
            console.log('ERROR - ', error);
        }
    });

    var Cupom = Cupom || {};
    Cupom.Loaders = Cupom.Loaders || (function () {
        return {
            loadDefaultCupom: function () {
                $('.cupons--list').empty();
                $.each(cupoms, function(idx, obj) {
                    $("<li class='cupons--cupom' data-type=" + obj.type + "><h2>" + obj.titulo + "</h2><figure><img src='" + obj.image + "'/></figure><p>" + obj.desc + "</p><button class='redeemOffer'>Resgatar</button></li>").appendTo(list);
                });

                if ($(".cupons--cupom").length > 8){
                    $('.moreCupoms').show();
                }
            },
            loadCupomFiltered: function(type, id) {
                $('.cupons--list').empty();
                if (id == type) {
                    cupoms.forEach((obj, idx) => {
                        if ( obj.type == type ) {
                            $("<li class='cupons--cupom' data-type=" + obj.type + "><h2>" + obj.titulo + "</h2><figure><img src='" + obj.image + "'/></figure><p>" + obj.desc + "</p><button class='redeemOffer'>Resgatar</button></li>").appendTo(list);
                        }
                    });
        
                    if($("li.cupons--cupom").is(":visible") == false){
                        $('.fltnt').show();
                        $('.fltnt').html('Nenhum cupom foi encontrado.');
                    }
                } else{
                    Cupom.Loaders.loadDefaultCupom();
                }
            },
            loadFilters: function() {
                $.each(cupoms, function(idx, obj) {
                    var titleFilter = obj.type.replace("-", " ");
                    var filterCount = filters.find('.filtro-es[id="' + obj.type + '"]');
        
                    if ( filterCount.length == 0 ) {
                        $("<li class='filtro-es' id='" + obj.type + "' data-action><p>" + titleFilter + "</p></li>").appendTo(filters);
                    }
                });
            },
            openModal: function() {
                Cupom.Loaders.generateCupom(8);
                $('.modal').fadeIn();
            },
            closeModal: function() {
                $('.modal').fadeOut();
            },
            generateCupom: function(length){
                $('#cupomCode').val();
                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                   result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                $('#cupomCode').val(result);
            }
        }
    })();

    $('#removeFilter').on("click", function(){
        $('.cupons--cupom').remove();
        $('.moreCupoms').show();
        $('.cupons--filter').hide();
        $('.fltnt').hide();

        Cupom.Loaders.loadDefaultCupom();
    });

    $('body').on("click", '.filtro-es[data-action]', cupoms, function(idx, obj){
        var type = $(this).prop('id');
        $('.cupons--filter').show();
        $('.moreCupoms').hide();
        $('.fltnt').hide();

        Cupom.Loaders.loadCupomFiltered(type, this.id);
    });

    $('#seeMore').on('click', function(){
        $('.cupons--cupom:nth-child(1n+7)').css('display', 'table');
        $('.moreCupoms').hide();
    });

    $('body').on('click', '.redeemOffer', function(){
        Cupom.Loaders.openModal();
    });

    $('#close').on('click', function(){
        Cupom.Loaders.closeModal();
    });

    $('#copyToClipboard').click(()=>{
        var cupom = $('#cupomCode');
        cupom.select();
        document.execCommand("Copy");
    });
});

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
        console.log(response);
    });
}

// PEGANDO USUÁRIO NO LOAD DA PAGE
FB.getLoginStatus(function(response){
    console.log('Verificando conexão');
    if (response.authResponse) {
        FB.api('/me', function(response) {
            console.log('Bem vindo, ' + response.name + '.');
        }); 
    } else {
        console.log('Não houve uma conexão.');
        return;
    }
});

//---------------------------------------------