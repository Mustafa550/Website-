const USER = "admin";
const PASS = "admin123";

function loginAdmin() {
  const user = document.getElementById("adminUser").value;
  const pass = document.getElementById("adminPass").value;
  const error = document.getElementById("loginError");

  if (user === USER && pass === PASS) {
    document.getElementById("adminLogin").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  } else {
    error.textContent = "Kullanıcı adı veya şifre hatalı!";
  }
}

function addProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const desc = document.getElementById("productDesc").value;

  if (name && price && desc) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong> - ${price} TL<br><em>${desc}</em>`;
    document.getElementById("productList").appendChild(li);

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productDesc").value = "";
  }
}