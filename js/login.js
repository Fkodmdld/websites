const loginForm = document.getElementById("loginForm");
const loginMsg = document.getElementById("loginMsg");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Store logged user
        localStorage.setItem("loggedUser", JSON.stringify(user));

        loginMsg.style.color = "green";
        loginMsg.innerHTML = "Login ជោគជ័យ! Redirecting...";

        setTimeout(() => {
            // Redirect logic: if came from index.html, stay; else go to account.html
            if (window.location.pathname.includes("index.html")) {
                window.location.reload(); // stay on index and update top bar
            } else {
                window.location.href = "account.html"; // go to profile page
            }
        }, 800);
    } else {
        loginMsg.style.color = "red";
        loginMsg.innerHTML = "Email ឬ Password មិនត្រឹមត្រូវ!";
    }
});