// ==========================================================
// Lógica da animação
// ==========================================================
import blocos from "./content.js";


const corpo = document.getElementById("terminal-body");
const VELOCIDADE_DIGITACAO = 35; // ms por caractere

function criarLinha(texto, classe) {
    const p = document.createElement("p");

    if (classe) p.className = classe;
    p.textContent = texto;

    return p;
}

function digitar(elemento, texto, callback) {
    let i = 0;
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    elemento.appendChild(cursor);

    function passo() {
        if (i < texto.length) {
            cursor.insertAdjacentText("beforebegin", texto[i]);
            i++;
            setTimeout(passo, VELOCIDADE_DIGITACAO);
        } else {
            cursor.remove();
            if (callback) callback();
        }
    }
    passo();
}

function renderSaida(saida) {
    const container = document.createElement("div");
    container.className = "output"; 

    if (saida.type == "text" || saida.type == "list") {
        saida.linhas.forEach((linha) => {
            container.appendChild(criarLinha(linha));
        });
    }

    if (saida.type =="links") {
        saida.linhas.forEach((item) => {
            const a = document.createElement("a");
            a.href = item.url;
            a.textContent = item.texto;
            a.className = "link";
            a.target = "_blank";
            const p = document.createElement("p");
            p.appendChild(a);
            container.appendChild(p);
        });   
    }

    if (saida.type === "folders") {
        saida.pastas.forEach((pasta) => {
            const div = document.createElement("div");
            //div.className = "folder-item";

            const nome = document.createElement("span");
            nome.className = "folder-name";
            nome.textContent = pasta.nome;

            const descricao = document.createElement("span");
            //descricao.className = "folder-desc";
            descricao.textContent = " → " + pasta.descricao;

            div.appendChild(nome);
            div.appendChild(descricao);
            container.appendChild(div);
        });
    }

    corpo.appendChild(container);
}

function rodarBloco(index) {
    if (index >= blocos.length) return;

    const bloco = blocos[index];
    const linhaComando = document.createElement("p");
    const prompt = document.createElement("span");
    prompt.className = "prompt";
    prompt.textContent = "$ ";
    linhaComando.appendChild(prompt);
    
    const comandoTexto = document.createElement("span");
    comandoTexto.className = "command";
    linhaComando.appendChild(comandoTexto);

    corpo.appendChild(linhaComando);

    digitar(comandoTexto, bloco.comando, () => {
        renderSaida(bloco.saida);
        setTimeout(() => rodarBloco(index + 1), 300);
    });
}

rodarBloco(0);