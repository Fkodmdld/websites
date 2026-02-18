// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartList = document.getElementById("cartList");
const totalEl = document.getElementById("total");
const checkAll = document.getElementById("checkAll");

// Render Cart
function renderCart() {
    cartList.innerHTML = "";
    let total = 0;
    let allChecked = cart.length > 0;

    cart.forEach((item, index) => {
        if (item.checked === undefined) item.checked = true;

        if (item.checked) {
            total += item.price * item.qty;
        } else {
            allChecked = false;
        }

        cartList.innerHTML += `
      <div class="item">
        <input type="checkbox"
          ${item.checked ? "checked" : ""}
          onchange="toggleItem(${index})">

        <img src="${item.img}">

        <div class="info">
          <h4>${item.name}</h4>
          <p>$${item.price}</p>
        </div>

        <div class="qty">
          <button onclick="changeQty(${index}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>

        <div class="remove" onclick="removeItem(${index})">✖</div>
      </div>
    `;
    });

    totalEl.innerText = total.toFixed(2);
    checkAll.checked = allChecked;
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Toggle single item
function toggleItem(i) {
    cart[i].checked = !cart[i].checked;
    renderCart();
}

// Toggle all
function toggleAll(cb) {
    cart.forEach(item => item.checked = cb.checked);
    renderCart();
}

// Change quantity
function changeQty(i, n) {
    cart[i].qty += n;
    if (cart[i].qty <= 0) {
        cart.splice(i, 1);
    }
    renderCart();
}

// Remove item
function removeItem(i) {
    cart.splice(i, 1);
    renderCart();
}

// Checkout
function checkout() {
    let selected = cart.filter(i => i.checked);
    if (selected.length === 0) {
        alert("សូមជ្រើសរើសទំនិញ");
        return;
    }

    let total = selected.reduce((sum, i) => sum + i.price * i.qty, 0);
    alert("🛍 Order Success\nTotal: $" + total.toFixed(2));

    // Remove checked items
    cart = cart.filter(i => !i.checked);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}



let orders = JSON.parse(localStorage.getItem("orders")) || [];

function checkout() {
    let selected = cart.filter(i => i.checked);
    if (selected.length === 0) {
        alert("សូមជ្រើសរើសទំនិញ");
        return;
    }

    let total = selected.reduce((s, i) => s + i.price * i.qty, 0);

    orders.push({
        id: Date.now(),
        items: selected,
        total: total,
        date: new Date().toLocaleString(),
        status: "Pending",
        slip: ""
    });

    localStorage.setItem("orders", JSON.stringify(orders));

    cart = cart.filter(i => !i.checked);
    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "order-history.html";
}

function checkout() {
    let selected = cart.filter(i => i.checked);
    if (selected.length === 0) {
        alert("សូមជ្រើសរើសទំនិញ");
        return;
    }

    let total = selected.reduce((s, i) => s + i.price * i.qty, 0);

    // SAVE ORDER
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({
        id: Date.now(),
        total: total,
        date: new Date().toLocaleString(),
        status: "Paid"
    });
    localStorage.setItem("orders", JSON.stringify(orders));

    // remove checked items
    cart = cart.filter(i => !i.checked);
    localStorage.setItem("cart", JSON.stringify(cart));

    // go success page
    window.location.href = "success.html";
}

// First load
renderCart();

function checkout() {
    let selected = cart.filter(i => i.checked);
    if (selected.length === 0) {
        alert("សូមជ្រើសរើសទំនិញ");
        return;
    }
    window.location.href = "payment.html";
}