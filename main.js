$(document).ready(function(){
    $("#carousel-images").slick({
        autoplay: true
        //arrows: false
    });

    $(".menu-hamburguer").click(function(){
        $("nav").slideToggle();
    })

    /*
    COMO UTILIZAR O PLUGIN 'Mask' PARA VALIDAR PLACA DE CARRO:
    $("#telefone").mask("SSS-0000", {
        placeholder: 'ABC-1234'
    }) 

    COMO UTILIZAR O PLUGIN 'Mask' PARA VALIDAR UMA DATA:
    $("#telefone").mask("00/00/0000", {
        placeholder: '__/__/____'
    }) 
    */
    
    $("#telefone").mask("(00) 00000-0000");


    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira o seu nome.",
            email: "Por favor, insira o seu E-mail.",
            telefone: "Por favor, insira o seu telefone.",
            veiculoDeInteresse: "Por favor, insira o carro de seu interesse.",
            mensagem: "Por favor, digite sua mensagem."
        },
        submitHandler: function(form){
            console.log(form);

        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert("Existem campos incorretos.")
            } else{}
        }
    })

    $(".lista-veiculos button").click(function(){
        const destino = $("#contato");

        let carroDesejado = $(this).parent().find("h3").text();
        
        $("#veiculo-interesse").val(carroDesejado);

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});