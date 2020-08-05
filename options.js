function setHideFunctionality() {
    let submitButton = document.getElementById("hideCountryForm").elements["submitFormButton"];
    submitButton.addEventListener('click', function() {
        addCountryToBlacklist(document.getElementById("hideCountryForm").elements["countryName"]);
    });
}

function listHiddenCountries() {
    chrome.storage.sync.get('hiddenCountries', function(data) {
        let hiddenCountriesList = document.getElementById("hiddenCountriesList");
        data.hiddenCountries.forEach(countryName => {
            let listItem = document.createElement("li");
            listItem.appendChild(document.createTextNode(countryName));
            hiddenCountriesList.appendChild(listItem);
        });
    });
}

function addCountryToBlacklist(countryName) {
    alert(countryName.value);
}

setHideFunctionality();
listHiddenCountries();