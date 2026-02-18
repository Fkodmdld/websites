const userInfo = document.getElementById("userInfo");
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

if (loggedUser) {
    userInfo.innerHTML = `
        <p><strong>Name:</strong> ${loggedUser.name}</p>
        <p><strong>Email:</strong> ${loggedUser.email}</p>
    `;
} else {
    // If not logged in → redirect to login
    window.location.href = "login.html";
}

function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "login.html";
}