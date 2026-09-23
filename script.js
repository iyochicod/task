document.addEventListener("DOMContentLoaded", function() {
    const statusElement = document.getElementById("status");
    if (statusElement) {
        statusElement.innerText = "Файл script.js успішно підключено!";
        statusElement.style.color = "#27ae60";
        statusElement.style.fontWeight = "bold";
    }
});
