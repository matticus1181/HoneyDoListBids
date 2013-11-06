$(function () {
    $('form').on('submit', function(evt) {
        evt.preventDefault();

        $.ajax({
            url: 'landing/submit',
            type: 'POST',
            cache: false,

            data: $('form').serialize(),
            success: function(data) {
                alert(data);
            }
        });
    });

});