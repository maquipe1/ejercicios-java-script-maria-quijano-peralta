let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"]


$(document).ready(function(){
    $("#anuncio").hide()
    .text("¡CLICK!para cambiar de color")
    .width("500px")
    .height("500px")
    .fadeIn(3000)
}); 

$("div").on("click", function () {
    let color = colores[Math.floor(Math.random()*colores.length)];
    $("div").css("background-color", color); 

})
