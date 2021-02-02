let h2Count = 1


$(document).ready(function() {
    $("<input type='button' id='btnSubmit' value='Submit'></input>").appendTo("form")
    $("body").append("<div class='div'></div>")

    $("#btnSubmit").attr("disabled", true);
    $("#text-box").keyup (function() {
        if($(this).val() !== "") {
            $("#btnSubmit").attr("disabled", false);
        } else {
            $("#btnSubmit").attr("disabled", true);
        }
    })

    $('#btnSubmit').click(function() {
        let msg = $("#text-box").val();
        $(".div").append("<h2 class = 'h2' id = " + h2Count + ">" + msg + "</h2>");
        $("#" + h2Count).hover(h2Hover);
        h2Count++;
    })

    
})

function h2Hover() {
    $(":target").css({
        "background-color": "navy",
        "border-radius": "25%"
    })
}

function h2NonHover() {
    $(":target").css({
        "background-color": "transparent",
        "border-radius": "0%"
    })
}