chrome.storage.sync.set({
    unread: 0
});

setTimeout(function () {
    chrome.storage.sync.get("unread", function (items) {
        chrome.browserAction.setBadgeText({
            text: String(items.unread + 1)
        });
        chrome.storage.sync.set({
            unread: items.unread + 1
        });
        console.log("update");
    });
}, 3000);


setTimeout(function () {
    chrome.storage.sync.get("unread", function (items) {
        chrome.browserAction.setBadgeText({
            text: String(items.unread + 1)
        });
        chrome.storage.sync.set({
            unread: items.unread + 1
        });
        console.log("update again");
    });
}, 5000);

var testvar = "testvariable";