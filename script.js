function shuffleArray(array) {
// Função para embaralhar um array usando o algoritmo Fisher-Yates
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
return array;
}

function generateNickname() {
var name = document.getElementById("inputName").value.trim().toLowerCase();

// Verifica se o campo de entrada está vazio
if (!name) {
    document.getElementById("nickname").textContent = "Please enter a name before proceeding";
    document.getElementById("nickname").classList.add("error-message");
    document.getElementById("nickname").classList.add("bold-text"); // Adiciona a classe de texto em negrito
    return; // Encerra a execução da função
    
}

var vowels = [];
var consonants = [];

// Identificar vogais e consoantes
for (var i = 0; i < name.length; i++) {
    var char = name.charAt(i);
    if ('aeiou'.includes(char)) {
    vowels.push(char);
    } else if ('bcdfghjklmnpqrstvwxyz'.includes(char)) {
    consonants.push(char);
    }
}

// Embaralhar vogais e consoantes
vowels = shuffleArray(vowels);
consonants = shuffleArray(consonants);

// Criar nickname combinando vogais e consoantes
var nickname = '';
var vIndex = 0;
var cIndex = 0;
for (var i = 0; i < name.length; i++) {
    var char = name.charAt(i);
    if ('aeiou'.includes(char)) {
    nickname += vowels[vIndex];
    vIndex++;
    } else if ('bcdfghjklmnpqrstvwxyz'.includes(char)) {
    nickname += consonants[cIndex];
    cIndex++;
    } else {
    nickname += char;
    }
}

// Retornar o nickname
document.getElementById("nickname").textContent = "Your nickname is: " + nickname;
// Adiciona uma classe ao elemento HTML para estilização
document.getElementById("nickname").classList.remove("error-message"); // Remove a classe de erro, se presente
document.getElementById("nickname").classList.add("success-message"); // Adiciona a classe de sucesso
document.getElementById("nickname").classList.add("bold-text"); // Adiciona a classe de texto em negrito



}

// Adiciona um ouvinte de evento para detectar quando a tecla Enter é pressionada
document.getElementById("inputName").addEventListener("keyup", function(event) {
    // Verifica se a tecla pressionada é o Enter (código 13)
    if (event.key === "Enter") {
      // Chama a função generateNickname() quando o Enter é pressionado
      generateNickname();
    }
  });