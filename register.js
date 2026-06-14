function register() {

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value
    };

    localStorage.setItem(user.email, JSON.stringify(user));

    showPopup("Registered Successfully");

    window.location.href = "login.html";
}
function showPopup(message) {

    let popup = document.getElementById("popup");
    let text = document.getElementById("popupText");

    text.innerText = message;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}