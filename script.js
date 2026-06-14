function registerUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Registered Successfully");
    window.location.href = "login.html";
}

function loginUser() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (
        user === localStorage.getItem("user") &&
        pass === localStorage.getItem("pass")
    ) {
        alert("Login Successful");
        window.location.href = "home.html";
    } else {
        alert("Invalid Login");
    }
}

function saveInput() {
    localStorage.setItem("soil", document.getElementById("soil").value);
    localStorage.setItem("season", document.getElementById("season").value);
    localStorage.setItem("water", document.getElementById("water").value);
    localStorage.setItem("temp", document.getElementById("temp").value);

    window.location.href = "result.html";
}

function showResult() {
    let soil = localStorage.getItem("soil");
    let crop = "Rice";

    if (soil === "Black soil") crop = "Cotton";
    if (soil === "Red soil") crop = "Groundnut";
    if (soil === "Clay soil") crop = "Rice";
    if (soil === "Sandy soil") crop = "Millets";

    document.getElementById("cropName").innerText = crop;
    document.getElementById("cropImg").src = "images/" + crop.toLowerCase() + ".jpg";

    let pesticides = {
        Rice: "Neem Oil",
        Wheat: "Organic Spray",
        Cotton: "Insecticide A",
        Groundnut: "Fungicide B",
        Millets: "Bio Pesticide"
    };

    document.getElementById("pesticide").innerText = pesticides[crop] || "General Spray";
}