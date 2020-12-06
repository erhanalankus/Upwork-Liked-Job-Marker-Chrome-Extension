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
        
    ];
    chrome.storage.sync.set({ hiddenCountries: initiallyHiddenCountries });
});