//========================================================
// MOBILE
$('nav.mobile').click(function(){
    var listaMenu = $('nav.mobile ul');
    if(listaMenu.is(':hidden') == true){
        var icone = $('.botao-menu-mobile').find('i');
        icone.removeClass('fa-bars');
        icone.addClass('fa-times');
        listaMenu.slideToggle();
    }
    else{
        var icone = $('.botao-menu-mobile').find('i');
        icone.removeClass('fa-times');
        icone.addClass('fa-bars');
        listaMenu.slideToggle();
    }
})

//========================================================
// LIGHTBOX
lightbox.option({
    'resizeDuration': 150,
    'wrapAround': true,
    'albumLabel': "Imagem %1 of %2",
    'disableScrolling': true,
    'fitImagesInViewport': true,
    'positionFromTop': 110,

})