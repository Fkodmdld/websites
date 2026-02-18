// ===============================
// 1️⃣ Load Cart
// ===============================
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let selectedPay = "";

const payTotal = document.getElementById("payTotal");
const qrBox = document.getElementById("qrBox");
const qrImg = document.getElementById("qrImg");


// ===============================
// 2️⃣ Update Cart UI
// ===============================
function updateCartUI() {
    const list = document.getElementById("cartList");
    if (!list) return;

    list.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} x${item.qty} = $${(item.price * item.qty).toFixed(2)}`;
        list.appendChild(li);
    });

    const total = getTotal();
    if (payTotal) payTotal.innerText = `សរុប: $${total.toFixed(2)}`;
}

function getTotal() {
    return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

updateCartUI();


// ===============================
// 3️⃣ Select QR Payment
// ===============================
function selectPay(type) {
    selectedPay = type;

    if (!qrBox || !qrImg) return;

    qrBox.classList.remove("hidden");

    if (type === "ABA") qrImg.src = "image/images.Q&R ABA.jpg";
    else if (type === "ACLEDA") qrImg.src = "image/images.Q&R ACLEDA.jpg";
    else if (type === "FTB") qrImg.src = "image/images.Q&R FTB.jpg";
    else qrBox.classList.add("hidden");
}


// ===============================
// 4️⃣ Telegram Function (ONE ONLY)
// ===============================
function sendTelegram(paymentMethod, total) {

    const botToken = "8415087983:AAHDEIHDa38GXgJzrNmPfNdSHY7n0L04kbA";
    const chatId = "6581501037";

    // Get Date & Time
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const formattedDate = `${day}/${month}/${year} - ${hours}:${minutes}`;

    let message = `🛍️ NEW ORDER\n`;
    message += `📅 ${formattedDate}\n`;
    message += `💳 Payment: ${paymentMethod}\n`;
    message += `━━━━━━━━━━━━\n\n`;

    cart.forEach(item => {
        message += `• ${item.name} x${item.qty} = $${(item.price * item.qty).toFixed(2)}\n`;
    });

    message += `\n━━━━━━━━━━━━\n`;
    message += `💰 TOTAL: $${total.toFixed(2)}\n`;
    message += `━━━━━━━━━━━━`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        })
        .then(res => res.json())
        .then(data => {
            if (!data.ok) {
                console.error("Telegram Error:", data.description);
            }
        })
        .catch(err => console.error(err));
}


// ===============================
// 5️⃣ Confirm QR Payment
// ===============================
function confirmPay() {

    if (!selectedPay) {
        alert("សូមជ្រើសរើស Payment Method");
        return;
    }

    if (cart.length === 0) {
        alert("Cart ទទេ");
        return;
    }

    const total = getTotal();

    // Save Order
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({
        id: Date.now(),
        date: new Date().toLocaleString(),
        items: cart,
        total: total,
        payment: selectedPay,
        status: "Paid"
    });

    localStorage.setItem("orders", JSON.stringify(orders));

    // Send Telegram
    sendTelegram(selectedPay, total);

    // Clear Cart
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("✅ Payment Success");
    window.location.href = "success.html";
}


// ===============================
// 6️⃣ Mobile App Payments
// ===============================
function payWithABA() {
    openMobilePay("ABA", "https://link.payway.com.kh/ABAPAYVT416502I");
}

function payWithKBPRASAC() {
    openMobilePay("KB PRASAC", "https://kbp.onelink.me/BBfd/p64sy8c6");
}

function payWithPAYPAL() {
    openMobilePay("PayPal", "https://www.paypal.com");
}

function openMobilePay(method, url) {

    if (cart.length === 0) {
        alert("សូមជ្រើសរើសទំនិញជាមុន!");
        return;
    }

    const total = getTotal();

    // បើក Payment Link
    window.open(`${url}?amount=${total.toFixed(2)}`, "_blank");

    // Send Telegram
    sendTelegram(method, total);

    // Save Order
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({
        id: Date.now(),
        date: new Date().toLocaleString(),
        items: cart,
        total: total,
        payment: method,
        status: "Paid"
    });

    localStorage.setItem("orders", JSON.stringify(orders));

    // ✅ Clear Cart
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    // ✅ Update UI (អោយ total = 0)
    updateCartUI();

    alert(`🎉 ${method} Payment Opened!`);
}