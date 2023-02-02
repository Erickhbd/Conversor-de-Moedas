function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);
  
    var valorEmReal = valorEmDolar * 5.07; //em 31:1:2013 as 21:46
  
    setTimeout(() => {
      window.location.reload ()
    }, 5000);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }

  // DESAFIO
  // trocar por outras moedas
  // perguntar e imprimir nome
  // converter anos luz em metros