let orders = JSON.parse(localStorage.getItem("orders")) || [];
let box = document.getElementById("orderList");

if (orders.length === 0) {
    box.innerHTML = "<p>មិនទាន់មាន Order ទេ</p>";
}

orders.slice().reverse().forEach(o => {
    box.innerHTML += `
    <div class="order" onclick="viewOrder(${o.id})">
      <h4>Order #${o.id}</h4>
      <p>${o.date}</p>
      <p>Total: $${o.total}</p>
      <span class="badge ${o.status.toLowerCase()}">${o.status}</span>
    </div>
  `;
});

function viewOrder(id) {

    window.location.href = "order-detail.html?id=" + id;
}