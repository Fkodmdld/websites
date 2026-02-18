const signupForm = document.getElementById("signupForm");
const signupMsg = document.getElementById("signupMsg");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
    const fileInput = document.getElementById("profilePicInput");
    const file = fileInput.files[0];

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(u => u.email === email)) {
        signupMsg.style.color = "red";
        signupMsg.innerHTML = "Email នេះបានប្រើរួចហើយ!";
        return;
    }

    function saveUser(profilePicBase64) {
        const newUser = {
            name,
            email,
            password,
            profilePic: profilePicBase64 || "image/default-avatar.png"
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Auto login
        localStorage.setItem("loggedUser", JSON.stringify(newUser));
        signupMsg.style.color = "green";
        signupMsg.innerHTML = "Sign Up ជោគជ័យ! Redirecting to Account...";

        setTimeout(() => {
            window.location.href = "account.html";
        }, 1000);
    }

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            saveUser(e.target.result);
        }
        reader.readAsDataURL(file);
    } else {
        saveUser();
    }
});