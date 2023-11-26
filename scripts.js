var min = 1;
var max = 1001;
var numeroSecreto = parseInt(Math.random() * (max - min) + min);
var tentativas = 10;

while (tentativas > 0) {
    tentativas--;

    var chute = prompt("Digite um número entre 1 e 1000");

    if (chute == numeroSecreto) {
        alert("Acertou!");
        break;
    }

    if (chute === null) {
        alert("Obrigado por tentar.");
        break;
    } else if (chute > numeroSecreto) {
        alert("Errou ... o número secreto é menor do que " + chute);
    } else if (chute < numeroSecreto) {
        alert("Errou ... o número secreto é maior do que " + chute);
    }
    if (tentativas != 0) {
        alert("Você ainda tem " + tentativas + "/10");
    }

    if (tentativas == 0) {
        alert(
            "Suas tentativas acabaram, o número secreto era: " + numeroSecreto
        );
    }
}
