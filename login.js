function toggleForm() {
  const login = document.getElementById('loginForm');
  const register = document.getElementById('registerForm');
  const title = document.getElementById('formTitle');
  const message = document.getElementById('message');

  login.style.display = login.style.display === "none" ? "block" : "none";
  register.style.display = register.style.display === "none" ? "block" : "none";
  title.textContent = login.style.display === "none" ? "Kayıt Ol" : "Giriş Yap";
  message.textContent = "";
}

function register() {
  const user = document.getElementById('registerUser').value;
  const pass = document.getElementById('registerPass').value;

  if (user && pass) {
    localStorage.setItem('user', JSON.stringify({ user, pass }));
    document.getElementById('message').style.color = "green";
    document.getElementById('message').textContent = "Kayıt başarılı! Giriş yapabilirsiniz.";
  } else {
    document.getElementById('message').textContent = "Tüm alanları doldurun!";
  }
}

function login() {
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;
  const stored = JSON.parse(localStorage.getItem('user'));

  if (stored && user === stored.user && pass === stored.pass) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = "index.html"; // Ana sayfaya yönlendirme
  } else {
    document.getElementById('message').textContent = "Kullanıcı adı veya şifre hatalı!";
  }
}