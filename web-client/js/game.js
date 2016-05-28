// values
var isMobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ? true : false;

var tabs = $('#tabs');

tabs.children('div:not(:first)').hide();
tabs.children('div:first').css( 'display', 'flex' );
tabs.children('#tab-control').children('li').click(function ( event ) {
    if ( event.target.tagName == 'SPAN' ) {
        var target = $( event.target ).parent();
    } else {
        var target = $( event.target );
    }
    tabs.children('div').hide();
    tabs.children('#tab-control').children('li').removeClass( 'tab-active' );
    tabs.children( '#' + target.attr('href') ).css( 'display', 'flex' );
    target.addClass( 'tab-active' );
    if ( target.attr('href') == 'tab-tech' ) {
        tab.tech.drawLines();
    }
});

tab.overview.load();
tab.base.load();
tab.tech.load();
tab.profile.load();
tab.settings.load();





