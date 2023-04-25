const botao = document.querySelector("nav h2");
const linksMenu = document.querySelector(".menu");
const icone = document.querySelector(".icone");

botao.addEventListener("click", function(event){
    event.preventDefault();
    linksMenu.classList.toggle("aberto");

    /* Se a classe "aberto" estiver aplicada ao "links menu", mude o texto/icone para "fechar X". Caso contrário, mostre o texto/icone para "Menu &equiv;" */

    if(linksMenu.classList.contains("aberto")){
        icone.innerHTML = "Fechar &times;";
    } else {
        icone.innerHTML = "Menu &equiv;"; 
    }
});
