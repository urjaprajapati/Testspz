$(document).ready(function(){
    $('[data-toggle=tooltip]').tooltip();

    // indexchange
    $(window).resize(function() {
        setTabindex()
    });

    function setTabindex() {
        $('#fname').attr('tabindex', window.innerWidth <=767 ? '1' : '1');
        $('#lname').attr('tabindex', window.innerWidth <=767 ? '3' : '2');
        $('#bemail').attr('tabindex', window.innerWidth <=767? '2' : '3');
        $('#company').attr('tabindex', window.innerWidth <=767 ? '4' : '4');
        $('#countrylist ').attr('tabindex', window.innerWidth <=767 ? '5' : '5');
    }

    // video
    var url = $("#videolink").attr('src');
    $("#exampleModal").on('hide.bs.modal', function() {
        $("#videolink").attr('src', '');
    }).on('show.bs.modal', function() {
        $("#videolink").attr('src', url);
    });

    $('.nav-item').click(function() {
        $('.nav-item.active').removeClass("active");
        $(this).addClass("active");
    });

    
    /**
     * Form Validation
     */

    $(".inputs").focusin(function () {
        $(this).parent().find(".labels").addClass("label-up");
        $(this).addClass("borders");
    }) .focusout(function () {
        if ($(this).val() !== '') {
            $(this).parent().find(".labels").addClass("label-up");
                
            $(this).addClass("borders");
        } else {
            $(this).parent().find(".labels").removeClass("label-up");
            $(this).removeClass("borders");
        }
    })

    var valid=$("#form").validate({        
            onfocusout:function(e){
                valid.resetForm();
                this.element(e);   
            },
            highlight:function(e){
                $(e).parent().addClass("error");
            },
            unhighlight:function(e){
                $(e).parent().removeClass("error");
            },
            rules:
            {
                fname:{
                    required:true,
                },
                lname:{
                    required:true,
                },
                email:{
                    required:true,
                    email:true
                },
                company:{
                    required:true
                },
                country:{
                    required:true
                }
            },
            messages:{
                fname:{
                    required:"This field can\'t be empty. Please fill it in.",
                },
                lname:{
                    required:"This field can\'t be empty. Please fill it in.",
                },
                email:{
                    required:"This field can\'t be empty. Please fill it in.",
                    email:"Please enter the valid email."
                },
                company:{
                    required:"This field can\'t be empty. Please fill it in.",
                },
                country:{
                    required:"This field can\'t be empty. Please fill it in.",
                }
            },
            submitHandler: function(form) {
                form.submit();
                window.location.href="thankmsg.html";
            },
            showErrors: function (errorMap,errorList) {
                if (errorList.length) {
                    this.errorList = [errorList.shift()];
                }
                this.defaultShowErrors();
            }
        }
    );
});