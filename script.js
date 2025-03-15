document.addEventListener("DOMContentLoaded", () => {
    const libraryEntry = document.getElementById("libraryEntry");
    const stickerLibrary = document.getElementById("stickerLibrary");
    const closeLibrary = document.getElementById("closeLibrary");
    const stickers = document.querySelectorAll(".sticker");
    const dashboard = document.getElementById("dashboard");

    libraryEntry.addEventListener("click", () => {
        stickerLibrary.classList.toggle("open");
    });
    closeLibrary.addEventListener("click", () => {
        stickerLibrary.classList.remove("open");
    });

    //Drag,Drop
    stickers.forEach(sticker => {
        sticker.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.src);
        });
    });
    dashboard.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    dashboard.addEventListener("drop", (e) => {
        e.preventDefault();
        let imageUrl = e.dataTransfer.getData("text/plain");

        let newSticker = document.createElement("img");
        newSticker.src = imageUrl;
        newSticker.classList.add("sticker");
        dashboard.appendChild(newSticker);
    });
});