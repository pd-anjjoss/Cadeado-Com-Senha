const items = [
    { nome: "Revólver Antigo", codigo: "7384", imagem: "2.png" },
    { nome: "Kit Médico", codigo: "2156", imagem: "3.png" },
    { nome: "Colete balístico", codigo: "9047", imagem: "4.png" },
    { nome: "Espingarda", codigo: "5632", imagem: "5.png" },
    { nome: "Machado de Combate", codigo: "1890", imagem: "6.png" },
    { nome: "Sniper AWM", codigo: "4261", imagem: "7.png" },
    { nome: "Faca", codigo: "5773", imagem: "8.png" },
    { nome: "Óculos de Visão Noturna", codigo: "3219", imagem: "9.png" },
    { nome: "Mochila tática", codigo: "6458", imagem: "10.png" },
    { nome: "Máscara de Gás", codigo: "8726", imagem: "11.png" },
    { nome: "Medicamento", codigo: "5034", imagem: "12.png" }
];

let codeDigits = ["0", "0", "0", "0"];

function changeDigit(position) {
    let currentValue = parseInt(codeDigits[position - 1]);
    currentValue = (currentValue + 1) % 10; // Circula entre 0 e 9
    codeDigits[position - 1] = currentValue.toString();
    updateButtons();
}

function updateButtons() {
    for (let i = 0; i < codeDigits.length; i++) {
        document.getElementsByClassName('number-button')[i].innerText = codeDigits[i];
    }
}

function checkCode() {
    const enteredCode = codeDigits.join("");

    let foundItem = null;
    items.forEach(item => {
        if (item.codigo === enteredCode) {
            foundItem = item;
            return;
        }
    });

    if (foundItem) {
        const resultBox = document.getElementById('result-box');
        resultBox.innerHTML = `<p style="font-size: 36px;">+Item adquirido: "${foundItem.nome}"</p><img src="${foundItem.imagem}" alt="${foundItem.nome}">`;
        resultBox.style.display = 'block';
        document.getElementById('error-message').style.display = 'none';
    } else {
        document.getElementById('error-message').innerHTML = "<p style='font-size: 36px;'>Na-na-ni-na-não espertinho, a senha tá errada.</p>";
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('result-box').style.display = 'none';
    }
}
