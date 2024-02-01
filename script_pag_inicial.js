document.getElementById("btn_cadastro").addEventListener("click", function() {
    window.location.href = "pagina_cadastro.html"; // Redireciona para a página inicial
});

document.getElementById("btn_login").addEventListener("click", function() {
    window.location.href = "pagina_login.html"; // Redireciona para a página inicial
});

const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.onclick = function() {
    this.classList.toggle('active')
    container.classList.toggle('active')
    body.classList.toggle('active')
}
