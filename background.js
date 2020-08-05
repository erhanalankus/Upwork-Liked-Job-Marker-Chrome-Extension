chrome.runtime.onInstalled.addListener(function() {
    let initiallyHiddenCountries = ["Afghanistan", "Bangladesh", "India"];
    chrome.storage.sync.set({ hiddenCountries: initiallyHiddenCountries });
});