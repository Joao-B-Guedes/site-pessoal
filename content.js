export const blocos = [
    {
        comando: "whoami",
        saida: {
            type: "text",
            linhas: [
                `João Batista Guedes Neto - Técnico em Redes de Computadores,
                Bacharel em Física, Especialista em Engenharia de Software
                e Mineração de Dados Educacionais.`
            ]
        }
    },
    {
        comando: "ls projects/",
        saida: {
            type: "folders",
            pastas: [
                //{nome: "rpg-portfolio/", descricao: "devlog do jogo que estou construindo"},
                {nome: "homelab/", descricao: "anotações de infra e redes", href: "projects/homelab.html"},
                //{nome: "curiosidades/", descricao: "achados soltos, sem compromisso"}
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

//export default blocos;

/*home-lab
Começou com uma vontade de ter uma máquina dedicada para retrogames em minha sala, 
para poder jogar no conforto do sofá e com visitas.

A vontade virou um entusiasmo que se transformou em uma ideia maior. 
Por que não colocar mais serviços, já que tenho uma máquina ociosa? 
E assim surgiu minha primeira exposição ao Docker e seus containers.

De máquina de retrojogos utilizando o Batocera, foi adicionado outro S.O., 
o Ubuntu Server, para suportar meus serviços. De streaming com Jellyfin à automatização 
de download de mídias via torrent, a partir do catálogo do Jellyseer. 
Camada DNS com o Pi-Hole e serviço de armazenamento em nuvem com o Nextcloud.

O projeto foi concluído com sucesso, apesar dos problemas não pensados de antemão. 
Como fica minha navegação na internet quando troco do Ubuntu para o Batocera? 
Pois é. O que era Pi-Hole vira apenas Hole no meu serviço DNS.

Mas diria que ter seu próprio streaming — sem depender de assinaturas para consumi-lo 
fora e dentro de casa, e ainda por cima funcionando também pela LAN — é excepcional! 
Assim como subir seus arquivos locais pela LAN e ter acesso de outros dispositivos 
móveis a qualquer momento... não tem preço. (Além da conta de energia!).

Em busca de soluções para problemas não antecipados até as próximas implementações.*/