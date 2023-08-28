document.addEventListener('DOMContentLoaded', function(){
    const nome = document.querySelector('#nome')
    const foto = document.querySelector('#foto')
    const usuario = document.querySelector('#usuario')
    const repos = document.querySelector('#repos')
    const seguidores = document.querySelector('#seguidores')
    const seguindo = document.querySelector('#seguindo')
    const link = document.querySelector('#link')

    fetch('https://api.github.com/users/brunobahri').then(function(resposta){
        return resposta.json();
    }).then(function(json){
        nome.innerText = json.name;
        usuario.innerText = json.login;
        foto.src = json.avatar_url;
        seguindo.innerText = json.following;
        seguidores.innerText = json.followers;
        repos.innerText = json.public_repos
        link.href = json.html_url
    })
})








