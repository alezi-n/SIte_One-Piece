const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, indice) =>{
    botao.addEventListener("click", () => {
        console.log('clicou no botao');

        //Verificar se existe algum botao selecionado
        Verificar_SelecaoAnterior();

        //Verificar se existe algum personagem selecionado
        const pers_select = document.querySelector('.personagem.selecionado');
        pers_select.classList.remove('selecionado');

        //Adicionar classe 'selecionado' ao botao clicado
        botao.classList.add('selecionado')

        //Adicionar classe 'selecionado' ao personagem clicado
        personagens[indice].classList.add('selecionado')
    })
});
 
function Verificar_SelecaoAnterior() {
    const botao_select = document.querySelector('.botao.selecionado');
    botao_select.classList.remove('selecionado');
}
