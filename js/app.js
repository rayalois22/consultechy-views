$(document).ready(function(){
    // let domain = 'http://consultechy.test';
    let domain = 'https://consultechy.com';
    let form1 = $('#signup-form');
    let notificationBox = $('.notification')

    form1.submit(function(event){
        event.preventDefault();

        let data = {
            'first_name'        : $('input[name=first_name]').val(),
            'other_names'       : $('input[name=other_names]').val(),
            'username'          : $('input[name=username]').val(),
            'dob'               : $('input[name=dob]').val(),
            'email'             : $('input[name=email]').val(),
            'phone'             : $('input[name=phone]').val() + ' 00:00:00',
            'password'          : $('input[name=password]').val(),
            'password0'         : $('input[name=password0]').val()
        }

        $.post(
            domain + '/api/subscriber/create',
            // domain + '/api/user/read-all',
            data,
            function(data, status){
                if(status == 'success'){
                    let response = JSON.parse(data);
                    response = response.response;
                    
                    if ( response.error ){
                        let message = response.message;

                        if (message.constructor === Array){
                            let lines = '';
                            for(let line in message){
                                lines += '<p>' + line + '</p>';
                            }
                            message = lines;
                        }                          
                        
                        notificationBox.addClass('alert alert-error');
                        notificationBox.html(message);
                    } else {
                        // display response
                        form1.html('');
                        notificationBox.addClass('alert alert-success');
                        notificationBox.html(response.message);
                    }
                }
            }
        );

    });
});