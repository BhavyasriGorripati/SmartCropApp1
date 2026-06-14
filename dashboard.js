let user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user) {
    alert("Please login first");
    window.location.href = "login.html";
}

document.getElementById("welcome").innerText =
    "Welcome " + user.name + "! 🌱";

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}