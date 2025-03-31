function conversor() {
    valor_PokeCoins = prompt("Digite um valor em PokeCoins:");

    valor_PokeCoins = parseFloat(valor_PokeCoins);
    valor_convertido = 0;
    moeda = ""
    name = ""
    cifra = ""

    escolha = prompt(
        "Deseja converter para:\n" +
        "1 - Real (BRL)\n" +
        "2 - Euro (EUR)\n" +
        "3 - Dólar (USD)\n" +
        "4 - Wons"
    );

    switch (escolha) {
        case "1":
            valor_convertido = valor_PokeCoins * 0.002296;
            moeda = "reais";
            name = "Real";
            cifra = "R$";
            break;
        case "2":
            valor_convertido = valor_PokeCoins * 0.000370;
            moeda = "euros";
            name = "Euro";
            cifra = "€";
            break;
        case "3":
            valor_convertido = valor_PokeCoins * 0.000400;
            moeda = "dólares";
            name = "Dólar";
            cifra = "$";
            break;
        case "4":
            valor_convertido = valor_PokeCoins * 1.22999;
            moeda = "wons";
            name = "Won";
            cifra = "₩";
            break;
        default:
            alert("Opção inválida! Escolha um número de 1 a 4.");
            return;
    }

    alert(` O valor em PokeCoins 💰${valor_PokeCoins} convertido para ${name} é:\n${cifra}${valor_convertido.toFixed(2)} ${moeda}`);
}