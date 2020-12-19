// const colorThief = new ColorThief();
// const img = document.querySelector('img');

// // Make sure image is finished loading
// if (img.complete) {
//     colorThief.getColor(img);
// } else {
//     image.addEventListener('load', function() {
//     colorThief.getColor(img);
//     });
// }

// Cursor
let cursor = document.getElementById("cursor");
let primaryBtn = document.getElementsByClassName("btn-primary")[0];

document.addEventListener("mousemove", (pos) => {
    cursor.style.left = pos.clientX + "px"
    cursor.style.top = (pos.clientY + scrollY) + "px"
});

primaryBtn.addEventListener("mouseover", () => {
    cursor.classList.add("cursor-hover");
});

primaryBtn.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
});