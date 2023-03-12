function hide() {
    let elements = document.getElementsByClassName("hidescroll");
    for (let i = 0; i < elements.length; i++){
        elements[i].clientWidth = elements[i].offsetWidth - elements[i].clientWidth;
    };
}