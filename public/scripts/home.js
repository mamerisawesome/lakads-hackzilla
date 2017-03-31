$(document).ready(function(){

    $(".dropdown-button").dropdown({ hover: false });
    $('.modal').modal();

    $("#add-promo-form").on('submit', function(){
        console.log("gege");

        var name = $("#promo-name").val();
        var desc = $("#promo-desc").val();
        var slot = $("#promo-slots").val();
        var address = $("#promo-add").val();
        var longitude = 0;
        var latitude = 0;
        var customer_availed = [];
        var customer_declined = [];
        var customer_sent = [];
        var image = "";
        var keywords =  [];
        var deleted = false;

        console.log(name + " " + desc + " " + slot + " " + address);

        $.post('/', {
            name : name,
            desc : desc,
            slot : slot,
            address : address,
            longitude : longitude,
            latitude : latitude,
            customer_availed : customer_availed,
            customer_declined : customer_declined,
            customer_sent : customer_sent,
            image : image,
            keywords :  keywords,
            deleted : deleted
        });

        $("#promo-name").val("");
        $("#promo-desc").val("");
        $("#promo-slots").val("");
        $("#promo-add").val("");

    });

    $("#edit-promo-form").on('submit', function(){
        console.log("gege");

        var name = $("#promo-name").val();
        var desc = $("#promo-desc").val();
        var slot = $("#promo-slots").val();
        var address = $("#promo-add").val();


        $.post('/', {
            name : name,
            desc : desc,
            slot : slot,
            address : address,
        });

        console.log(name + " " + desc + " " + slot + " " + address);

        $("#promo-name").val("");
        $("#promo-desc").val("");
        $("#promo-slots").val("");
        $("#promo-add").val("");

    });


});
