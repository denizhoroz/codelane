
function selectLang(buttonId) {
    const selected_lang = buttonId;
    localStorage.setItem("selected_lang", selected_lang);
    updateHTML()
}

function updateHTML() {
    window.location.href = "main.html";
}

document.getElementById("python").addEventListener("click", () => selectLang("python"))
document.getElementById("c").addEventListener("click", () => selectLang("c"))
document.getElementById("javascript").addEventListener("click", () => selectLang("javascript"))
