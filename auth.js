function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  const storedUser = localStorage.getItem('user');
  const storedPass = localStorage.getItem('pass');
if (user === storedUser && pass === storedPass) {
    alert('Login realizado com sucesso!');
    window.location.href = 'painel.html'; // Vai para a área do aluno
  } else {
    alert('Usuário ou senha inválidos.');
  }
}

function register() {
  const user = prompt('Digite seu nome de usuário ou e-mail:');
  const pass = prompt('Crie uma senha:');

  if (user && pass) {
    localStorage.setItem('user', user);
    localStorage.setItem('pass', pass);
    alert('Cadastro feito com sucesso! Agora você pode entrar.');
  }
}
