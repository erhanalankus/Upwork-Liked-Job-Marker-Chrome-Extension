function setHideFunctionality() {
    let submitButton = document.getElementById("hideCountryForm").elements["submitFormButton"];
    submitButton.addEventListener('click', function() {
        addCountryToBlacklist(document.getElementById("hideCountryForm").elements["countryName"]);
    });
}

function addCountryToBlacklist(countryName) {
    alert(countryName.value);
}

setHideFunctionality();