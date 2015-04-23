"use strict";

$(document).ready(function() {

    function handleError(message) {
        $("#errorMessage").text(message);
        console.log(message);
    }
    
    function sendAjax(action, data) {
        $.ajax({
            cache: false,
            type: "POST",
            url: action,
            data: data,
            dataType: "json",
            success: function(result, status, xhr) {
               // $("#domoMessage").animate({width:'hide'},350);
                window.location = result.redirect;
            },
            error: function(xhr, status, error) {
                var messageObj = JSON.parse(xhr.responseText);
            
                handleError(messageObj.error);
            }
        });
    }
    
    $("#makeTileSubmit").on("click", function(e) {
        e.preventDefault();
    
        if($("#tileUrl").val() == '' || $("#tileTags").val() == ' ') {
            handleError("All fields are required");
            return false;
        }
        console.log($("#tileForm").serialize());
        sendAjax($("#tileForm").attr("action"), $("#tileForm").serialize());
        
        return false;
    });
});