let params = new URLSearchParams(window.location.search);
let id = params.get("id");

let orders = JSON.parse(localStorage.getItem("orders")) || [];
let order = orders.find(o => o.id == id);

let box = document.getElementById("detail");

if (!order) {
    box.innerHTML = "<p>❌ Order not found</p>";
} else {
    box.innerHTML = `
    <h4>Order #${order.id}</h4>
    <p>${order.date}</p>

    <span class="status ${order.status}">
      ${order.status.toUpperCase()}
    </span>

    <hr>

    ${order.items.map(i=>`
      <div class="item">
        <span>${i.name} x ${i.qty}</span>
        <span>$${i.price * i.qty}</span>
      </div>
    `).join("")}

    <hr>
    <h3>Total: $${order.total}</h3>

    ${order.status === "pending" ? `
      <button onclick="uploadSlip()">📷 Upload Payment Slip</button>
    ` : ""}
  `;
}

function uploadSlip(){
  alert("📷 Upload Slip (Next Step)");
}