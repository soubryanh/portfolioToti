// Cardapio de hamburguer
let nav = document.querySelector('nav');

// Abrir
document.querySelector('.open').addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});
// cerrar
document.querySelector('.close').addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

// limpar
let navs = document.getElementsByClassName('site-link');
for (let index = 0; index < navs.length; index++) {
  navs[index].addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });
}

// validação do formulário
