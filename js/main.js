//==========================================================================================================
// ==>>> Utilizando Biblioteca Ajax
//==========================================================================================================
/*
function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function (response){
            console.log(response);
            //alert(response.logradouro);
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
        }

    })
}*/
//==========================================================================================================
// Utilizando JQuery -mais enxuto/ prático e fácil
//==========================================================================================================

function consultaCep(){
    $(".barro-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function (response){
            console.log(response);
           $("#logradouro").html(response.logradouro);
           $("#bairro").html(response.bairro);
           $("#localidade").html(response.localidade);
           $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barro-progresso").hide();
        }
    })
}

// Esconde um elemento de uma classe inteira - no caso excluiu um elemento div de uma classe inteira.
$(function(){
$(".cep").hide();
$(".barro-progresso").hide();
});