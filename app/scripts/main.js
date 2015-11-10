
$(function() {
    $('#ex1').galereya({
        wave: false,
        modifier: 'ex1',
        spacing: 5,
        load: function(next) {
            $.getJSON('images.json', function(data) {
                next(data);
            });
        }
    });
});
