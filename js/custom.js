$(function() {
  var headerHeight = $('header').height();
  $('.find ').css('top', headerHeight + 50)
});



$(function() {
    $(document).on("click", function(e) {
        if ($(e.target).is(".sel") === false) {
            $(".sel").removeClass("active");
        }
    });
});

$('.load-btn').click(function() {
    $('.hover-list').toggleClass('give-style');
});

$(document).ready(function(){
    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > 970) {
    //         $('#scroll').fadeIn();
    //     } else {
    //         $('#scroll').fadeOut();
    //     }
    // });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});



//account-edit----------------------------
function addDisabled() {
    $('.account-edit').removeClass('account-view');
    $('.account-edit input').attr('disabled', 'disabled');
    $('.account-edit select').attr('disabled', 'disabled');
    $('.account-edit .common-btn').addClass('d-none');
    $('.account-edit .edit-btn').removeClass('d-none')
}
function removeDisabled() {
    $('.account-edit').addClass('account-view');
    $('.account-edit input').removeAttr('disabled', 'disabled');
    $('.account-edit select').removeAttr('disabled', 'disabled');
    $('.account-edit .common-btn').removeClass('d-none');
    $('.account-edit .edit-btn').addClass('d-none')
}
//add-product-----------------------------------------------------------------
function addDegreee() {
    $('.request-supplier .step-two .add-product:last').clone().appendTo('.request-supplier .step-two').find("input[type='text']").val("");

    $('.request-supplier .step-two .add-product:not(:last)').find('.add-one').addClass('display-none');

    if($('.add-product')){
        $('.add-product:not(:first)').find('.close-degree').removeClass('d-none').show();
        // $('.add-product:last').find('.close-degree').hide();
        // $('.add-product:not(:last)').find('.add-one').addClass('opacity').show();

    }
}
function removeDegreee(element) {
    $(element).parent().remove();
    if($('.add-product')){
        $('.add-product:last').find('.add-one').removeClass('display-none').show();
    }
}
//upload-----------------------------------------------------------------
$(document).ready(function() {

    // get the name of uploaded file
    $('input[type="file"]').change(function(){
        var value = $("input[type='file']").val();
        if(value != ""){
            $('.js-value').text(value);
        }else {
            $('.js-value').text("upload your CV");
        }
    });
    // get the name of uploaded file
    $('.steps input[type="file"]').change(function(){
        var value = $(".steps input[type='file']").val();
        if(value != ""){
            $('.steps .filupp .js-value').text(value);
        }else {
            $('.steps .filupp .js-value').text(" ");
        }
    });
    // get the name of uploaded file
    $('.account-edit input[type="file"]').change(function(){
        var value = $(".account-edit input[type='file']").val();
        if(value != ""){
            $('.account-edit .filupp .js-value').text(value);
        }else {
            $('.account-edit .filupp .js-value').text("Upload Your Photo");
        }
    });

});

//steps-----------------------------------------------------------------
$('.steps .move-btn[type="button"]').on('click', function () {
    $(this).closest('.steps').hide();
    $(this).closest('.steps').next().show();
    $('.steps-btns .active').next().addClass('active')
});

$('.steps-btns button').on('click', function () {
    var target = $(this).attr('data-target');
    $(target).siblings('.steps').hide();
    $(target).show()
});
//-----------------------------

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//-----------------------------
// function openNav() {
//     document.getElementById('ourNav').css(wi)
// }
// $(function(){
//
// })

$('button.navbar-toggler').on('click',function(){
   $('#ourNav').css({'width' : '100%', 'left' : '0'})
});
$('.list-nav a.close-menu').on('click', function(){
    $('#ourNav').css({'width':'0' , 'left':'-100%'})
});

/*
*carousel bootstrap
 */
$('.carousel').carousel({
    interval:false,
});

/*
*package open
 */
$('.package-booking .btn').on('click',function(){
    var orginalHeight =    $(this).parent().siblings('.package-body').children('ul').height(),
        packageBody = $(this).parent().siblings('.package-body');
    packageBody.toggleClass('package-opens');

});

$(".carousel").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll:"vertical"

});
/*

* Countries And Cities Ajax

* */

$(function () {

    var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');





    $(window).on('load', function () {



        if ($('#country').length) {



            if($('#country').val() !== null){







                var Cities = $.ajax({



                    url: url + '/cities',



                    method: 'get',



                    async: false,



                    global: false,



                    data: {_token: CSRF_TOKEN, country: $('#country').val()},



                    dataType: 'JSON',



                    success: function (data) {



                        return data;



                    }



                }).responseJSON;



                // $('#city').append('<option hidden="hidden">Select City</option>');



                if (Object.keys(Cities).length > 0) {



                    $.map(Cities, function (region, id) {



                        $('#city').append("<option value='" + id + "'>" + region + "</option>");



                    });



                }

            }



        }



    });



    $('#country').change(function () {



        $('#city').empty().attr('disabled', 'disabled');



        var Cities = $.ajax({



            url: url + '/cities',



            method: 'get',



            async: false,



            global: false,



            data: {_token: CSRF_TOKEN, country: $(this).val()},



            dataType: 'JSON',



            success: function (data) {



                return data;



            }



        }).responseJSON;



        $('#city').append('<option hidden="hidden">Select City</option>');



        if (Object.keys(Cities).length > 0) {



            $('#city').removeAttr('disabled');



            $.map(Cities, function (region, id) {



                $('#city').append("<option value='" + id + "'>" + region + "</option>");



            });



        }



    });

});