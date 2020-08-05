function setHideFunctionality() {
    let submitButton = document.getElementById("hideCountryForm").elements["submitFormButton"];
    submitButton.addEventListener('click', function() {
        addCountryToBlacklist(document.getElementById("hideCountryForm").elements["countryName"]);
    });
}

function setRemoveFunctionality() {
    let buttonsArray;
    setTimeout(() => {
        buttonsArray = convertToArray();
        buttonsArray.forEach(button => {
            button.addEventListener('click', function() {
                removeCountryFromBlackList(button.getAttribute("countryName"));
            });
        });
    });

    function convertToArray() {
        let removeCountryButtons = document.getElementsByClassName("remove-country-button");
        let array = Array.from(removeCountryButtons);
        return array;
    }


}

function listHiddenCountries() {
    chrome.storage.sync.get('hiddenCountries', function(data) {
        let hiddenCountriesList = document.getElementById("hiddenCountriesList");
        data.hiddenCountries.forEach(countryName => {
            let listItem = document.createElement("li");
            listItem.appendChild(document.createTextNode(countryName));
            hiddenCountriesList.appendChild(listItem);

            let removeButton = document.createElement("button");
            removeButton.setAttribute("countryName", countryName);
            removeButton.setAttribute("class", "remove-country-button");
            removeButton.appendChild(document.createTextNode("Remove"));
            listItem.appendChild(removeButton);
        });
    });
}

function addCountryToBlacklist(countryName) {
    alert('add ' + countryName.value);
}

function removeCountryFromBlackList(countryName) {
    alert('remove ' + countryName)
}

setHideFunctionality();
listHiddenCountries();
setRemoveFunctionality();