
// JavaScript Document
jQuery(document).ready(function() {

    "use strict";

    jQuery(".quick-contact-form").submit(function(e) {
        e.preventDefault();
        var name = jQuery(".bname");
        var email = jQuery(".bemail");
        var msg = jQuery(".bmessage");
        var flag = false;
        if (name.val() == "") {
            name.closest(".bottom-form-control").addClass("error");
            name.focus();
            flag = false;
            return false;
        } else {
            name.closest(".bottom-form-control").removeClass("error").addClass("success");
        } if (email.val() == "") {
            email.closest(".bottom-form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".bottom-form-control").removeClass("error").addClass("success");
        } if (msg.val() == "") {
            msg.closest(".bottom-form-control").addClass("error");
            msg.focus();
            flag = false;
            return false;
        } else {
            msg.closest(".bottom-form-control").removeClass("error").addClass("success");
            flag = true;
        }
        var dataString = "name=" + name.val() + "&email=" + email.val() + "&msg=" + msg.val();
        jQuery(".loading").fadeIn("slow").html("Loading...");
        jQuery.ajax({
            type: "POST",
            data: dataString,
            url: "php/quick-contact.php",
            cache: false,
            success: function (d) {
                jQuery(".bottom-form-control").removeClass("success");
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



