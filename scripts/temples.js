const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".nav-links");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});