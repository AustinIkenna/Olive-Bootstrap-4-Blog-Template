
var abrev = function(options) {

    options = $.extend({
        length: 250,
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