function showHideElement() {
    let element = document.getElementById("myLinks");
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}