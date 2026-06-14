function recommendCrop() {

    let soil = document.getElementById("soil").value;
    let season = document.getElementById("season").value;
    let water = document.getElementById("water").value;
    let temp = document.getElementById("temp").value;

    let result = cropsData.find(crop =>
        crop.soil === soil &&
        crop.season === season &&
        crop.water === water &&
        crop.temp === temp
    );

    if (result) {
        localStorage.setItem("recommendedCrop", JSON.stringify(result));
        window.location.href = "result.html";
    } else {
        alert("No exact match found. Try different inputs.");
    }
}