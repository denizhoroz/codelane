
function select_lang(buttonId) {
    const selected_lang = buttonId;
    localStorage.setItem("selected_lang", selected_lang);
    updateHTML()
}

function updateHTML() {
    window.location.href = "main.html";
}

document.getElementById("python").addEventListener("click", () => select_lang("python"))
document.getElementById("c").addEventListener("click", () => select_lang("c"))
document.getElementById("javascript").addEventListener("click", () => select_lang("javascript"))
