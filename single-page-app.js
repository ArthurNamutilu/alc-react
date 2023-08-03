window.onload = () => {
    const rootlement = document.getElementById("root");
    const button = document.createElement("button");
    button.innerHTML = "Show current date";
    button.addEventListener("click", () => {
        button.innerHTML = new Date().toString();
    });
    rootlement.appendChild(button);
};