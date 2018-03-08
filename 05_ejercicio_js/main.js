$("document").ready(function() {
    $("#carrete").hide();
})

$(document).on("click", function() {
    $("h1").hide(); 
    $("div").show(); 
})
$("img").hover( function() {
    $(this).css("width", "350px"); 
}, function() {
    $(this).css("width", "250px")
})