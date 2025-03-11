import OnClickData = chrome.contextMenus.OnClickData;
import {GoogleGenerativeAI} from "@google/generative-ai";

// Imports generative AI model from Gemini API using key
const genAI = new GoogleGenerativeAI("API KEY");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

/**
 * Upon installation of extension creates a context menu item for summarization
 */
chrome.runtime.onInstalled.addListener(function() {
    // Creating the context menu item
    chrome.contextMenus.create({
        id: "summarizer",
        title: "Summarize This",
        contexts: ['selection'],
    })

    console.log("Created context menu")

    // Create listener for user clicks, invokes promptWithCurrentSelection
    chrome.contextMenus.onClicked.addListener(promptWithCurrentSelection);
});

async function promptWithCurrentSelection(info: OnClickData) {
    // Check to see if current selection is defined
    if (info.selectionText == null) {
        console.log("Error: OnClickData is null");
        return;
    }

    // Prompt sent to Gemini
    const prompt = "Summarize this: " + info.selectionText;

    // Response from Gemini to prompt
    const result = await model.generateContent(prompt);

    const candidate = result.response.candidates?.[0] ?? null;

    if (candidate == null) {
        return;
    } else {
        console.log("Summary: " + candidate.content.parts[0].text);
    }
}