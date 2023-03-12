// Decided to use a simpler, css-based method

// const textdivs = document.getElementsByClassName("blurback");
// const textshits = document.getElementsByClassName("projp");

// // Old hover system
// // for (let i = 0; i < textdivs.length; i++) {
// //     textdivs[i].addEventListener("mouseenter", () => {
// //         for (let ii = 0; ii < textdivs[i].getElementsByClassName("projp").length; ii++) {
// //             textdivs[i].getElementsByClassName("projp")[ii].hidden = false;
// //             textdivs[i].getElementsByClassName("projp")[ii].classList.add("mousehover");
// //         }
// //     });
// //     textdivs[i].addEventListener("mouseleave", () => {
// //         for (let ii = 0; ii < textdivs[i].getElementsByClassName("projp").length; ii++) {
// //             textdivs[i].getElementsByClassName("projp")[ii].hidden = true;
// //             textdivs[i].getElementsByClassName("projp")[ii].classList.remove("mousehover");
// //         }
// //     });
// // }

const revealBtns = document.getElementsByClassName("revealproj");
for (let i = 0; i < revealBtns.length; i++) {
    revealBtns[i].addEventListener("click", () => {
        for (let ii = 0; ii < revealBtns.length; ii++) {
            if (ii != i) {
                revealBtns[ii].classList.remove("floating");
            }
        }
        // // no need for this anymore
        // for (let element in textshits) {
        //     element.hidden = true;
        // };
        // for (let element in revealBtns[i].parentElement.getElementsByClassName("projp")) {
        //     element.hidden = !element.hidden;
        // };
        revealBtns[i].classList.toggle("floating");
    });
}