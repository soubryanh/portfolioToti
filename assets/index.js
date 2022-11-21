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

//This simple validation just check if there is a value inside of each input.

const form = document.getElementById('form');
const subject = document.getElementById('subject');
const contact = document.getElementById('contact1');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from the inputs
  //Add funct "trim" to remove whitespaces

  const contactValue = contact.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  if (subjectValue === '') {
    //show error message
    //add error class
    setErrorFor(subject, 'Subject cannot be blank');
  } else {
    //add success class
    setSuccessFor(subject);
  }

  if (contactValue === '') {
    setErrorFor(contact, 'Contact cannot be blank');
  } else {
    setSuccessFor(contact);
  }

  if (messageValue === '') {
    setErrorFor(message, 'Message cannot be blank');
  } else {
    setSuccessFor(message);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector('small');
  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
