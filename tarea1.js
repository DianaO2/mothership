document.getElementById("mostrarBtn").addEventListener("click", function() {
    var opinion = document.getElementById("opinion");
    if (opinion.style.display === "none") {
        opinion.style.display = "block";
    } else {
        opinion.style.display = "none";
    }
});