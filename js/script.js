$(document).ready(function(){

    $('#campo-telefone').mask('(00) 00000-0000',{
        placeholder: "(00) 00000-0000"
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: "000.000.000-00",
        reverse: true
    });

    $('#cep').mask('00000-000',{
        placeholder: "00000-000",
    });


   $('form').validate({
        rules: {
            nome :{
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            enderecoCompleto: {
                required: true
            },
            cpf: {
                required: false
            }
        },
        messages: {
            nome: "Por favor, insira o nome completo",
            email: "Por favor, insira um e-mail válido",
            telefone: "Por favor, insira o telefone",
            cpf: "Por favor, insira um CPF",
            enderecoCompleto: "Por favor, insira o endereço",
            cep: "Por favor, insira o CEP"
        },
        
        submitHandler: function(form){
            console.log(form)
        },

        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }

   })

})