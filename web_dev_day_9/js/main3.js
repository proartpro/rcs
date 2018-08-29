$('input').keyup(function() {
    if ($('#input1').val() == $('#input2').val()) {
        $('p').html('yay!')
    } else {
        $('p').html('oh no...');
    }

 });
