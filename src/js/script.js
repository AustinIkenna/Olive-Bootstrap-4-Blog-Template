
var abrev = function(options) {

    options = $.extend({
        length: 150,
        contn: ' ...',
    }, options);

    $('.post-text').each(function() {

        var $post = $(this);
        var abrev = $post.text();
        var shorten = abrev.substring(0, options.length) + options.contn;
        $post.data('shorttext', shorten);
        $post.data('fulltext', abrev);
        $post.text(shorten);
    });
};

$(function() {
	abrev();
});


// This function detects and adds and the .currentPage css styling to current page
$(function(){
  $('.active').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    }
  });
});  


$(function(){
    $(document).ready(function () {
        $('.dropdown-toggle').dropdown();
    });
});  
