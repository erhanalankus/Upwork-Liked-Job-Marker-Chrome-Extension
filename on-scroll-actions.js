window.onscroll = function() {
    var hearts = document.getElementsByClassName("air-icon-favorite-activated");
    for (let heart of hearts) {
        heart.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = 'lightgreen';
    }

    var ads = document.getElementsByClassName("job-tile");
    chrome.storage.sync.get('hiddenCountries', function(data) {
        for (let ad of ads) {
            let location = ad.querySelector('.client-location');
            if (location) {
                if (data.hiddenCountries.indexOf(location.innerText) > 0) {
                    ad.style.opacity = '0.1';
                }
            }
        }
    });
}