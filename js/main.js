$(document).ready(function(){
    $("#form1").submit(function(event){
        event.preventDefault();

        let $form1= $(this);
        var $first_name = $('first_name');
        var $other_name= $('other_name');
        var $dob = $('dob');
        var $username= $('username');
        var $email = $('email');
        var $password = $('password');

    });
    // $(function(){
    //     var $form1= $('form1');
    //     var $first_name = $('first_name');
    //     var $other_name= $('other_name');
    //     var $dob = $('dob');
    //     var $username= $('username');
    //     var $email = $('email');
    //     var $password = $('password');
    
    // });
    
    $('register').on('click',function(){
        alert('You clicked me!!');
        var form1 = {
            first_name: $first_name.val(),
            other_name: $other_name.val(),
            dob: $dob.val(),
            username: $username.val(),
            email: $email.val(),
            password: $password.val(),
            
        };
        $.ajax({
            type: 'POST',
            url: 'https://consultechy.com/api/admin/create',
            data: form1,
            success: function(newform1){
                $form1.append()
            },
            error: function(){
                alert('error creating an account')
            }
        });
    });
});