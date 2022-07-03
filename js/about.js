function setButtonDisplay() {
    var hidePrev = $('#citys div:first').hasClass('active'),
        hideNext = $('#citys div:last').hasClass('active');

    $('#back')[hidePrev ? 'hide' : 'show']();
    $('#next')[hideNext ? 'hide' : 'show']();
}
setButtonDisplay();

$('#next').click(function() {
    var $current = $('.city.active');
    if ($(".city").next().length != 0) {
        $('.city').removeClass('active');
        $current.next().addClass('active');
    }
    setButtonDisplay();
});

$('#back').click(function() {
    var $current = $('.city.active');
    if ($(".city").prev().length != 0) {
        $('.city').removeClass('active');
        $current.prev().addClass('active');
    }
    setButtonDisplay();
});