const todgle = document.getElementById("darkmode");
const body = document.querySelector("body");

const changeMode = () => {
    console.log(todgle.checked);
    body.classList.toggle("darkmode");
}

todgle.addEventListener("change", changeMode)