$(function () {
    $('form').on('submit', function(evt) {
        evt.preventDefault();

        $.ajax({
            url: 'landing/submit',
            type: 'POST',
            cache: false,

            data: $('form').serialize(),
            success: function(data) {
                $('#email_form').html('<h3>Success!</h3>We\'ll notify you when we have updates.');
            }
        });

        $('#email_form').html('<h3>Subscribing you to alerts...</h3>');
    });

});