
// JavaScript Document
jQuery(document).ready(function() {

    "use strict";

    jQuery(".contact-form").submit(function(e) {
        e.preventDefault();
        var name = jQuery(".name");
        var email = jQuery(".email");
        var subject = jQuery(".subject");
        var msg = jQuery(".message");
        var flag = false;
        if (name.val() == "") {
            name.closest(".form-control").addClass("error");
            name.focus();
            flag = false;
            return false;
        } else {
            name.closest(".form-control").removeClass("error").addClass("success");
        } if (email.val() == "") {
            email.closest(".form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-control").removeClass("error").addClass("success");
        } if (msg.val() == "") {
            msg.closest(".form-control").addClass("error");
            msg.focus();
            flag = false;
            return false;
        } else {
            msg.closest(".form-control").removeClass("error").addClass("success");
            flag = true;
        }
        var dataString = "name=" + name.val() + "&email=" + email.val() + "&subject=" + subject.val() + "&msg=" + msg.val();
        jQuery(".loading").fadeIn("slow").html("Loading...");
        jQuery.ajax({
            type: "POST",
            data: dataString,
            url: "php/contact.php",
            cache: false,
            success: function (d) {
                jQuery(".form-control").removeClass("success");
             if(d == 'success') // Message Sent? Show the 'Thank You' message and hide the form
 jQuery('.loading').fadeIn('slow').html('<font color="#48af4b">Mail sent Successfully.</font>').delay(3000).fadeOut('slow');

     else
     jQuery('.loading').fadeIn('slow').html('<font color="#ff5607">Mail not sent.</font>').delay(3000).fadeOut('slow');

            }
        });
        return false;
    });
    jQuery("#reset").on('click', function() {
        jQuery(".form-control").removeClass("success").removeClass("error");
    });
    
})



