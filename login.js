function login() {

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    // simple validation
    if (email === "" || pass === "") {
        alert("Please fill all fields");
    } 
    else {
        alert("Login Successful");

        // redirect to crops page
        window.location.href = "crops.html";
    }
}