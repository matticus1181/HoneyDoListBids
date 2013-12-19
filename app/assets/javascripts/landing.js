$(function () {
    $('form').on('submit', function(evt) {
        evt.preventDefault();

        $('.error').hide();
        $('#form_wrapper').hide();
        $('#sending').fadeIn();

        $.ajax({
            url: 'landing/submit',
            type: 'POST',
            cache: false,
            data: $('form').serialize(),
            success: function(data) {
                switch(data) {
                    case 'invalid':
                        $('#sending').hide();
                        $('#form_wrapper').fadeIn();
                        $('.error').show();
                        $('.error').html('We\'re sorry, the email you entered is invalid');
                        break;
                    case 'notexists':
                        $('#sending').hide();
                        $('#form_wrapper').fadeIn();
                        $('.error').show();
                        $('.error').html('We\'re sorry, the email you entered is invalid');
                        break;
                    case 'alreadysubscribed':
                        $('#sending').hide();
                        $('#form_wrapper').fadeIn();
                        $('.error').show();
                        $('.error').html('We\'re sorry, you have already subscribed to receive alerts');
                        break;
                    default:
                        $('#sending').hide();
                        $('#email_box').html('<h3>Success!</h3>We\'ll notify you when we have updates.');
                        break;
                }

            }
        });

    });

    $('#ourCommitment').hover(function() {
        $('#our_commitment').show();
    }, function() {
        $('#our_commitment').hide();
    });
    $('#howItWorks').hover(function() {
       $('#how_it_works').show();
    }, function() {
        $('#how_it_works').hide();
    });

    $('#our_commitment').hover(function() {
        $('#our_commitment').show();
    }, function() {
        $('#our_commitment').hide();
    });
    $('#how_it_works').hover(function() {
        $('#how_it_works').show();
    }, function() {
        $('#how_it_works').hide();
    });
});