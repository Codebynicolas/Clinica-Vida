document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formulario');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validarFormulario()) {
      enviarFormulario();
    }
  });
});

function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value;

  // Limpar mensagens de erro anteriores
  const errorDiv = document.querySelector('.error-message');
  if (errorDiv) {
    errorDiv.style.display = 'none';
  }

  // Validação de campos vazios
  if (!nome || !email || !cidade || !estado) {
    mostrarErro("Todos os campos são obrigatórios.");
    return false;
  }

  // Validação de email
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    mostrarErro("E-mail inválido.");
    return false;
  }

  // Validação de nome (apenas letras, números, espaços e caracteres acentuados)
  const regexNome = /^[a-zA-Z0-9\s\-áéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇ]+$/;
  if (!regexNome.test(nome)) {
    mostrarErro("Nome contém caracteres inválidos.");
    return false;
  }

  // Validação de cidade
  if (!regexNome.test(cidade)) {
    mostrarErro("Cidade contém caracteres inválidos.");
    return false;
  }

  return true;
}

function enviarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value;

  // Simulação de envio (substitua por fetch real para backend)
  console.log("Enviando formulário:", { nome, email, cidade, estado });

  // Simular delay de envio
  const button = document.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'Enviando...';

  setTimeout(() => {
    mostrarSucesso("Formulário enviado com sucesso! (simulação)");
    document.getElementById('formulario').reset();
    button.disabled = false;
    button.textContent = 'Enviar';
  }, 2000);
}

function mostrarErro(mensagem) {
  const container = document.querySelector('.form-container');
  let errorDiv = container.querySelector('.error-message');

  if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.setAttribute('aria-live', 'polite');
    errorDiv.setAttribute('role', 'alert');
    container.insertBefore(errorDiv, container.firstChild);
  }

  errorDiv.textContent = mensagem;
  errorDiv.style.display = 'block';
  errorDiv.focus(); // Para leitores de tela
}

function mostrarSucesso(mensagem) {
  const container = document.querySelector('.form-container');
  let successDiv = container.querySelector('.success-message');

  if (!successDiv) {
    successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.setAttribute('aria-live', 'polite');
    successDiv.setAttribute('role', 'status');
    container.insertBefore(successDiv, container.firstChild);
  }

  successDiv.textContent = mensagem;
  successDiv.style.display = 'block';

  // Esconder após 5 segundos
  setTimeout(() => {
    successDiv.style.display = 'none';
  }, 5000);
}