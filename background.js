chrome.runtime.onInstalled.addListener(function() {
    let initiallyHiddenCountries = ["Afghanistan", "Bangladesh"];
    chrome.storage.sync.set({ hiddenCountries: initiallyHiddenCountries });
});