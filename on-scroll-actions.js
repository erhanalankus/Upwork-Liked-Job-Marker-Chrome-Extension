window.onscroll = function() {
    let heartIcons = document.getElementsByClassName("up-icon");

    for (let heart of heartIcons) {        
        let pathNode = heart.getElementsByTagName("path")[0];
        if (!pathNode) {
            continue;
        }
        let dValueOfPathElement = pathNode.getAttribute("d");
        if (!dValueOfPathElement) {
            continue
        }
        if (dValueOfPathElement[1] == "7") {
            heart.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "lightgreen";
        }
    }
}