const products = [
    { name: "Beef Wellington", price: 0.1, cat: "food", img: "Food/images.Beef Wellington.jpg" },
    { name: "Burger", price: 4, cat: "food", img: "Food/images.Burger.jpg" },
    { name: "amuk", price: 3, cat: "food", img: "Food/images.amuk.jpg" },
    { name: "Prahok", price: 3, cat: "food", img: "Food/images.b'huk.jpg" },
    { name: "Fried rice", price: 3, cat: "food", img: "Food/images.bay.jpg" },
    { name: "Fried rice", price: 3, cat: "food", img: "Food/images.Fried Rice.jpg" },
    { name: "Braised Pork", price: 5, cat: "food", img: "Food/images.Braised Pork .jpg" },
    { name: "Fried Rice", price: 7, cat: "food", img: "Food/images.Fried Rice.jpg" },
    { name: "Fried Chicken", price: 8, cat: "food", img: "Food/images.Fried Chicken.jpg" },
    { name: "Golden Crumbed Pork", price: 4, cat: "food", img: "Food/images.Golden Crumbed Pork Cutlets.jpg" },
    { name: "Kung Pao Chicken", price: 7.5, cat: "food", img: "Food/images.Kung Pao Chicken.jpg" },
    { name: "Kuy Teav Chlong Dean", price: 4, cat: "food", img: "Food/images.Kuy Teav Chlong Dean.jpg" },
    { name: "Kuy Teav Recipe", price: 4, cat: "food", img: "Food/images.Kuy Teav Recipe.jpg" },
    { name: "Kuy Teav", price: 1.2, cat: "food", img: "Food/images.kuyteav.jpg" },
    { name: "Micha", price: 6, cat: "food", img: "Food/images.m'chha.jpg" },
    { name: "Pork With Cream Sauce", price: 4, cat: "food", img: "Food/images.Pork with cream sauce.jpg" },
    { name: "Ridiculously Tasty Roast Beef", price: 8, cat: "food", img: "Food/images.Ridiculously Tasty Roast Beef.jpg" },
    { name: "Roasted", price: 6, cat: "food", img: "Food/images.Roasted Chicken.jpg" },
    { name: "Seafood", price: 15, cat: "food", img: "Food/images.seafood.jpg" },
    { name: "Secret Ingredient Beef Stew", price: 4, cat: "food", img: "Food/images.Secret Ingredient Beef Stew.jpg" },
    { name: "Spicy Chicken", price: 12, cat: "food", img: "Food/images.Spicy Chicken.jpg" },
    { name: "Sweet & Sour Pork", price: 8, cat: "food", img: "Food/images.Sweet & Sour Pork.jpg" },
    { name: "subchin", price: 10, cat: "food", img: "Food/images.subchin.jpg" },
    { name: "Wontion", price: 6, cat: "food", img: "Food/images.Wonton Soup.jpg" },
    { name: "Sokhok", price: 4, cat: "food", img: "Food/sokhok.jpg" },
    { name: "Summa Health", price: 5, cat: "food", img: "Food/Summa Health.webp" },

    { name: "BMW X6", price: 460.247, cat: "car", img: "car/BMW X6.jpg" },
    { name: "Lamborghini's New Aventador S Roadster Starts", price: 90000, cat: "car", img: "car/images.Lamborghini's New Aventador S Roadster Starts.jpg" },
    { name: "Lamborghini Aventador", price: 200000, cat: "car", img: "car/Lamborghini Aventador.jpg" },
    { name: "Maruti Suzuki Cars Price 2025", price: 38000, cat: "car", img: "car/Maruti Suzuki Cars Price 2025.webp" },
    { name: "Maruti Suzuki Cars Price 2026", price: 45000, cat: "car", img: "car/Maruti Suzuki Cars Price 2026.avif" },
    { name: "Toyota India", price: 30000, cat: "car", img: "car/images.Toyota India.jpg" },

    { name: "iPhone 17", price: 2000, cat: "phone", img: "phone/images.iPhone 17.jpg" },
    { name: "iPhone 16 Pro Max", price: 1800, cat: "phone", img: "phone/images.iPhone 16 Pro Max.jpg" },
    { name: "iPhone 15", price: 1650, cat: "phone", img: "phone/images.iPhone 15.jpg" },

    { name: "ENTWINO Intel Core i5 (16 GB / 500 GB / Windows 11)", price: 1500, cat: "computer", img: "computer/images.ENTWINO Intel Core i5 .jpg" },
    { name: "Gaming PC Deals", price: 500, cat: "computer", img: "computer/images.Gaming PC Deals15.jpg" },
    { name: "CHIST Budget Gaming Pc Full Setup(Core I5 750-8Gb Ram -256Gb Ssd-500 Gb Hdd-Gt 710 2Gb,19)", price: 1500, cat: "computer", img: "computer/images.CHIST Budget Gaming Pc .jpg" },
    { name: "Kick-Ass Gaming PC for Less Than", price: 999, cat: "computer", img: "computer/images.Ass Gaming PC.jpg" },
    { name: "Pc Building GIFs - Find & Share on GIPHY", price: 980, cat: "computer", img: "computer/images.Pc Building.jpg" },
    { name: "Pc Gaming GIFs - Find & Share on GIPHY", price: 670, cat: "computer", img: "computer/images. Find & Share on GIPHY.jpg" },
    { name: "Laptop Cambodia", price: 980, cat: "computer", img: "computer/images. Laptop Cambodia.jpg" },
    { name: "ASUS ROG", price: 780, cat: "computer", img: "computer/images.Asus ROG Scar.jpg" },
    { name: "ASUS", price: 290, cat: "computer", img: "computer/images.ASUS.jpg" },
    { name: "New Build - My First REAL gaming PC : r/Corsair", price: 380, cat: "computer", img: "computer/images.New Build.jpg" },
    { name: "ZOTAC GAMING GeForce RTX 5090 AMP Extreme INFINITY", price: 980, cat: "computer", img: "computer/images.5090.jpg" },
    { name: "CPU LCD screen GIF", price: 760, cat: "computer", img: "computer/images.CPU LCD screen GIF.jpg" },
    { name: "Keybord", price: 25, cat: "computer", img: "computer/Keyboard.gif" },

    { name: "Smart watch 20 Ultra", price: 30, cat: "smart watches", img: "smart-wart/smart watch 20 Ultra.webp" },
    { name: "A58 Plus Ladies Smart Watch + Jewelry Gift Box", price: 30, cat: "smart watches", img: "smart-wart/images.A58.jpg" },
    { name: "Sekonda Active Plus Smart Watch", price: 15, cat: "smart watches", img: "smart-wart/images.Sekonda Active Plus Smart Watch.jpg" },
    { name: "A68 Plus Smart Watch and Jewellery Gift Set ", price: 25, cat: "smart watches", img: "smart-wart/images.A68 Plus.jpg" },
    { name: "Artichoke 6 in 1 Accessories Gift Set ", price: 17, cat: "smart watches", img: "smart-wart/images.Artichoke 6 in 1.jpg" },
    { name: "Rainbow Dial Rolex Smartwatch", price: 99, cat: "smart watches", img: "smart-wart/images.Rainbow Dial Rolex Smartwatch.jpg" },
    { name: "Watchface Live Wallpaper 89", price: 100, cat: "smart watches", img: "smart-wart/images.Watchface Live Wallpaper 89.jpg" },
    { name: "Smart Watches Rolex Heartbeat", price: 79, cat: "smart watches", img: "smart-wart/images.Rainbow Dial Rolex Smartwatch.jpg" },
    { name: "Apple Watch Face UI fix - GIF", price: 55, cat: "smart watches", img: "smart-wart/images.App watch.jpg" },
    { name: "Watchface Live Wallpaper 149 ", price: 37, cat: "smart watches", img: "smart-wart/images.Watchface Live Wallpaper 149 .jpg" },
    { name: "Smart Watch Wallpaper Apple", price: 30, cat: "smart watches", img: "smart-wart/images.Smart Watch Wallpaper Apple.jpg" },
    { name: "Series 9 Pro 7 in 1 Smart Watch with HD 1.83 Display Bluetooth Calling", price: 25, cat: "smart watches", img: "smart-wart/images.Sekonda Active Plus Smart Watch.jpg" }


];

const count = 0;
const total = 0;

function show(list) {
    let html = "";
    list.forEach(p => {
        html += `
    <div class="card">
      <img src="${p.img}">
      <h4>${p.name}</h4>
      <div class="price">$${p.price}</div>
        
        <button onclick="addCart('${p.name}', ${p.price}, '${p.img}')">
          +
        </button>
         <button onclick="cancelCart('${p.name}', ${p.price}, '${p.img}')">
         -
        </button>
    </div>`;
    });
    document.getElementById("products").innerHTML = html;
}

show(products);


function addCart(price) {
    count++;
    total += price;
    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = total;

}

function cancelCart(price) {
    count--;
    total += price;
    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = total;

}


function checkout() {
    if (count == 0) {
        alert("សូមជ្រើសរើសទំនិញជាមុន");
    } else {
        alert("Order Success!\nTotal: $" + total);
        count = 0;
        total = 0;
        document.getElementById("count").innerText = 0;
        document.getElementById("total").innerText = 0;

    }
}

function filter(cat) {
    if (cat === "all") show(products);
    else show(products.filter(p => p.cat === cat));
}

function searchProduct() {
    let v = document.getElementById("search").value.toLowerCase();
    show(products.filter(p => p.name.toLowerCase().includes(v)));
}

function goHome() {
    setActive(0);
    document.getElementById("products").style.display = "grid";
}

function goSearch() {
    setActive(1);
    document.getElementById("search").focus();
}

function goCart() {
    setActive(2);
    alert("🛒 Cart\nItems: " + count + "\nTotal: $" + total);
}

function goAccount() {
    setActive(3); // highlight navbar

    // Check if user is logged in (replace this with your login check logic)
    const user = localStorage.getItem("userName"); // ឧ. ការរក user ដែល login
    if (user) {
        // មាន login → ទៅ Account Page
        window.location.href = "account.html";
    } else {
        // មិន login → បង្ហាញ alert និងទៅ login page
        alert("សូមចូលគណនីរបស់អ្នកមុន! 👤");
        window.location.href = "login.html";
    }
}


function setActive(index) {
    document.querySelectorAll(".nav-item").forEach((item, i) => {
        item.classList.toggle("active", i === index);
    });
}


// update cart badge
function updateCartCount() {
    document.getElementById("cartCount").innerText = count;
}

function goCart() {
    window.location.href = "cart.html";
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addCart(name, price, img) {
    let found = cart.find(i => i.name === name);

    if (found) {
        found.qty++;
    } else {
        cart.push({
            name,
            price,
            img,
            qty: 1,
            checked: true
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

function cancelCart(name, price, img) {
    let found = cart.find(i => i.name === name);

    if (found) {
        found.qty--;
    } else {
        cart.push({
            name,
            price,
            img,
            qty: 1,
            checked: true
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    let count = 0;
    let total = 0;

    cart.forEach(i => {
        count += i.qty;
        total += i.price * i.qty;
    });

    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = total.toFixed(2);
    document.getElementById("cartCount").innerText = count;
}
let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push({
    id: Date.now(),
    total: total,
    date: new Date().toLocaleString(),
    status: "Paid"
});
const accountCombo = document.getElementById("accountCombo");
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

function renderAccountCombo() {
    if (loggedUser) {
        accountCombo.innerHTML = `
            <div class="user-info">
                <img src="${loggedUser.profilePic || 'image/default-avatar.png'}" 
                     alt="Avatar" style="width:35px; height:35px; border-radius:50%; vertical-align:middle;">
                <span>${loggedUser.name}</span>
                <button onclick="logout()">Logout</button>
            </div>
        `;
    } else {
        accountCombo.innerHTML = `
            <button onclick="window.location.href='login.html'">Login</button>
            <button onclick="window.location.href='signup.html'">Sign Up</button>
        `;
    }
}

function logout() {
    localStorage.removeItem("loggedUser");
    window.location.reload();
}

// Bottom nav Account click
function goAccount() {
    if (loggedUser) {
        window.location.href = "account.html";
    } else {
        window.location.href = "login.html";
    }
}

renderAccountCombo();

localStorage.setItem("orders", JSON.stringify(orders));