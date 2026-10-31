const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;