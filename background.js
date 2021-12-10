chrome.runtime.onInstalled.addListener(function() {
    let initiallyHiddenCountries = [
        "Afghanistan", 
        "Bangladesh", 
        "India",
        "United Arab Emirates",
        "Philippines",
        "Nepal",
        "Romania",
        "Saudi Arabia",
        "Cyprus",
        "Pakistan",
        "Ghana",
        "Oman",
        "Mexico",
        "Turkey",
        
    ];
    chrome.storage.sync.set({ hiddenCountries: initiallyHiddenCountries });
});