//Seccion contacto
var flagcont=0;
$(".cont").click(function(event) {
  if (flagcont == 0) {
    $(".contacto").fadeIn(400);
    flagcont++;
  }
  else {
    $(".contacto").fadeOut(400);
    flagcont--;
  }
  
});
$('.contenviar').click(function(event){
  var usuario = $('.inpnombre').val();
  if($('.inpnombre').val() == ''){
    swal(
      'Advertencia',
        'Falata ingresar tu nombre',
        'warning'
    )
  }else if($('.inpcomentario').val() == ''){
    swal(
      'Advertencia',
        'Falata ingresar tu comentario',
        'warning'
    )
  }else{
    swal(
      'Gracias ' + usuario,
        'Se a enviado tu comentario correctamente',
        'success'
    )
    $('.inpnombre').val('');
    $('.inpcomentario').val('');
  }
})
//Seccion menu
$(".logo").click(function(event) {
    $(".welcome").fadeIn(400);
    $(".contenido").hide();
    $(".introduccion").hide();
    $(".ejemplos").hide();
    $(".ejercicios").hide();
    $(".juegos").hide();
    $(".evaluacion").hide();
    $(".cont").css('background', '#ffffff');
    $(".imgcont").attr('src', 'img/question-mark (1).png');
    $("#menuint").css('border-bottom', 'none');
    $("#menucon").css('border-bottom', 'none');
    $("#menuejem").css('border-bottom', 'none');
    $("#menuejer").css('border-bottom', 'none');
    $("#menueval").css('border-bottom', 'none');
    $("#menujueg").css('border-bottom', 'none');
});
$(".btnwelcome").click(function(event) {
   $(".welcome").hide();
    $(".contenido").hide();
    $(".ejemplos").hide();
    $(".ejercicios").hide();
    $(".juegos").hide();
    $(".evaluacion").hide();
    $(".introduccion").fadeIn(400);
    $(".cont").css('background', '#0077BB');
    $(".imgcont").attr('src', 'img/question-mark.png');
    $("#menuint").css('border-bottom', '2px solid white');
    $("#menucon").css('border-bottom', 'none');
    $("#menuejem").css('border-bottom', 'none');
    $("#menuejer").css('border-bottom', 'none');
    $("#menueval").css('border-bottom', 'none');
    $("#menujueg").css('border-bottom', 'none');
});
$("#menuint").click(function(event) {
    $(".welcome").hide();
    $(".contenido").hide();
    $(".ejemplos").hide();
    $(".ejercicios").hide();
    $(".juegos").hide();
    $(".evaluacion").hide();
    $(".introduccion").fadeIn(400);
    $(".cont").css('background', '#0077BB');
    $(".imgcont").attr('src', 'img/question-mark.png');
    $("#menuint").css('border-bottom', '2px solid white');
    $("#menucon").css('border-bottom', 'none');
    $("#menuejem").css('border-bottom', 'none');
    $("#menuejer").css('border-bottom', 'none');
    $("#menueval").css('border-bottom', 'none');
    $("#menujueg").css('border-bottom', 'none');
});
$("#menucon").click(function(event) {
    $(".welcome").hide();
    $(".contenido").fadeIn(400);
    $(".introduccion").hide();
    $(".ejemplos").hide();
    $(".ejercicios").hide();
    $(".juegos").hide();
    $(".evaluacion").hide();
    $(".cont").css('background', '#0077BB');
    $(".imgcont").attr('src', 'img/question-mark.png');
    $("#menuint").css('border-bottom', 'none');
    $("#menucon").css('border-bottom', '2px solid white');
    $("#menuejem").css('border-bottom', 'none');
    $("#menuejer").css('border-bottom', 'none');
    $("#menueval").css('border-bottom', 'none');
    $("#menujueg").css('border-bottom', 'none');
});
$("#menuejem").click(function(event) {
    $(".welcome").hide();
    $(".contenido").hide();
    $(".introduccion").hide();
    $(".ejercicios").hide();
    $(".juegos").hide();
    $(".evaluacion").hide();
    $(".ejemplos").fadeIn(400);
    $(".cont").css('background', '#0077BB');
    $(".imgcont").attr('src', 'img/question-mark.png');
    $("#menuint").css('border-bottom', 'none');
    $("#menucon").css('border-bottom', 'none');
    $("#menuejem").css('border-bottom', '2px solid white');
    $("#menuejer").css('border-bottom', 'none');
    $("#menueval").css('border-bottom', 'none');
    $("#menujueg").css('border-bottom', 'none');
});
$("#menuejer").click(function(event) {
    $(".welcome").hide();
    $(".contenido").hide();
    $(".introduccion").hide();
    $(".ejercicios").fadeIn(400);
    $(".juegos").hide();
    $(".evaluacion").hide();
    $(".ejemplos").hide();
    $(".cont").css('background', '#0077BB');
    $(".imgcont").attr('src', 'img/question-mark.png');
    $("#menuint").css('border-bottom', 'none');
    $("#menucon").css('border-bottom', 'none');
    $("#menuejem").css('border-bottom', 'none');
    $("#menuejer").css('border-bottom', '2px solid white');
    $("#menueval").css('border-bottom', 'none');
    $("#menujueg").css('border-bottom', 'none');
});
$("#menujueg").click(function(event) {
    $(".welcome").hide();
    $(".contenido").hide();
    $(".introduccion").hide();
    $(".ejercicios").hide();
    $(".juegos").fadeIn(400);
    $(".evaluacion").hide();
    $(".ejemplos").hide();
    $(".cont").css('background', '#0077BB');
    $(".imgcont").attr('src', 'img/question-mark.png');
    $("#menuint").css('border-bottom', 'none');
    $("#menucon").css('border-bottom', 'none');
    $("#menuejem").css('border-bottom', 'none');
    $("#menuejer").css('border-bottom', 'none');
    $("#menueval").css('border-bottom', 'none');
    $("#menujueg").css('border-bottom', '2px solid white');
});
$("#menueval").click(function(event) {
    $(".welcome").hide();
    $(".contenido").hide();
    $(".introduccion").hide();
    $(".ejercicios").hide();
    $(".juegos").hide();
    $(".evaluacion").fadeIn();
    $(".ejemplos").hide();
    $(".cont").css('background', '#0077BB');
    $(".imgcont").attr('src', 'img/question-mark.png');
    $("#menuint").css('border-bottom', 'none');
    $("#menucon").css('border-bottom', 'none');
    $("#menuejem").css('border-bottom', 'none');
    $("#menuejer").css('border-bottom', 'none');
    $("#menueval").css('border-bottom', '2px solid white');
    $("#menujueg").css('border-bottom', 'none');
});