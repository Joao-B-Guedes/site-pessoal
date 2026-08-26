const blocos = [
    {
        comando: "whoami",
        saida: {
            type: "text",
            linhas: [
                "joao - infraestrutura de TI & redes",
                "Trabalho com Linux, redes e sistemas no dia a dias."
            ]
        }
    }
];

// ==========================================================
// Lógica da animação
// ==========================================================

const corpo = document.getElementById("terminal-body");
const VELOCIDADE_DIGITACAO = 35; // ms por caractere

function criarLinha(texto, classe) {
    const elemento = document.createElement("elemento");

    if (classe) elemento.className = classe;
    elemento.textContent = texto;

    return elemento;
}

function digitar(elemento, texto, callback) {
    let i = 0;
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    elemento.appendChild(cursor);

    function passo() {
        if (i < texto.length) {
            cursor.insertAdjacentText("beforebegin", texto[i])
            i++;
            setTimeout(passo, VELOCIDADE_DIGITACAO);
        } else {
            cursor.remove();
            if (callback) callback();
        }
    }
    passo();
}