window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 30;
    header.classList.toggle('scrolling-active', windowPosition);
})

//1 second
    let copiarNumero = () => {	
        const numero = "(11) 95118-4579";
        const value = document.getElementById('numero')
        let inputTest = document.createElement("input");
        inputTest.value = numero;
        //Anexa o elemento ao body
        document.body.appendChild(inputTest);
        //seleciona todo o texto do elemento
        inputTest.select();
        //executa o comando copy
        //aqui é feito o ato de copiar para a area de trabalho com base na seleção
        document.execCommand('copy');
        value.innerHTML= 'Copiado!';
        //remove o elemento
        document.body.removeChild(inputTest);
            setTimeout(function() {
                  value.innerHTML = '(11) 95118-4579';
                    }, 3000);
    };
    let copiarTexto = () => {
        //O texto que será copiado
        const texto = "contato@dgbtech.com.br";
        const value = document.getElementById('email')
        //Cria um elemento input (pode ser um textarea)
        let inputTest = document.createElement("input");
        inputTest.value = texto;
        //Anexa o elemento ao body
        document.body.appendChild(inputTest);
        //seleciona todo o texto do elemento
        inputTest.select();
        //executa o comando copy
        //aqui é feito o ato de copiar para a area de trabalho com base na seleção
        document.execCommand('copy');

        value.innerHTML= 'Copiado!';
        //remove o elemento
        document.body.removeChild(inputTest);
            setTimeout(function() {
                  value.innerHTML = 'contato@dgbtech.com.br';
                    }, 3000);
    };
    function edit(){
        document.getElementById('backarrow').style.display = 'block';
        document.getElementById('image-produto').style.display = 'none';
        document.getElementById('back').style.opacity= '0';
        setTimeout(function(){ 
            document.getElementById('back').style.opacity = '1'
        },100);
    }
    function back(){
        document.getElementById('backarrow').style.display = 'none';
        document.getElementById('image-produto').style.display = 'block';
        document.getElementById('back').style.opacity= '0';
        setTimeout(function(){ 
            document.getElementById('image-produto').style.opacity = '1'
        },300);
    }
    function navVisible(){
        document.getElementById("nav-visible").style.display = "flex";
        document.getElementById('icon-navbar').style.display = 'none'
        document.getElementById("second-icon-navbar").style.display = 'block'
       }
   function navInvisible(){
       document.getElementById("nav-visible").style.display = "none";
        document.getElementById('icon-navbar').style.display = 'block'
        document.getElementById("second-icon-navbar").style.display = 'none'
   }
   function mostra1() {
    document.getElementById('hidetext').innerHTML = "Manutenção de maquinas operatrizes e melhoramento de processos voltados a desenvolvimento de software e montagem de paineis"
}
function mostra2() {
    document.getElementById('hidetext').innerHTML = "Atuação em instalações eletricas residenciais e prediais, desde a infraestrustura a melhoramento das instalações."
}
function mostra3() {
    document.getElementById('hidetext').style.marginBottom = "100px"
    document.getElementById('hidetext').innerHTML = "Atuação em desenvolvimento de projetos de hardware e software."
}