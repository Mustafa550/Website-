// chatbot.js

const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");
const chatBody = document.getElementById("chat-body");

const botResponses = {
  "merhaba": "Merhaba! Size nasıl yardımcı olabilirim?",
  "ürünler": "🛒 Şu anda script, ddos, sms bomber ve daha birçok ürün satışta.",
  "site": "Bu site Specter tarafından tasarlanmıştır.",
  "kim yaptı": "Bu siteyi Specter yaptı 👨‍💻",
  "sertifika": "CEH, OSCP, CompTIA gibi sertifikalar önerilir.",
  "fiyat": "Fiyatlar ürün detaylarına göre değişiklik gösterir.",
  "yardım": "Yardıma ihtiyacınız varsa buradayım 😊"
};

// Kullanıcının mesajını gönder
chatSend.addEventListener("click", () => {
  const msg = chatInput.value.trim().toLowerCase();
  if (msg === "") return;

  appendMessage("Sen", msg);
  chatInput.value = "";

  const reply = botResponses[msg] || "Üzgünüm, bu konuda bir şey bilmiyorum. 'yardım' yazarak destek alabilirsiniz.";
  setTimeout(() => {
    appendMessage("Bot", reply);
  }, 500);
});

// Mesajları ekrana yaz
function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("chat-msg");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}