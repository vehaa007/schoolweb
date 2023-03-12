const textdivs = document.getElementsByClassName("blurback");
const textshits = document.getElementsByClassName("projp");

for (let i = 0; i < textdivs.length; i++) {
    textdivs[i].addEventListener("mouseenter", () => {
        for (let ii = 0; ii < textdivs[i].childNodes.length; ii++) {
            textdivs[i].childNodes[ii].classList.add("mousehover");
        }
    });
    textdivs[i].addEventListener("mouseleave", () => {
        for (let ii = 0; ii < textdivs[i].childNodes.length; ii++) {
            textdivs[i].childNodes[ii].classList.remove("mousehover");
        }
    });
}