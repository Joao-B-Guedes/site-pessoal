
export const homelab = {
    comando: "cat /homelab/about.txt",
    saida: {
      type: "updates",
      entradas: [
        {
          data: "XX/XX/2026",
          linhas: [
                  `Começou com uma vontade de ter uma máquina dedicada para retrogames em minha sala, para poder jogar no conforto do sofá e com visitas.
                  A vontade virou um entusiasmo que se transformou em uma ideia maior. Por que não colocar mais serviços, já que tenho uma máquina ociosa? E assim surgiu minha primeira exposição ao Docker e seus containers.

                  De máquina de retrojogos utilizando o Batocera, foi adicionado outro S.O., o Ubuntu Server, para suportar meus serviços. De streaming com Jellyfin à automatização de download de mídias via torrent, a partir do catálogo do Jellyseer. Camada DNS com o Pi-Hole e serviço de armazenamento em nuvem com o Nextcloud.
                  O projeto foi concluído com sucesso, apesar dos problemas não pensados de antemão. Como fica minha navegação na internet quando troco do Ubuntu para o Batocera? Pois é. O que era Pi-Hole vira apenas Hole no meu serviço DNS.
                  
                  Mas diria que ter seu próprio streaming — sem depender de assinaturas para consumi-lo fora e dentro de casa, e ainda por cima funcionando também pela LAN — é excepcional! Assim como subir seus arquivos locais pela LAN e ter acesso de outros dispositivos móveis a qualquer momento... não tem preço. (Além da conta de energia!).
                  Em busca de soluções para problemas não antecipados até as próximas implementações.`
          ]
        }
        // {
        //   data: "2026-09-27",
        //   linhas: ["Nova entrada aqui."]
        // },
      ]
    }
  }
