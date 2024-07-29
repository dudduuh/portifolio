
const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


btnMostrarProjetos.addEventListener('click', () => {
    
    MostrarMaisProjetos();
    EsconderBotao();   
    
});

function EsconderBotao()
{
    btnMostrarProjetos.classList.add("remover");
}
function MostrarMaisProjetos()
{
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}