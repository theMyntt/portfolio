

function loadMasterPage() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "masterpage.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var container = document.getElementById("MS-Container");
            container.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

window.addEventListener("DOMContentLoaded", loadMasterPage);

function alterarTitulo(divId, novoTitulo) {
    document.title = novoTitulo;
    console.log("Título alterado para:", novoTitulo);
}

function verificarDiv() {
    var divs = [
        { id: "Inicio", titulo: "Meu Portfólio - Início" },
        { id: "Competencias", titulo: "Meu Portfólio - Competências" },
        { id: "Cursos", titulo: "Meu Portfólio - Cursos"},
        { id: "Github", titulo: "Meu Portfólio - Github e Linkedin"}
    ];

    var divVisivelEncontrada = false;

    for (var i = 0; i < divs.length; i++) {
        var div = document.getElementById(divs[i].id);
        var divVisivel = div.getBoundingClientRect().top <= window.innerHeight;

        if (divVisivel) {
            alterarTitulo(divs[i].id, divs[i].titulo);
            divVisivelEncontrada = true;
        }
    }

    if (!divVisivelEncontrada) {
        alterarTitulo("", "Meu Portfólio");
    }
}

window.onscroll = function() {
    verificarDiv();
};

function refree() {
    window.open("www.github.com/theMyntt", "_blank");
}

function arefree() {
    window.open("www.linkedin.com/in/gabriel-ara%C3%BAjo-lima-90667726a", "_blank");
}
