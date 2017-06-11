$(document).ready(function () {
    var meuTexto;
    var dados;

    $.get("banco.txt", function(texto){
        meuTexto = texto;
        dados = meuTexto.split(", "); //seleciona o tipo de separação, por virgula, espaço, etc..
        var elemento;
        //até que chegue no final do documento
        for(i = 0; i<dados.length;i++){
            elemento = dados[i]; //elemento recebe a primeira palavra antes de encontrar o separador (split)
            $("datalist").append("<option>"+elemento+"</option>"); //coloco o elemento no datalist
        }

    });
});