// Clickable buttons
let windowBtns = document.getElementsByClassName("pbtn");
let windows = document.getElementsByClassName("window");

let windowCloseBtns = document.getElementsByClassName("close");
let windowMinimiseBtns = document.getElementsByClassName("minimise");
let windowFullBtns = document.getElementsByClassName("full");

for (let i = 0; i < windowBtns.length; i++) {
    windowBtns[i].addEventListener("click", () => {
        let windw = document.getElementById(windowBtns[i].id+"win");
        windw.parentElement.classList.add("hide");
        windw.classList.add("active");
        document.body.style.overflow = "hidden";
    });
}

for (let i = 0; i < windowCloseBtns.length; i++) {
    windowCloseBtns[i].addEventListener("click", () => {
        windowCloseBtns[i].parentElement.parentElement.classList.remove("active");
        windowCloseBtns[i].parentElement.parentElement.classList.remove("fullscreen");
        windowCloseBtns[i].parentElement.parentElement.parentElement.classList.remove("hide");
        document.body.style.overflow = "auto";
    });
}

for (let i = 0; i < windowFullBtns.length; i++) {
    windowFullBtns[i].addEventListener("click", () => {
        let windw = windowFullBtns[i].parentElement.parentElement;
        if (windowFullBtns[i].parentElement.parentElement.classList.contains("fullscreen")) {
            windowFullBtns[i].parentElement.parentElement.classList.remove("fullscreen");
        }
        else {
            windowFullBtns[i].parentElement.parentElement.classList.add("fullscreen");
            windw.style.top = "0px";
            windw.style.left = "0px";
        }
    });
}

for (let i = 0; i < windowMinimiseBtns.length; i++) {
    windowMinimiseBtns[i].addEventListener("click", () => {
        windowMinimiseBtns[i].parentElement.parentElement.classList.remove("active");
        windowMinimiseBtns[i].parentElement.parentElement.classList.remove("fullscreen");
        windowMinimiseBtns[i].parentElement.parentElement.parentElement.classList.remove("hide");
        document.body.style.overflow = "auto";
    });
}