/* Selecionando elementos a serem manipulados */
// formulario foi usado ao invés de "document", para que o elemento seja procurado a partir do formulário, e não do documento inteiro, atráves do DOM. Isso ajuda muito na performance do site.
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoTelefone = formulario.querySelector("#telefone");
const campoCelular = formulario.querySelector("#celular");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const mensagem = formulario.querySelector("#status");
const botaoLocalizar = formulario.querySelector("#localizar-cep");

/* Ativação das máscaras com jQuery Mask */

$(campoCep).mask("00000-000");
$(campoTelefone).mask("(00) 0000-0000");
$(campoCelular).mask("(00) 0000-00000");


/* Monitorando o evento de acionamento do botão localizar cep */
botaoLocalizar.addEventListener("click", function(event){
    event.preventDefault();

    //Pegar o cep digitado
    let cep = campoCep.value;
    
    /* "AJAX": técnica de comunicação assíncrona usando a 
     API (Web service) ViaCEP: www.viacep.com.br -> abrir o exemplo -> copiar a url */

    // Etapa 1: Preparar uma URL contendo o CEP digitado e o caminho da API (ViaCEP)
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    /* Etapa 2: acesse e inicie uma comunicação/requisição com o servidor da URL indicada. */
    fetch(url)

    /* Etapa 3: ... e então, recupere a resposta do servidor no formato de objeto (JSON). Este objeto contém todas as informações do endereço referente ao CEP informado. */
    .then( resposta => resposta.json())

    // Etapa 4: ... e então, extraia os dados da resposta e mostre na tela
    .then( dados => {
        // console.log(dados);

        // Se existir "erro" no objeto dados
        if("erro" in dados){
            mensagem.innerHTML = "CEP não encontrado!";
            mensagem.style.color = "red";
            mensagem.focus();
        } else { // Senão
            mensagem.innerHTML = "CEP encontrado!";
            mensagem.style.color = "blue";
            
            campoEndereco.value = dados.logradouro;
            campoBairro.value = dados.bairro;
            campoCidade.value = dados.localidade;
            campoEstado.value = dados.uf;
        }
    })
})
