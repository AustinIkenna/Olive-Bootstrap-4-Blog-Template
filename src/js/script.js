
// This function shortens post text to 150 characters
var shortenText = function(options) {

    options = $.extend({
        length: 150,
        cont: ' ...',
    }, options);

    $('.post-text').each(function() {

        var $post = $(this);
        var abrev = $post.text();
        var shorten = abrev.substring(0, options.length) + options.cont;
        $post.data(shorten);
        $post.data(abrev);
        $post.text(shorten);
    });
};

$(function() {
	shortenText();
});



// This function detects and adds and the css styling of the current class to an active page
$(function(){
  $('.active').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    }
  });
});  



// Mobile menu displays when the categories link is clicked
$(function(){

  var navButton = $('.mobile-menu-button')

  navButton.on('click', function(e) {
    e.preventDefault();
    // toggle nav state
    $('body').toggleClass('nav-visible')
  });
}); 

// Mobile menu is closed when the X is clicked
$(function(){

  $('.close-menu').on('click', function(e){
    $('body').toggleClass('nav-visible')
  });

});
