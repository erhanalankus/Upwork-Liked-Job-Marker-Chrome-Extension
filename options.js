function setHideFunctionality() {
    let submitButton = document.getElementById("hideCountryForm").elements["submitFormButton"];
    submitButton.addEventListener('click', function() {
        addCountryToBlacklist(document.getElementById("hideCountryForm").elements["countryName"]);
    });
}

function setRemoveFunctionality() {
    let buttonsArray;
    setTimeout(() => {
        buttonsArray = getRemoveCountryButtonsAsArray();
        buttonsArray.forEach(button => {
            button.addEventListener('click', function() {
                removeCountryFromBlackList(button.getAttribute("countryName"));
            });
        });
    });

    function getRemoveCountryButtonsAsArray() {
        let removeCountryButtonsHtmlCollection = document.getElementsByClassName("remove-country-button");
        let removeCountryButtonsArray = Array.from(removeCountryButtonsHtmlCollection);
        return removeCountryButtonsArray;
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
    chrome.storage.sync.get('hiddenCountries', function(data) {
        var arrayOfHiddenCountriesInStorage = data.hiddenCountries;
        arrayOfHiddenCountriesInStorage.push(countryName.value);
        arrayOfHiddenCountriesInStorage.sort(function(a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        chrome.storage.sync.set({ hiddenCountries: arrayOfHiddenCountriesInStorage });
    });
    location.reload();
}

function removeCountryFromBlackList(countryName) {
    chrome.storage.sync.get('hiddenCountries', function(data) {
        var arrayOfHiddenCountriesInStorage = data.hiddenCountries;
        let indexOfItemToRemove = arrayOfHiddenCountriesInStorage.indexOf(countryName)
        if (indexOfItemToRemove < 0) {
            alert("Error. Country not found in storage.");
            return;
        }
        arrayOfHiddenCountriesInStorage.splice(indexOfItemToRemove, 1);
        chrome.storage.sync.set({ hiddenCountries: arrayOfHiddenCountriesInStorage });
    });
    location.reload();
}

setHideFunctionality();
listHiddenCountries();
setRemoveFunctionality();