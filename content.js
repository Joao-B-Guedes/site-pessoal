

const blocos = [
    {
        comando: "whoami",
        saida: {
            type: "text",
            linhas: [
                `João Batista Guedes Neto - Técnico em Redes de Computadores,
                Bacharel em física, Especialista em Engenharia de Software
                e Mineração de Dados Educacionais.`
            ]
        }
    },
    {
        comando: "ls projects/",
        saida: {
            type: "folders",
            pastas: [
                {nome: "rpg-portfolio/", descricao: "devlog do jogo que estou construindo"},
                {nome: "homelab-notas/", descricao: "anotações de infra e redes"},
                {nome: "curiosidades/", descricao: "achados soltos, sem compromisso"}
            ]
        }
    },
    {
        comando: "cat about.txt",
        saida: {
            type: "text",
            linhas: [
                `João Batista Guedes Neto - Versátil por formação e em constante
                aprimoramento, dedicado a resolver desde o problema básico
                até o desafio mais complexo.
                
                Juba - Um eterno curioso, praticante de tudo e mestre de nada.
                Gosta desde gritar em músicas, jogar com regras autoimpostas,
                se exercitar com frequência, à comidas de gosto duvidoso.`
            ]
        }
    },
    {
        comando: "cat contact.txt",
        saida: {
            type: "links",
            linhas: [
                {texto: "github.com/Joao-B-Guedes", url: "https://github.com/Joao-B-Guedes"},
                {texto: "linkedin.com/in/joaoguedesneto", url: "https://linkedin.com/in/joaoguedesneto"},
                {texto: "joaoguedesn@gmail.com", url: "mailto:joaoguedesn@gmail.com"}
            ]
        }
    }
];

export default blocos;