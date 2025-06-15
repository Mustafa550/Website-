// script.js

// Giriş/Kayıt kutusu
const loginBtn = document.getElementById("login-btn");
const loginBox = document.getElementById("login-box");

loginBtn.addEventListener("click", () => {
  loginBox.classList.toggle("active");
});

// Profil kutusu
const profileBtn = document.getElementById("profile-btn");
const profileBox = document.getElementById("profile-box");

profileBtn.addEventListener("click", () => {
  profileBox.classList.toggle("active");
});

// Sepet kutusu
const cartBtn = document.getElementById("cart-btn");
const cartBox = document.getElementById("cart-box");

cartBtn.addEventListener("click", () => {
  cartBox.classList.toggle("active");
});

// Ürünleri sepete ekleme
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

// Sepetten ürün çıkarma
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Sepeti güncelle
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name}</span>
      <span>${item.price}₺</span>
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    cartItems.appendChild(div);
  });

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
  document.getElementById("cart-total").innerText = `Toplam: ${total}₺`;
}

// Ödemeye geç (WhatsApp)
function checkout() {
  if (cart.length === 0) {
    alert("Sepetiniz boş!");
    return;
  }

  let message = "Merhaba! Şu ürünleri satın almak istiyorum:\n";
  cart.forEach(item => {
    message += `- ${item.name} (${item.price}₺)\n`;
  });

  const phone = "05426354386";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Chatbot kutusunu aç/kapat
const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");

chatToggle.addEventListener("click", () => {
  chatWindow.classList.toggle("active");
});