window.onscroll = function() {
    var hearts = document.getElementsByClassName("air-icon-favorite-activated");
    for(let heart of hearts){
        heart.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = 'lightgreen';
    }
 }