$(function(){
    var v1, v2, op;
//Adiciona numeros
    $("input[name=btn]").click(function(){
        $("#resposta").val($("#resposta").val() + $(this).val());
    })
//Apaga valores
    $("input[name=ce]").click(function(){
        $("#resposta").val("");
    })
    $("input[name=c]").click(function(){
        var len = $("#resposta").val().length;
//Conta caracteres
        var valor = $("#resposta").val();
//Apaga o ultimo numero
        valor = valor.replace(valor.charAt(len - 1), "");
        $("#resposta").val(valor);
    })
    $("input[name=soma]").click(function(){
        if($("#resposta").val() != ""){
            v1 = parseFloat($("#resposta").val());
            $("#resposta").val("");
            op = "soma";
        }else{
            alert("Verifique se digitou um valor");
        }
    })
    $("input[name=subtracao]").click(function(){
        if($("#resposta").val() != ""){
            v1 = parseFloat($("#resposta").val());
            $("#resposta").val("");
            op = "subtracao";
        }else{
            alert("Verifique se digitou um valor");
        }
    })
    $("input[name=multiplicacao]").click(function(){
        if($("#resposta").val() != ""){
            v1 = parseFloat($("#resposta").val());
            $("#resposta").val("");
            op = "multiplicacao";
        }else{
            alert("Verifique se digitou um valor");
        }
    })
    $("input[name=divisao]").click(function(){
        if($("#resposta").val() != ""){
            v1 = parseFloat($("#resposta").val());
            $("#resposta").val("");
            op = "divisao";
        }else{
            alert("Verifique se digitou um valor");
        }
    })
    $("input[name=igual]").click(function(){
        if($("#resposta").val() != ""){
            v2 = parseFloat($("#resposta").val());
            $("#resposta").val("");
            if(op == "soma"){
                $("#resposta").val(v1+v2);}
                
            if(op == "subtracao"){
                $("#resposta").val(v1-v2);}
            
            if(op == "multiplicacao"){
                $("#resposta").val(v1*v2);}
            
            if(op == "divisao"){
                $("#resposta").val(v1/v2);}
        }else{
            alert("Você esqueceu do outro valor");
        }
    })
});