
// Msg inicial do bot
window.onload = function init() {
    mensagemInicial('Olá, meu nome é IALA. Como posso te ajudar? <br><br> Posso tirar suas dúvidas sobre o Desmoo e contar piadas incríveis <br><br> Para mim te levar para outra página, basta dizer "ir para" + "o nome da página".<br><br> Tipo assim olha! "ir para feed"')
} 

// Click para enviar mensagem
document.getElementById('reply').addEventListener("click", async (e) => {
    e.preventDefault();
    
    // var req irá receber o valor da mensagem digitada pelo usuário
    var req = document.getElementById('msg_send').value;

    // Caso a mensagem estiver vazia, não irá mandar.
    if (req == undefined || req == '') {
        console.log('deu ruim')
    
    } else {
        
        /* 
        Como o código está funcionando?

        Resumidamente, o programa irá pegar a mensagem do usuário e comparar com o banco de perguntas pré-determinado, para assim mandar a resposta mais provável. 
        
        O cálculo de comparação de perguntas é utilizando a distância de Leveinshtein
        */


        // Preparando variaveis e funções
        var distancia = [] // Semelhança entre a mensagem do usuário com a pergunta do banco
        var perguntas = [] // Perguntas pré-escritas
        var banco = [] // banco de perguntas e respostas
        var selecaoPergunta = 0 // Selecionador da pergunta de acordo com a sua semelhança
        var distanciaMinima = 0
        var localizar = 0
        
        bancodeRespostas(banco) // Banco de respostas
        distanciaLevenshtein(banco, selecaoPergunta, perguntas, req, distancia)
        criarMensagem(req, this.res, distancia, distanciaMinima, banco, localizar) // Receber os valores e criar a mensagem da IALA
        scroll() // Descer a tela automaticamente com o envio de mensagens
        


    }   
            

});

function distanciaLevenshtein(banco, selecaoPergunta,perguntas, req, distancia) {
     // Cálculo - Distância de Levenshtein
     for (let i = 0; i < banco.length; i++) {
        perguntas.push(banco[selecaoPergunta].pergunta) 
        selecaoPergunta++
        // console.log(`passou for pequeno`)
        // console.log(`perguntas é igual a ${perguntas}`)

        var str1 = req.toLowerCase();
        var str2 = perguntas[i];
        const levenshteinDistance = (str1 = '', str2 = '') => {
        const track = Array(str2.length + 1).fill(null).map(() =>
        Array(str1.length + 1).fill(null));
        for (let i = 0; i <= str1.length; i += 1) {
            track[0][i] = i;
        }
        for (let j = 0; j <= str2.length; j += 1) {
            track[j][0] = j;
        }
        for (let j = 1; j <= str2.length; j += 1) {
            for (let i = 1; i <= str1.length; i += 1) {
                const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
                track[j][i] = Math.min(
                    track[j][i - 1] + 1, // deletion
                    track[j - 1][i] + 1, // insertion
                    track[j - 1][i - 1] + indicator, // substitution
                );
            }
        }
        return track[str2.length][str1.length];
        };
    
        resultadoLevenstein = levenshteinDistance(str1,str2)
        distancia.push(resultadoLevenstein)
    }
}

function localizarResposta(distancia, distanciaMinima) {
    // Receber a localização do menor valor(consequentemente a resposta)
    console.log(distancia)
    distancia.find((elemento, posicaoArray)=>{
        if (elemento == distanciaMinima) {
            this.localizar = posicaoArray
            console.log('localizar do localizarResposta ' + localizar)
            console.log('Valor encontrado: ' + elemento + ' / Na posição: ' + posicaoArray)
            console.log(`a posição é: ${posicaoArray}`)
        }
    })
}

function selecionarResposta(distanciaMinima, banco, localizar, res) {
     // Seleção da resposta
     if (distanciaMinima <= 4){
        receberObjeto = banco[this.localizar]
        console.log('resposta do bagui é ' + receberObjeto.resposta)
        console.log('localizar do selecionarResposta ' + localizar)
        this.res = receberObjeto.resposta
        console.log('valor resposta '+ this.res)
        
        if (receberObjeto.pagina != '') {
            window.open(receberObjeto.pagina, '_blank')     
        }

    }else{
        this.res = 'Deculpe, não consegui entender, poderia falar denovo?';
    }
    
}

function criarMensagem(req, res, distancia, distanciaMinima, banco, localizar) {
    // distanciaMinima(distancia)
    distanciaMinima = Math.min(...distancia)
    localizarResposta(distancia, distanciaMinima)
    selecionarResposta(distanciaMinima, banco, localizar, this.res)
    
    // Criar mensagem
    
    let data_req = document.createElement('div');
    let data_res = document.createElement('div');

    let container1 = document.createElement('div');
    let container2 = document.createElement('div');

    container1.setAttribute("class","msgCon1");
    container2.setAttribute("class","msgCon2");

    data_req.innerHTML = req ;
    data_res.innerHTML = this.res ;
    console.log('valor do res é ' + this.res)

    data_req.setAttribute("class","right");
    data_res.setAttribute("class","left");

    let message = document.getElementById('msg');

    
    message.appendChild(container1);
    message.appendChild(container2);

    container1.appendChild(data_req);
    container2.appendChild(data_res);

    document.getElementById('msg_send').value = "";

}

function scroll() {
    var scrollMsg = document.getElementById('msg')
    scrollMsg.scrollTop = scrollMsg.scrollHeight ;
}

function bancodeRespostas(banco) {
    // BANCO DE PERGUNTAS E RESPOSTAS  ------------------------------------------------
    
    // Cumprimentar
    const oi = {
        pergunta: 'oi',
        resposta: 'Oi, tudo bem?',
        pagina:   ''
    }

    const bomDia = {
        pergunta: 'bom dia',
        resposta: 'Bom dia! Precisa de ajuda?',
        pagina:   ''
    }

    const boaNoite = {
        pergunta: 'boa noite',
        resposta: 'Boa Noite! Precisa de ajuda?',
        pagina:   ''
    }
    const boaTarde = {
        pergunta: 'boa Tarde',
        resposta: 'Boa Tarde! Precisa de ajuda?',
        pagina:   ''
    }
    
    const tudoBem = {
        pergunta:  'tudo bem?',
        resposta: 'Tudo sim, e com você?',
        pagina:   ''
    }
    
    const queBom = {
        pergunta:  'estou bem',
        resposta: 'Que bom!',
        pagina:   ''
    }
    
    const queBom2 = {
        pergunta:  'estou sim',
        resposta: 'Que bom!',
        pagina:   ''
    }

    const comoFoiseuDia = {
        pergunta: "como foi seu dia?",
        resposta: 'Foi muito bom! Adoro ajudar as pessoas',
        pagina: ''
    }

    const opa = {
        pergunta: 'opa',
        resposta: 'Tudo bem?',
        pagina: ''
    }

    const obrigado = {
        pergunta: 'obrigado',
        resposta: 'Eu que agradeço! Qualquer coisa é só chamar',
        pagina: ''
    }
    
    const obg = {
        pergunta: 'obrigado',
        resposta: 'Eu que agradeço! Qualquer coisa é só chamar',
        pagina: ''
    }

// Despedida
    const tchau = {
        pergunta: 'tchau',
        resposta: 'Até logo!',
        pagina: ''
    }
    
    const ateLogo = {
        pergunta: 'até logo',
        resposta: 'Até logo!',
        pagina: ''
    }
    
// Xingamentos
    const xingamento1 = {
        pergunta: 'vai toma no cu',
        resposta: 'Não fale assim comigo',
        pagina: ''
    }

    const xingamento2 = {
        pergunta: 'seu porra',
        resposta: 'Não fale assim comigo',
        pagina: ''
    }
    
    const xingamento3 = {
        pergunta: 'filho da puta',
        resposta: 'Não fale assim comigo',
        pagina: ''
    }

// Viajar entre páginas
    const irGoogle = {
        pergunta:  'ir para google',
        resposta: 'Simples, deixa que eu te ajudo!',
        pagina:   'https://www.google.com.br/'
    }
    
    const IrFeed = {
        pergunta:  'ir para feed',
        resposta: 'Simples, deixa que eu te ajudo!',
        pagina:   '/feed'
    }
    
    const IrExplorar = {
        pergunta:  'ir para explorar',
        resposta: 'Simples, deixa que eu te ajudo!',
        pagina:   '/explorar'
    }
    
    const IrPerfil = {
        pergunta:  'ir para perfil',
        resposta: 'Simples, deixa que eu te ajudo!',
    }

    const IrCriarPost = {
        pergunta:  'ir para criar post',
        resposta: 'Simples, deixa que eu te ajudo!',
    }

    
    const IrNotificacao = {
        pergunta:  'ir para notificações',
        resposta: 'Simples, deixa que eu te ajudo!',
        pagina:   'https://www.google.com.br/'
    }
    
    const IrSalvos = {
        pergunta:  'ir para notificações',
        resposta: 'Simples, deixa que eu te ajudo!',
        pagina:   'https://www.google.com.br/'
    }

    

// Como fazer?
    const comoCriarPoost = {
        pergunta: 'como criar um post?',
        resposta: 'Você primeiro deve ir pra página de criação de post e escolher o tipo de post, após isso é só prepará-lo e postar!',
        pagina: 'https://www.google.com.br/'
    }
    
    const QuemPodeCriarPost = {
        pergunta: 'quem pode criar posts?',
        resposta: 'Qualquer usuário pode criar discussões, porém apenas usuários qualificados poderão criar pesquisas de campo e reviews',
        pagina: 'https://www.google.com.br/'
    }

    const comoCriarConta = {
        pergunta: 'como criar uma conta?',
        resposta: 'Para criar uma conta, basta ir para página de cadastro e seguir passo a passo',
        pagina: ''
    }

    const oQueeDesmoo = {
        pergunta: 'oque é Desmoo?',
        resposta: 'Desmoo é um website com o objetivo de propagar o conhecimento científico com foco nas áreas de ciências da saúde de maneira simples e fácil de entender!',
        pagina: ''
    }

    const precisoAjuda = {
        pergunta: 'preciso de ajuda',
        resposta: 'Tudo bem! Qual sua dúvida?',
        pagina: ''
    }

    const precisoAjuda2 = {
        pergunta: 'quero ajuda',
        resposta: 'Tudo bem! Qual sua dúvida?',
        pagina: ''
    }

    const precisoAjuda3 = {
        pergunta: 'ajuda',
        resposta: 'Tudo bem! Qual sua dúvida?',
        pagina: ''
    }

    const precisoAjuda4 = {
        pergunta: 'tenho uma dúvida',
        resposta: 'Tudo bem! Qual sua dúvida?',
        pagina: ''
    }

    const precisoAjuda5 = {
        pergunta: 'tenho uma pergunta',
        resposta: 'Tudo bem! Qual sua dúvida?',
        pagina: ''
    }

    const precisoAjuda6 = {
        pergunta: 'pergunta',
        resposta: 'Tudo bem! Qual sua dúvida?',
        pagina: ''
    }

    const precisoAjuda7 = {
        pergunta: 'duvida',
        resposta: 'Tudo bem! Qual sua dúvida?',
        pagina: ''
    }

    const precisoAjuda8 = {
        pergunta: 'estou com uma duvida',
        resposta: 'Tudo bem! Qual sua dúvida?',
        pagina: ''
    }

    const precisoAjuda9 = {
        pergunta: 'to com uma duvida',
        resposta: 'Tudo bem! Qual sua dúvida?',
        pagina: ''
    }

    const precisoAjuda10 = {
        pergunta: 'to com duvida',
        resposta: 'Tudo bem! Qual sua dúvida?',
        pagina: ''
    }

    const comoFeed = {
        pergunta:  'como vou para o feed?',
        resposta: 'Simples, deixa que eu te ajudo!',
        pagina:   'https://www.google.com.br/'
    }
    
    const comoExplorar = {
        pergunta:  'como ir para o explorar?',
        resposta: 'Simples, deixa que eu te ajudo!',
        pagina:   'https://www.google.com.br/'
    }
    
    const comoPerfil = {
        pergunta:  'como ir para o perfil?',
        resposta: 'Simples, deixa que eu te ajudo!',
        pagina:   'https://www.google.com.br/'
    }

    const comoCriarPost = {
        pergunta:  'como crio um post?',
        resposta: 'Simples, deixa que eu te ajudo!',
        pagina:   'https://www.google.com.br/'
    }

    
    const comoNotificacao = {
        pergunta:  'como vou para notificações?',
        resposta: 'Simples, deixa que eu te ajudo!',
        pagina:   'https://www.google.com.br/'
    }
    
    const comoSalvos = {
        pergunta:  'como vou para salvos?',
        resposta: 'Simples, deixa que eu te ajudo!',
        pagina:   'https://www.google.com.br/'
    }

    const tiposPublicacoes = {
        pergunta:  'quais são os tipos de publicações?',
        resposta: 'Reviews, pesquisas de campo e discussões',
        pagina:   ''
    }
    
    const tiposPublicacoes2 = {
        pergunta:  'O que é uma review?',
        resposta: 'Reviews são pesquisas científicas acessíveis e escritas por profissonais ',
        pagina:   ''
    }
    
    const tiposPublicacoes3 = {
        pergunta:  'O que é uma pesquisa de campo?',
        resposta: 'Pesquisas de campo são formulários para auxiliar na coleta de dados os pesquisadores',
        pagina:   ''
    }
    
    
    const tiposPublicacoes4 = {
        pergunta:  'O que é uma discussão?',
        resposta: 'Discussões são enquetes criadas por qualquer usuário para tirar suas dúvidas com outras pessoas! ',
        pagina:   ''
    }
    
    const tiposPublicacoes5 = {
        pergunta:  'O que são pesquisas de campo?',
        resposta: 'Pesquisas de campo são formulários para auxiliar na coleta de dados os pesquisadores',
        pagina:   ''
    }
    
    const oqueFeed = {
        pergunta:  'O que é feed?',
        resposta: 'Feed é a página onde te apresenta todas as publicações criadas por outros usuários',
        pagina:   ''
    }
    
    const oqueExplorar = {
        pergunta:  'O que é explorar?',
        resposta: 'Explorar é a página onde você procura outras publicações!',
        pagina:   ''
    }
    
    const oqueNotificacoes = {
        pergunta:  'O que é notificaçÕes?',
        resposta: 'Notificações é a página onde você recebe algumas notícias das pessaos que interagem com você!',
        pagina:   ''
    }
    
    const oqueSalvos = {
        pergunta:  'O que é Salvos?',
        resposta: 'Salvos é a página onde fica as publicações guardadas por você!',
        pagina:   ''
    }
    
// Descontrair
    selecionarPiada() 
    
    const contarPiada = {
        pergunta: 'me conta uma piada',
        resposta: piada,
        pagina: ''
    }
    
    const contarPiada2 = {
        pergunta: 'conta uma piada',
        resposta: piada,
        pagina: ''
    }
    
    const contarPiada3 = {
        pergunta: 'piada',
        resposta: piada,
        pagina: ''
    }
    
    const contarPiada4 = {
        pergunta: 'me faça rir',
        resposta: piada,
        pagina: ''
    }
    
    const hobby = {
        pergunta: 'qual seu hobby?',
        resposta: 'Gosto de ajudar as pessoas!',
        pagina: ''
    }
    
    const oqgosta = {
        pergunta: 'o que você gosta?',
        resposta: 'Gosto de ajudar as pessoas!',
        pagina: ''
    }
    
    const oqgosta2 = {
        pergunta: 'você gosta de que?',
        resposta: 'Gosto de ajudar as pessoas!',
        pagina: ''
    }

// Adicionando os objetos ao banco
banco.push(
    // Cumprimentar
    oi, bomDia,boaNoite, boaTarde, tudoBem, queBom, queBom2, comoFoiseuDia, opa, obrigado, obg,
    
    //Despedida
    tchau, ateLogo, 
    
    // Xingamentos, baixo calão
    xingamento1, xingamento2, xingamento3, 
    
    // Viajar entre páginas
    irGoogle, IrFeed, IrExplorar, IrPerfil, IrCriarPost, IrNotificacao, IrSalvos,

    // Dúvidas como fazer
    comoCriarPoost, QuemPodeCriarPost, comoCriarConta, oQueeDesmoo, precisoAjuda, precisoAjuda2, precisoAjuda3, precisoAjuda4, precisoAjuda5, precisoAjuda6, precisoAjuda7, precisoAjuda8, precisoAjuda9, precisoAjuda10, comoFeed, comoExplorar, comoPerfil, comoCriarPost, comoNotificacao, comoSalvos, tiposPublicacoes, tiposPublicacoes2, tiposPublicacoes3, tiposPublicacoes4, tiposPublicacoes5, oqueFeed, oqueExplorar,oqueNotificacoes, oqueSalvos,
    
    // Descontrair
    contarPiada, contarPiada2, contarPiada3, contarPiada4, hobby, oqgosta, oqgosta2
    )
}

function selecionarPiada() {
    var selecionador = parseInt(Math.random() * 20)
    // alert('o selecionador é' + selecionador)
    
    if (selecionador == 1) {
        piada = 'O que o pato disse para a pata? - Vem Quá!'
    } 
    
    else if (selecionador == 2) {
        piada = 'Qual é a panela que está sempre triste? - A panela depressão'
    }

    else if (selecionador == 3) {
        piada = 'O que estará escrito na lápide do Papai Noel? - Ele não está mais em trenós.'
    }
    
    else if (selecionador == 4) {
        piada = 'Você gosta de bonecas russas? - Eu não, elas são muito cheias de si.'
    }

    else if (selecionador == 5) {
        piada = 'Qual é o oposto de volátil? - Vem cá sobrinho.'
    }

    else if (selecionador == 6) {
        piada = 'De que o diabo morreu? - Diabetes.'
    }

    else if (selecionador == 7) {
        piada = 'Qual é a fórmula da água benta? - H Deus O!'
    }

    else if (selecionador == 8) {
        piada = 'Por que o jogador de golfe comprou calças novas? - Porque tinha um buraco.'
    }

    else if (selecionador == 9) {
        piada = 'O que o pinto disse para seu pai? - Piu.'
    }

    else if (selecionador == 10) {
        piada = 'O que os estilistas fazem no tempo livre? - Inventam moda.'
    }

    else if (selecionador == 11) {
        piada = 'Você sabe por que a água foi presa? - Porque ela matou a sede.'
    }

    else if (selecionador == 12) {
        piada = 'Por que o professor usava óculos escuros na sala de aula? - Porque os seus alunos eram brilhantes.'
    }

    else if (selecionador == 13) {
        piada = 'Qual a diferença entre o penico e a panela? - Se você não sabe, nunca me convide para almoçar na sua casa.'
    }

    else if (selecionador == 14) {
        piada = 'Por que o motoboy foi demitido? - Porque ele não estava “capacetado” pro trabalho.'
    }

    else if (selecionador == 15) {
        piada = 'Qual é o doce preferido dos átomos? - É o pé de moléculas.'
    }

    else if (selecionador == 16) {
        piada = 'O que um pato disse ao outro? - Estamos empatados.'
    }

    else if (selecionador == 17) {
        piada = 'Por que os fantasmas são péssimos para contar mentiras? - Porque você pode ver através deles.'
    }

    else if (selecionador == 18) {
        piada = 'Por que o astronauta não conseguiu reservar um quarto de hotel na Lua? - Porque ela estava cheia.'
    }

    else if (selecionador == 19) {
        piada = 'Por que os robôs nunca sentem medo? - Porque eles têm nervos de aço.'
    }

    else if (selecionador == 20) {
        piada = 'O que é um pontinho vermelho na árvore? - Um morangotango.'
    }
    
    else {
        piada = 'Por que as girafas sempre tiram notas ruins? - Elas vivem com a cabeça na lua.'
    }
}


function mensagemInicial(texto) {
    let res_elm = document.createElement("div");
    res_elm.innerHTML=texto ;
    res_elm.setAttribute("class","left");
    document.getElementById('msg').appendChild(res_elm);
}