function validate(firstName, lastName, email, password) {
    $('.error-message').addClass('hidden');
    $('input').removeClass('bg-image');
    if (firstName == '') {
        $('.first-name').removeClass('hidden');
        $('#first-name').addClass('bg-image');
    }
    if (lastName == '') {
        $('.last-name').removeClass('hidden');
        $('#last-name').addClass('bg-image');
    }
    if (!(email.includes('@') && email.includes('.'))) {
        if (email == '') {
            $('.email-alt').removeClass('hidden');
            $('#user-email').addClass('bg-image');
        } else {
            $('.email').removeClass('hidden');
            $('#user-email').addClass('bg-image');
        }
    }

    if (password == '') {
        $('.password').removeClass('hidden');
        $('#user-password').addClass('bg-image');
    }

}

function waitForSubmit() {
    $('form').submit(e => {
        e.preventDefault();
        let firstName = $('#first-name').val();
        let lastName = $('#last-name').val();
        let email = $('#user-email').val();
        let password = $('#user-password').val();
        validate(firstName, lastName, email, password);
    })
}

$(waitForSubmit);