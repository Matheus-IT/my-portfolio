export default {
  NavBar: {
    about: "Sobre",
    mainProjects: "Principais Projetos",
    allProjects: "Todos Projetos",
    contact: "Contato",
  },
  HomePage: {
    heroTitle: "Olá! Eu sou ",
    heroMyRole: "Desenvolvedor Full-stack!",
    heroDescription:
      "Mais de {yearsOfExperience} anos de experiência na indústria de tecnologia. Sou especialista na construção de aplicações web e mobile utilizando tecnologias como React, Flutter e Django.",
    heroResume: "Meu currículo",
    highlightedProjectsSectionTitle:
      "Dá uma olhada nos meus principais projetos!",
    seeAll: "Ver todos",
    contactTitle: "Gostou do meu trabalho? Vamos trabalhar juntos!",
    contactDescription:
      "Estou sempre pronto para bater um papo. Me mande uma mensagem nas redes sociais.",
  },
  Projects: {
    takeALook: "Dê uma olhada neste projeto",
    allProjects: "Esses são todos os meus projetos",
    seeAll: "Ver todos",
    seeDetails: "Ver detalhes",
    p1description: "Um site de barbearia onde o usuário pode marcar um horário e ver a fila em tempo real",
    p1detailedDescription: `
      <p class="text-base mt-2">Principais Funcionalidades:</p>

      <ul class="list-disc list-inside">
        <li><strong>Exibir</strong> produtos e serviços de uma barbearia/salão de cabeleireiro</li>
        <li>Autenticação de usuário para <strong>agendar atendimentos</strong> com antecedência</li>
        <li><strong>Fila em tempo real</strong> para informar os clientes sobre os melhores horários para visitar</li>
      </ul>

      <p class="text-base text-justify mt-2">
        Utilizando o conhecimento adquirido ao longo do curso <em>CS50</em>, o projeto teve como objetivo criar um <strong>site responsivo</strong> para uma barbearia/salão de cabeleireiro. O foco foi aprimorar a interface e a experiência do usuário tanto para dispositivos móveis quanto para desktops.
      </p>

      <p class="text-base text-justify mt-2">
        Uma boa experiência do usuário em uma barbearia/salão de cabeleireiro vai além de apenas ter um site bonito. Com base em experiências pessoais, um tempo significativo é frequentemente gasto esperando para cortar o cabelo. Para resolver isso, foi desenvolvido um <strong>sistema de fila em tempo real</strong>, que os clientes podem acessar e que é gerido pelo cabeleireiro. Este sistema permite que pessoas ocupadas verifiquem o tempo de espera atual e escolham o momento mais conveniente para visitar o salão.
      </p>
    `,
    p2description: "Um aplicativo móvel para lembrar aniversários via notificações push e email",
    p2detailedDescription: `
      <p class="text-base mt-2">Principais Funcionalidades:</p>

      <ul class="list-disc list-inside">
        <li><strong>Autenticação de usuário</strong> para catalogar uma lista de aniversários para receber notificações</li>
        <li>Notificações de aniversário via <strong>push notifications</strong></li>
        <li>Notificações de aniversário via <strong>e-mail</strong></li>
      </ul>

      <p class="text-base text-justify mt-2">
        Utilizando o conhecimento adquirido na faculdade, desenvolvi este aplicativo para <strong>ajudar minha igreja</strong> lembrando os aniversários dos membros.
      </p>

      <p class="text-base text-justify mt-2">
        O aplicativo está atualmente em <strong>uso bem-sucedido e ativo</strong>, e marcou minha primeira experiência como gerente de produto do meu próprio aplicativo, permitindo-me comunicar diretamente com o cliente.
      </p>

      <p class="text-base text-justify mt-2">
        A solução é composta por um aplicativo móvel construído com <em>Flutter</em> e uma API projetada com <em>Django REST framework</em>.
      </p>
    `,
    p3description: "Um jogo casual, multiplataforma, construído com a engine Flutter Flame",
    p3detailedDescription: `
      <p class="text-base mt-2">Principais Regras:</p>

      <ul class="list-disc list-inside">
        <li>Fazer a bola acertar os blocos para ganhar mais pontos</li>
        <li>Se todos os blocos forem quebrados, passar para o próximo nível</li>
        <li>Quanto mais difícil for o bloco, maior a probabilidade de ganhar um power-up</li>
        <li>Os power-ups podem fazer uma bola auxiliar aparecer, aumentar a velocidade ou ampliar o bastão do jogador</li>
      </ul>

      <p class="text-base text-justify mt-2">
        Eu construí este jogo durante um curso na faculdade com mais dois amigos. Foi um pouco desafiador, porque mesmo tendo experiência com <em>Flutter</em>, eu não tinha utilizado o motor <em>Flame Engine</em> antes.
      </p>

      <p class="text-base text-justify mt-2">
        A experiência de construir este jogo foi incrível, além disso, aprendi muito com meus amigos quando nos reuníamos para discutir sobre as funcionalidades, detalhes de implementação e sugestões.
      </p>
    `,
    p4description: "O portfólio que você está acessando, que exibe meu trabalho árduo",
    p4detailedDescription: `
      <p class="text-base mt-2">Principais Funcionalidades:</p>

      <ul class="list-disc list-inside">
        <li>Página principal que <strong>exibe minha experiência</strong>, tecnologias com as quais trabalho, principais projetos paralelos que desenvolvi, e uma seção de contato</li>
        <li>Visão geral de <strong>todos os projetos interessantes</strong> que construí para aprender e aplicar meus conhecimentos</li>
        <li><strong>Página detalhada</strong> para saber mais sobre um projeto específico, acessar o repositório e ver uma demonstração ao vivo</li>
      </ul>

      <p class="text-base text-justify mt-2">
        Meu portfólio foi estrategicamente construído para apresentar quem eu sou, o que faço e o que acredito em termos de desenvolvimento de software.
      </p>

      <p class="text-base text-justify mt-2">
        Para as tecnologias, utilizei <em>Next.js</em> com <em>TypeScript</em> e <em>Tailwind CSS</em>.
      </p>
    `,
    p5description: "Um jogo de batalha naval construído com JavaScript para melhorar minha lógica e processo de resolução de problemas",
    p5detailedDescription: `
      <p class="text-base mt-2">Principais Funcionalidades:</p>

      <ul class="list-disc list-inside">
        <li>O jogador tem um determinado número de tentativas para afundar um navio de batalha</li>
        <li>Um navio de batalha consiste em um número de células, posicionadas horizontal ou verticalmente</li>
        <li>O jogador pode clicar em uma célula e então receber um feedback se um navio foi atingido ou não</li>
      </ul>

      <p class="text-base text-justify mt-2">
        Eu adoro construir jogos, porque eles são divertidos de criar e também me desafiam ao máximo no pensamento crítico.
      </p>

      <p class="text-base text-justify mt-2">
        Para as tecnologias, utilizei <em>JavaScript</em>, <em>HTML</em> e <em>CSS</em>.
      </p>
    `,
  },
} as const;
