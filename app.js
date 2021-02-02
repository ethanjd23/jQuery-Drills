let h2Count = 1


$(document).ready(function() {
    $("<input type='button' id='btnSubmit' value='Submit'></input>").appendTo("form")
    $("body").append("<div class='div'></div>")
    $("body").append("<ul class='ul'></ul>");

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
        // $(".div").append("<h2 class = 'h2' id = " + h2Count + ">" + msg + "</h2>"); // creating and inserting text box entry in to an h2 inside of div with incrementing id 
        // $("#" + h2Count).hover(h2Hover, h2NonHover); // changing bg color and border radius on hover for h2 selected
        // h2Count++;

        $(".ul").append("<li class='li'>" + msg + "</li>");
        $(".li").click(liStyler);
        $(".li").dblclick(liRemover);
    })

})

function h2Hover() {
    $(event.target).css({
        "background-color": "navy",
        "border-radius": "25%"
    })
};

function h2NonHover() {
    $(event.target).css({
        "background-color": "transparent",
        "border-radius": "0%"
    })
};

function liStyler() {
    let genColor = Math.floor(Math.random()*16777215).toString(16); 
    $(event.target).css({
        "color": "#" + genColor,
    })
};

function liRemover() {
    $(event.target).remove();
}