import OnClickData = chrome.contextMenus.OnClickData;

chrome.runtime.onInstalled.addListener(function() {
    // Creating the context menu item
    chrome.contextMenus.create({
        id: "summarizer",
        title: "Summarize This",
        contexts: ['selection'],
    })

    console.log("Created context menu")

    // Create listener for user clicks, invokes saveSelection
    chrome.contextMenus.onClicked.addListener(saveSelection);
});

function saveSelection(info: OnClickData) {
    if (info == null) {
        console.log("Error: OnClickData is null");
        return;
    }

    const currentSelection = info.selectionText;
    console.log("Current selection: " + currentSelection);
}